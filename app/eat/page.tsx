"use client";
import { FoodSelector } from "@/components/feature/foodSelector/FoodSelector";
import { Box, styled } from "@mui/material";

const Container = styled(Box)({});

export default function Eat() {
  return (
    <Container>
      <FoodSelector />
    </Container>
  );
}
