import { Request, Response } from 'express';
import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const isDbConfigured = databaseUrl && !databaseUrl.includes('placeholder');
const sql = isDbConfigured ? neon(databaseUrl) : null;

const resendApiKey = process.env.RESEND_API_KEY;
const isEmailConfigured = resendApiKey && !resendApiKey.includes('placeholder');
const resend = isEmailConfigured ? new Resend(resendApiKey) : null;

export default async function handler(req: Request, res: Response) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { name, company, email, phone, country, segment, requirement, volume, message } = req.body;

  if (!name || !company || !email) {
    return res.status(400).json({ success: false, error: 'Name, Company, and Email are required fields.' });
  }

  console.log(`Received partnership submission in Vercel function from ${name} (${company})`);

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

    let emailSentSuccessfully = false;
    // 2. Send email notification via Resend
    if (resend) {
      const fromEmail = process.env.RESEND_FROM || 'onboarding@resend.dev';
      const toEmail = process.env.RESEND_TO || 'csepress@multivistaglobal.com';

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
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
          
          <p style="font-size: 12px; color: #64748b; margin-top: 30px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            This inquiry was submitted via the Multivista Printers website contact form.
          </p>
        </div>
      `;

      try {
        const { data: emailData, error: emailError } = await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `New Partnership Inquiry from ${company}`,
          html: emailHtml,
        });

        if (emailError) {
          console.error('Resend API error (non-fatal):', emailError);
        } else {
          console.log(`Notification email successfully sent via Resend to ${toEmail}`);
          emailSentSuccessfully = true;
        }
      } catch (emailErr) {
        console.error('Resend connection error (non-fatal):', emailErr);
      }
    } else {
      console.warn('Resend API key is not configured. Skipping email sending.');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Inquiry submitted successfully.',
      savedToDb: !!isDbConfigured,
      emailSent: emailSentSuccessfully 
    });

  } catch (error) {
    console.error('Failed to process partnership submission in Vercel function:', error);
    return res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Internal server error processing submission.' 
    });
  }
}
