"use client";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Table } from "../Table";

test("work", () => {
  render(
    <Table
      headers={["header1", "header2"]}
      data={[
        ["data11", "data12"],
        ["data21", "data22"],
      ]}
      title="My Data"
    />,
  );
  expect(screen.getByTestId("Table")).toMatchSnapshot();
});
