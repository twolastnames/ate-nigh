"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { EatenTypes } from "./EatenTypes";
import { Table } from "../../ui/table/Table";
import { grams } from "@/util/units";
import { FoodName } from "../foodName/FoodName";

const defaultTimeFormater = (date: Date) => date.toLocaleTimeString();
const Container = styled(Box)({});

export function Eaten(props: EatenTypes) {
  const headers = ["Time", "Food", "Amount (oz)"];
  const data = [...props.data]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .map((ate) => [
      (props.formatDate || defaultTimeFormater)(new Date(ate.time)),
      <FoodName key={ate.persistantId} id={ate.foodId} />,
      grams(ate.amount).asOunces(),
    ]);

  return (
    <Container data-testid="Eaten">
      <Table title="Items Eaten" headers={headers} data={data} />
    </Container>
  );
}
