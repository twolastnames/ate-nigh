"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { FoodDescriptionTypes } from "./FoodDescriptionTypes";
import { useFoodGet } from "@/hooks/api";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { Table } from "@/components/ui/table/Table";

const Container = styled(Box)({});

const headers = ["Name", "Amount", "Units"];

export function FoodDescription(props: FoodDescriptionTypes) {
  const response = useFoodGet({ id: props.id });
  const title = response.data?.description;
  const data = response.data?.nutrients.map((nutrient) => [
    nutrient.name,
    nutrient.amount,
    nutrient.units,
  ]);
  return (
    <Container data-testid="FoodDescription">
      <Spinner responses={[response]}>
        <Table title={title || ""} headers={headers} data={data || []} />
      </Spinner>
    </Container>
  );
}
