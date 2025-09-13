import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(request: NextApiRequest, result: NextApiResponse) {
return NextResponse.json({
    version: '0.0.0-alpha',
}) 
}