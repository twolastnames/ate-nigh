"use client"
import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "../Spinner"
import { Stage } from "@/hooks/helpersTypes";

test('work', () => {
    render(< Spinner responses={[{stage: Stage.FETCHING }]} />)
    expect(screen.getByTestId("Fetching")).toMatchSnapshot()
});
