/// <reference types="cypress"/>

describe('it should visits main page', () => {
    it('The react application correctly loads', () => {
        cy.visit('/')
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("All Products").should("exist")
        cy.contains("Ascending").should("exist")
        cy.get('[data-test="login"]').contains('Login').should("exist")
    })
})