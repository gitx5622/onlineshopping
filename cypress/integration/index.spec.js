/// <reference types="cypress"/>

describe('it should visits main page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('The react application correctly loads', () => {
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("All Products").should("exist")
        cy.contains("Ascending").should("exist")
    })
    it('onclick login it should navigste to login url', () => {
        cy.get('[data-testid="login"]').should("exist")
        cy.get('[data-testid="login"]').click()
        cy.url().should('include', '/user/login')
    })
})