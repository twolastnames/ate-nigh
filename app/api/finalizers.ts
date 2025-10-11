import { NextResponse } from "next/server"

export function haveOne(response: any[]) {
    if(response.length !== 1) {
        return NextResponse.json({
            error: 'did not find one element'}, {
                status: 404
            })
    }  else {
        return NextResponse.json({
        data: response[0]
    })}
}
