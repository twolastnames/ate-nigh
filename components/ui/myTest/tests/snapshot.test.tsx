"use client"
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { MyTest } from "../MyTest"

test('work', () => {
    render(< MyTest />)
    expect(screen.getByTestId("MyTest")).toMatchSnapshot()
});
