"use client";
import React from "react";
import { Container } from "@mui/material";
import { EatenTypes } from "./EatenTypes";
import { Table } from "../../ui/table/Table";
import { grams } from "@/util/units";

const defaultTimeFormater = (date: Date) => date.toLocaleTimeString();

export function Eaten(props: EatenTypes) {
  const headers = ["Time", "Food ID", "Amount (oz)"];
  const data = [...props.data]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .map((ate) => [
      (props.formatDate || defaultTimeFormater)(new Date(ate.time)),
      ate.foodId,
      grams(ate.amount).asOunces(),
    ]);

  return (
    <Container data-testid="Eaten">
      <Table title="Items Eaten" headers={headers} data={data} />
    </Container>
  );
}
