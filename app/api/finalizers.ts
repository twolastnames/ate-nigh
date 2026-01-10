import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function raw(response: any[]) {
  return NextResponse.json({
    data: response,
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function haveOne(response: any[]) {
  if (response.length !== 1) {
    return NextResponse.json(
      {
        error: "did not find one element",
      },
      {
        status: 404,
      },
    );
  } else {
    return NextResponse.json({
      data: response[0],
    });
  }
}
