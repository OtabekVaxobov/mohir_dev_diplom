import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  const { id } = JSON.parse(req.body);
  const { searchParams } = new URL(req.url!);
  const petName = searchParams.get('petName');
  const ownerName = searchParams.get('ownerName');
  
  console.error('handler', id, method, req.body);
  try {
   
    const { rows } = await sql`DELETE FROM Pets WHERE ID = ${id};`
        
    res.status(200).json(rows);

  } catch(error) {
    console.error(error);
  }
  
}