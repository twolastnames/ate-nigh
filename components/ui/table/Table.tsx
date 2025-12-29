"use client";
import React from "react";
import {
  Box,
  styled,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Table as MuiTable,
} from "@mui/material";
import { TableTypes } from "./TableTypes";

const Container = styled(Box)({});

const Title = styled(Box)({});

export function Table(props: TableTypes) {
  return (
    <Container data-testid="Table">
      <Title>{props.title}</Title>
      <MuiTable>
        <TableHead>
          <TableRow>
            {props.headers.map((header, index) => (
              <TableCell key={`head-${index}`}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow key={`row-${index}`}>
              {row.map((cell, index) => (
                <TableCell key={`cell-${index}`}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </Container>
  );
}
