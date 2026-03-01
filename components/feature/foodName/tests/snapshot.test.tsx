"use client"
import React from "react";
import { render, screen } from "@testing-library/react";
import { FoodName } from "../FoodName"

test('FoodName', () => {
    render(< FoodName />)
    expect(screen.getByTestId("FoodName")).toMatchSnapshot()
});
