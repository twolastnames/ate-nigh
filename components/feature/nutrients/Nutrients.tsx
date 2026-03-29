"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { NutrientsTypes } from "./NutrientsTypes";
import { useNutrientsGet } from "../../../hooks/api";
import { Table } from "../../ui/table/Table";
import { Spinner } from "@/components/ui/spinner/Spinner";

const Container = styled(Box)({});

type NutrientMap = { [arg: string]: { amount: number; units: string } };

export function Nutrients(props: NutrientsTypes) {
  const response = useNutrientsGet(
    {
      from: props.from,
      to: props.to,
    },
    {},
  );

  const nutrients = response.data || [];

  const nutrientMap: NutrientMap = nutrients.reduce(
    (current, { name, amount, units }) => ({
      ...current,
      [name]: { amount, units },
    }),
    {} as NutrientMap,
  );

  const sortedNutrients = Object.entries(nutrientMap)
    .sort(([nameA], [nameB]) => {
      if (nameA === "Energy") return -1;
      if (nameB === "Energy") return 1;
      return nameA.localeCompare(nameB);
    })
    .map(([name, { amount, units }]) => [name, amount.toFixed(2), units]);

  return (
    <Container data-testid="Nutrients">
      <Spinner responses={[response]}>
        <Table
          title="Nutrients"
          headers={["Nutrient", "Amount", "Units"]}
          data={sortedNutrients}
        />
      </Spinner>
    </Container>
  );
}
