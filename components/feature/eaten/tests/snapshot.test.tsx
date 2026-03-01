"use client"
import React from "react";
import { render, screen } from "@testing-library/react";
import { Eaten } from "../Eaten"

test('Eaten', () => {
    render(< Eaten />)
    expect(screen.getByTestId("Eaten")).toMatchSnapshot()
});
