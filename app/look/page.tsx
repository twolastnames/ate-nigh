"use client";
import { useFoodGet } from "@/hooks/api"

export default function Look() {
    const response= useFoodGet({id:2705385 })
    return <>Look!: {JSON.stringify(response.data?.description || {}, null, 2)}</>
}
