"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { LogAte } from "../LogAte";

test("LogAte", () => {
  render(<LogAte />);
  expect(screen.getByTestId("LogAte")).toMatchSnapshot();
});
