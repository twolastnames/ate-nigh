"use client";
import { useFoodGet } from "@/hooks/api"
import { Box, styled } from "@mui/material";

const LookIn = styled(Box)({
    color: 'green',
})

export default function Look() {
    const response= useFoodGet({id:2705385 })
    return <LookIn>{`Look!: ${{JSON.stringify(response.data?.description || {}, null, 2)}}`}</LookIn>
}
