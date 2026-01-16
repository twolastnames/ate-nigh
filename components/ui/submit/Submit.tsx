"use client";
import React from "react";
import { Box, Button, styled } from "@mui/material";
import { SubmitTypes } from "./SubmitTypes";
import { rowish } from "@/components/styles";

const Container = styled(Box)({});

export function Submit(props: SubmitTypes) {
  return (
    <Container data-testid="Submit">
      <Button onClick={props.onClick} sx={rowish} variant="contained">
        Submit
      </Button>
    </Container>
  );
}
