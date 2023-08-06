// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const ress = await fetch("http://127.0.0.1:8000/api/users", {
      method: "POST",
      body: JSON.stringify({
        id: "dsdssd",
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await ress.json();
    return res.json(data);
  } else {
    const getData = await fetch("http://127.0.0.1:8000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await getData.json();

    return res.json(data);
  }
}
