// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postData = await fetch(
    "http://127.0.0.1:8000/api/users",

    {
      method: "POST",
      body: JSON.stringify({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      }),
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.json(postData);
}
