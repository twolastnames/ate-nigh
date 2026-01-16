"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Submit } from "../Submit";

test("Submit", () => {
  render(<Submit />);
  expect(screen.getByTestId("Submit")).toMatchSnapshot();
});
