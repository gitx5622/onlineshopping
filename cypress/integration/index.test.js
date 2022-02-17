/// <reference types="cypress"/>

describe('it should visits main page', () => {
    beforeEach(() => {
        cy.visit("https://onlineshopping.toprated.co.ke")
    })
    it('The react application correctly loads', () => {
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("fakeStore API").should("exist")
        cy.get("[data-test=okay-button]").click()
        cy.contains("fakeStore API", {timeout: 7000}).should("not.exist")
    })
})