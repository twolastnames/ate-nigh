"use client";
import React from "react";
import { render } from "@testing-library/react";
import { FoodName } from "../FoodName";
import { useFoodGet } from "../../../../hooks/api";
import { Stage } from "../../../../hooks/helpersTypes";

jest.mock("../../../../hooks/api", () => ({
  useFoodGet: jest.fn(() => ({
    data: { description: "Test Food" },
    stage: Stage.SUCCESS
  }))
}));

describe("FoodName", () => {
  it("matches snapshot", () => {
    const { container } = render(
      <FoodName id={123} />
    );
    expect(container).toMatchSnapshot();
  });
});
