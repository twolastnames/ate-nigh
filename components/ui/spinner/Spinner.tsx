"use client";
import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { SpinnerTypes } from "./SpinnerTypes";
import { Stage } from "@/hooks/helpersTypes";

export function Spinner(props: SpinnerTypes) {
  const error = props.responses.find(
    (response) => response.stage === Stage.ERROR,
  );
  if (error) {
    return (
      <Box>
        Error({error.code}): {error.error}
      </Box>
    );
  }
  const fetching = props.responses.find(
    (response) => response.stage === Stage.FETCHING,
  );
  if (fetching) {
    return <CircularProgress data-testid="Fetching"/>;
  }
  return props.children;
}
