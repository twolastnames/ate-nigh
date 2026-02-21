"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { DayPickerTypes } from "./DayPickerTypes";

const Container = styled(Box)({
})

export function DayPicker(props: DayPickerTypes) {
    return <Container data-testid="DayPicker"></Container>
}
