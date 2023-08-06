// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const ress = await fetch("http://127.0.0.1:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "dsddsds1111",
        image: "sdsdsdds",
        content: "asddasds",
      }),
    });
    return res.status(200).send({ ress });
  } else {
    const getData = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await getData.json();

    return res.json(data);
  }
}
