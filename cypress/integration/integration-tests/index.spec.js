/// <reference types="cypress"/>

describe('it should visits main page', () => {
    it('should tests components for navbar, productList and product details', () => {
        cy.visit('/')
        cy.get('[data-test="okay-button"]').contains('Ok', { timeout: 7000}).should('exist')
        cy.get('[data-test="okay-button"]').click()
        cy.get('[data-test="okay-button"]').contains('Ok').should('not.exist')
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("All Products").should("exist")
        cy.contains("Products").should("exist")
        cy.contains("Living").should("exist")
        cy.contains("Style").should("exist")
        cy.contains("Style").should("exist")
        cy.contains("Ascending").should("exist")
    })
})