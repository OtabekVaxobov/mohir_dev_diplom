import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  const pets = await sql`SELECT * FROM Pets;`;
  try {
    if (!petName || !ownerName)  return NextResponse.json({ pets }, { status: 200 });
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const after_pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ after_pets }, { status: 200 });
}