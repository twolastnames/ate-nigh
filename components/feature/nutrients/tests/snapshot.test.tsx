"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Nutrients } from "../Nutrients";

test("Nutrients", () => {
  render(<Nutrients />);
  expect(screen.getByTestId("Nutrients")).toMatchSnapshot();
});
