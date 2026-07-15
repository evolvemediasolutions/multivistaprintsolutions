import { neon } from '@neondatabase/serverless';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl || databaseUrl.includes('placeholder')) {
  console.error('Error: DATABASE_URL is not configured in .env file.');
  process.exit(1);
}

const sql = neon(databaseUrl);

async function initDb() {
  console.log('Initializing Neon Database table...');
  try {
    // Create the table
    await sql`
      CREATE TABLE IF NOT EXISTS partnership_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        company VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        country VARCHAR(100),
        segment VARCHAR(100),
        requirement VARCHAR(100),
        volume VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Successfully created partnership_submissions table in Neon Database!');
  } catch (error) {
    console.error('Database initialization failed:', error);
    process.exit(1);
  }
}

initDb();
