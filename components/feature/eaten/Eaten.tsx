"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import { EatenTypes } from "./EatenTypes";

const Container = styled(Box)({
})

export function Eaten(props: EatenTypes) {
    return <Container data-testid="Eaten"></Container>
}
"use client";
import React from "react";
import { Container } from "@mui/material";
import { EatenTypes } from "./EatenTypes";
import { Table } from "../../ui/table/Table";

export function Eaten(props: EatenTypes) {
  const headers = ["Time", "Food ID", "Amount (g)"];
  const data = [...props.ates]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .map(ate => [
      new Date(ate.time).toLocaleString(),
      ate.foodId,
      ate.amount
    ]);

  return (
    <Container data-testid="Eaten">
      <Table 
        title="Eaten Items"
        headers={headers}
        data={data}
      />
    </Container>
  );
}
