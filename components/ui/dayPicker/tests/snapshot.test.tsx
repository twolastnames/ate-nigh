"use client"
import React from "react";
import { render, screen } from "@testing-library/react";
import { DayPicker } from "../DayPicker"

test('DayPicker', () => {
    render(< DayPicker />)
    expect(screen.getByTestId("DayPicker")).toMatchSnapshot()
});
