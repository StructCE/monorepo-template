import { NextApiRequest, NextApiResponse } from "next";

export function cors(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
}
