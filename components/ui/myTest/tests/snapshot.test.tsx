"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MyTest } from "../MyTest";

test("work", () => {
  render(<MyTest />);
  expect(screen.getByTestId("MyTest")).toMatchSnapshot();
});
