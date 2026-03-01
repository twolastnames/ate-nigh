"use client";
import React from "react";
import { Container } from "@mui/material";
import { FoodNameTypes } from "./FoodNameTypes";
import { useFoodGet } from "@/hooks/api";

export function FoodName(props: FoodNameTypes) {
  const response = useFoodGet({ id: props.id });
  
  return (
    <Container data-testid="FoodName">
      {response.data?.description || ""}
    </Container>
  );
}
