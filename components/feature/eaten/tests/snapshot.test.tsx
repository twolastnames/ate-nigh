("use client");
import React from "react";
import { render } from "@testing-library/react";
import { Eaten } from "../Eaten";

describe("Eaten", () => {
  it("matches snapshot", () => {
    const mockAtes = [
      {
        persistantId: 1,
        amount: 100,
        foodId: 123,
        time: new Date("2024-02-21T12:00:00"),
      },
      {
        persistantId: 2,
        amount: 200,
        foodId: 456,
        time: new Date("2024-02-21T13:00:00"),
      },
    ];

    const { container } = render(<Eaten data={mockAtes} />);
    expect(container).toMatchSnapshot();
  });
});
