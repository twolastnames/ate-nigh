"use client";
import React from "react";
import { Box, styled } from "@mui/material";

const Container = styled(Box)({});

export function MyTest() {
  return <Container data-testid="MyTest"></Container>;
}
