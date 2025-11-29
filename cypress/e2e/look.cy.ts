import { testHost } from "../helpers";

describe('Look', () => {
    it('can look', () => {
        cy.visit(`${testHost}/look`)
        cy.contains('Look')
        cy.contains('Milk, whole', {timeout: 10000})
    })
});
