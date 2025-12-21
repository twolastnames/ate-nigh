"use client";

import { testHost } from "../../cypress/helpers";

describe('TestPage4', () => {
    it('can look', () => {
        cy.visit(`${testHost}/testPage4`)
        cy.contains('TestPage4')
    })
});

