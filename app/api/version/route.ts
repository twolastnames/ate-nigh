import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextApiRequest, result: NextApiResponse) {
  return NextResponse.json({
    version: "0.0.0-alpha",
  });
}
