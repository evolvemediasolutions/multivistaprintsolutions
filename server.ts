import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  app.use(express.json());

  // Setup Neon database client
  const databaseUrl = process.env.DATABASE_URL;
  const isDbConfigured = databaseUrl && !databaseUrl.includes('placeholder');
  const sql = isDbConfigured ? neon(databaseUrl) : null;

  // Setup Resend client
  const resendApiKey = process.env.RESEND_API_KEY;
  const isEmailConfigured = resendApiKey && !resendApiKey.includes('placeholder');
  const resend = isEmailConfigured ? new Resend(resendApiKey) : null;

  // API Endpoint to handle partnership submissions
  app.post('/api/partnership', async (req, res) => {
    const { name, company, email, phone, country, segment, requirement, volume, message } = req.body;

    if (!name || !company || !email) {
      return res.status(400).json({ success: false, error: 'Name, Company, and Email are required fields.' });
    }

    console.log(`Received partnership submission from ${name} (${company})`);

    try {
      // 1. Save data to Neon Database
      if (sql) {
        await sql`
          INSERT INTO partnership_submissions (
            name, company, email, phone, country, segment, requirement, volume, message
          ) VALUES (
            ${name}, ${company}, ${email}, ${phone || null}, ${country || null}, ${segment || null}, ${requirement || null}, ${volume || null}, ${message || null}
          );
        `;
        console.log('Successfully saved to Neon Database!');
      } else {
        console.warn('Neon Database is not configured. Skipping database insertion.');
      }

      // 2. Send email notification via Resend
      if (resend) {
        const fromEmail = process.env.RESEND_FROM || 'onboarding@resend.dev';
        const toEmail = process.env.RESEND_TO || 'csepress@multivistaglobal.com';

        const emailHtml = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-lg: 8px;">
            <h2 style="color: #0057B8; margin-bottom: 20px;">New Partnership Inquiry</h2>
            <p style="font-size: 16px; margin-bottom: 20px;">You have received a new partnership inquiry from the corporate site:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Full Name</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Company / Publisher</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${company}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Email Address</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Phone Number</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${phone || 'N/A'}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Country</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${country || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Publishing Segment</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${segment || 'N/A'}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Project Requirement</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${requirement || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; border: 1px solid #e2e8f0;">Estimated Volume</td>
                <td style="padding: 10px; border: 1px solid #e2e8f0;">${volume || 'N/A'}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-left: 4px solid #0057B8;">
              <h4 style="margin-top: 0; color: #0057B8;">Project Brief / Message:</h4>
              <p style="margin-bottom: 0; white-space: pre-wrap; font-size: 14px;">${message || 'No message provided.'}</p>
            </div>
            
            <p style="font-size: 12px; color: #64748b; margin-top: 30px; text-align: center; border-t: 1px solid #e2e8f0; padding-top: 20px;">
              This inquiry was submitted via the Multivista Printers website contact form.
            </p>
          </div>
        `;

        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `New Partnership Inquiry from ${company}`,
          html: emailHtml,
        });
        console.log(`Notification email successfully sent via Resend to ${toEmail}`);
      } else {
        console.warn('Resend API key is not configured. Skipping email sending.');
      }

      res.status(200).json({ 
        success: true, 
        message: 'Inquiry submitted successfully.',
        savedToDb: !!isDbConfigured,
        emailSent: !!isEmailConfigured 
      });

    } catch (error) {
      console.error('Failed to process partnership submission:', error);
      res.status(500).json({ success: false, error: 'Internal server error processing submission.' });
    }
  });

  // Serve static files / integration with Vite
  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
