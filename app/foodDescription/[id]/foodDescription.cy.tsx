"use client";

import { testHost } from "../../../cypress/helpers";

describe("FoodDescription", () => {
  it("can look", () => {
    cy.visit(`${testHost}/foodDescription/2705385`);
    cy.contains("Name");
  });
});
