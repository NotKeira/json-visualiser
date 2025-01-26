import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("Received file:", req.body);
  }
  res
    .status(200)
    .json({ status: "success", message: "Successfully received file" });
}
