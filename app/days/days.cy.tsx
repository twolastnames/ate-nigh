"use client";

import { testHost } from "../../cypress/helpers";

describe("days", () => {
  it("can look", () => {
    cy.visit(`${testHost}/days`);
  });
});
