"use client";
import { FoodDescription as Food } from "@/components/feature/foodDescription/FoodDescription";
import { Box, styled } from "@mui/material";
import { useParams } from "next/navigation";

const Container = styled(Box)({});

export default function FoodDescription() {
  const params = useParams();
  //  const response = useFoodGet({ id: 2705385 });
  return (
    <Container>
      <Food id={Number(params.id)} />
    </Container>
  );
}
