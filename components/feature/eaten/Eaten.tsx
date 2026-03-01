"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { EatenTypes } from "./EatenTypes";

const Container = styled(Box)({
})

export function Eaten(props: EatenTypes) {
    return <Container data-testid="Eaten"></Container>
}
