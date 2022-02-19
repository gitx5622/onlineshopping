/// <reference types="cypress"/>

describe('it should visits main page', () => {
    it('The react application correctly loads', () => {
        cy.visit('/')
        cy.get('[data-test="okay-button"]').contains('Ok', { timeout: 7000}).should('exist')
        cy.get('[data-test="okay-button"]').contains('Ok', { timeout: 7000}).click()
        cy.get('[data-test="okay-button"]').contains('Ok', { timeout: 7000}).should('not.exist')
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("All Products").should("exist")
        cy.contains("Ascending").should("exist")
        cy.get('[data-test="login"]').contains('Login').should("exist")
    })
})