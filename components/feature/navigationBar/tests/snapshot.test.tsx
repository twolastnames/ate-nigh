"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { NavigationBar } from "../NavigationBar";

test("NavigationBar", () => {
  render(<NavigationBar />);
  expect(screen.getByTestId("NavigationBar")).toMatchSnapshot();
});
