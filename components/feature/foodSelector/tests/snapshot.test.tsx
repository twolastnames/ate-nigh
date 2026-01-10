"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { FoodSelector } from "../FoodSelector";

test("FoodSelector", () => {
  render(<FoodSelector />);
  expect(screen.getByTestId("FoodSelector")).toMatchSnapshot();
});
