"use client"
import { GetResponse, Stage } from "./helpersTypes";
import { useEffect, useState } from "react";

function getStage(code: number) : Stage {
    return isNaN(code) ? Stage.ERROR : code >= 200 && code < 300 ? Stage.SUCCESS : Stage.ERROR;
}

export function useBaseGet<PAYLOAD, ARGS extends {[arg: string]: any}>(path: string, args: ARGS) : GetResponse<PAYLOAD> {
    const [state, setState] = useState<GetResponse<PAYLOAD>>({stage: Stage.FETCHING})
    useEffect(() => {
        (async () => {
            const paramaters = Object.entries(args).map(([key, value] ) => `${
                encodeURIComponent(key)
            }=${
                encodeURIComponent(String(value))
            }`).join('&')
            const response = await fetch(`${path}${paramaters ? '?' : ""}${paramaters}`)
            setState({
                ...(await response.json()),
                code: Number(response.status),
                stage: getStage(response.status),
            }) 
        })()
    }, [])
    return state
}

