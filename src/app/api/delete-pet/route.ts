import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest) {
  const method = req.method;
  const { searchParams } = new URL(req.url!);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  const pets = await sql`SELECT * FROM Pets;`;
  const deff = 'null'
  console.error('handler', petName, method, req.body);
  try {
    if (!petName)  return NextResponse.json({ pets }, { status: 200 });
     await sql`DELETE FROM Pets WHERE Name = ${petName};`
  } catch(error) {
    console.error(error);
  }
  const after_pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ after_pets }, { status: 200 });
}