"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { FoodDescription } from "../FoodDescription";
import { Stage } from "@/hooks/helpersTypes";

jest.mock("../../../../hooks/api", () => ({
  useFoodGet: () => ({
    stage: Stage.SUCCESS,
    data: {
      _id: "68c754f5a18cdb7559dc9c2e",
      nutrients: [
        {
          persistantId: 34136224,
          name: "Protein",
          units: "g",
          amount: 3.27,
          _id: "68c754f5a18cdb7559dc9c2f",
        },
        {
          persistantId: 34136225,
          name: "Total lipid (fat)",
          units: "g",
          amount: 3.2,
          _id: "68c754f5a18cdb7559dc9c30",
        },
        {
          persistantId: 34136288,
          name: "Fatty acids, total polyunsaturated",
          units: "g",
          amount: 0.108,
          _id: "68c754f5a18cdb7559dc9c5c",
        },
      ],
      persistantId: 2705385,
      description: "Milk, whole",
      __v: 0,
    },
  }),
}));

test("FoodDescription", () => {
  render(<FoodDescription id={5} />);
  expect(screen.getByTestId("FoodDescription")).toMatchSnapshot();
});
