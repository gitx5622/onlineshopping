/// <reference types="cypress"/>

describe('it should visits main page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('The react application correctly loads', () => {
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("fakeStore API").should("exist")
    })
})