'use client'

import { useEffect, useState } from "react"

export default function Home() {
    const [version, setVersion] = useState<string>()
    useEffect(() => {
            (async () => {
                const response = await fetch('/api/version')
                setVersion(`${response.status}: ${await response.text()}`)
        })()
    }, [])
    return <>Hello World: {version}</>
}
