"use client";
import { FoodDescription } from "@/components/feature/foodDescription/FoodDescription";
import { FoodSelector } from "@/components/feature/foodSelector/FoodSelector";
import { LogAte } from "@/components/feature/logAte/LogAte";
import { section } from "@/components/styles";
import { Box, Stack, styled } from "@mui/material";
import { useState } from "react";

const Container = styled(Box)({});

export default function Eat() {
  const [id, setId] = useState<number | null>(null);
  return (
    <Container>
      <Stack spacing={8}>
        <FoodSelector onChange={setId} />
        {id && (
          <>
            <Box sx={section}>
              <LogAte id={id} />
            </Box>
            <Box sx={section}>
              <FoodDescription id={id} />
            </Box>
          </>
        )}
      </Stack>
    </Container>
  );
}
