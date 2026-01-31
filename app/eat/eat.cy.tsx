"use client";

import { testHost } from "../../cypress/helpers";

describe("eat", () => {
  it("can look", () => {
    cy.visit(`${testHost}/eat`);
  });
});
