"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { FoodNameTypes } from "./FoodNameTypes";

const Container = styled(Box)({
})

export function FoodName(props: FoodNameTypes) {
    return <Container data-testid="FoodName"></Container>
}
