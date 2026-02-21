"use client";
import React from "react";
import { render } from "@testing-library/react";
import { DayPicker } from "../DayPicker";

describe("DayPicker", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <DayPicker value={new Date("2024-02-21")} onChange={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
});
