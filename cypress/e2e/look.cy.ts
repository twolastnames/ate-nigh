

describe('Look', () => {
    it('can look', () => {
        cy.visit('http://localhost:3000/look')
        cy.contains('Look')
        cy.contains('Milk, whole', {timeout: 10000})
    })
});
