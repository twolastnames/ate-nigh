"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Spinner } from "../Spinner";
import { Stage } from "@/hooks/helpersTypes";

test("work", () => {
  render(
    <Spinner responses={[{ data: {}, stage: Stage.SUCCESS }]}>
      <div data-testid="Child">Good Test</div>
    </Spinner>,
  );
  expect(screen.getByTestId("Child")).toMatchSnapshot();
});
