// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sql } from "@vercel/postgres";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { rows } = await sql`SELECT * FROM users`;

  res.status(200).json({ rows });
}
