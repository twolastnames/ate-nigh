import type { NextApiRequest, NextApiResponse } from "next";

export function doRouteGet<BASE, RESPONSE>(
    base: BASE, definition: any,
    request: NextApiRequest, result: NextApiResponse
) : RESPONSE {
    
}

export function doRoutePost<BASE>(
    base: BASE, definition: any,
    request: NextApiRequest, result: NextApiResponse
) : Response {
    
}

