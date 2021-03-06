/// <reference types="cypress"/>

describe('user experience -> should test from start to end', () => {
    it('should tests all components in the homepage', () => {
        cy.visit('/')
        cy.contains("ONLINE SHOPPING KENYA").should("exist")
        cy.contains("All Products").should("exist")
        cy.contains("Products").should("exist")
        cy.contains("Living").should("exist")
        cy.contains("Style").should("exist")
        cy.contains("Style").should("exist")
        cy.contains("Ascending").should("exist")
    })
     it('should navigate to sign in page and ensure proper authentication', () => {
        cy.visit('/user/login')
        cy.contains('SIGN IN').should('exist')
        cy.contains('SIGN IN').should('exist')
        cy.get('[data-test="username"]').type('donero')
        cy.get('[data-test="password"]').type('ewedon')
        cy.contains('Logout').should('not.exist')
        cy.contains('Register here').should('exist')
        cy.get('[data-test="login-button"]').click()
        cy.contains('Logout', { timeout: 7000}).should('exist')
    })
    it('should switch btn login and create account component on button click(right)', () => {    
        cy.visit('/user/login')   
        cy.get('[data-test="create-account"]').click()
        cy.contains('USER REGISTRATION').should('exist')
        cy.contains('SIGN IN').should('not.exist')
        cy.get('[data-test="login-account"]').click()
        cy.contains('USER REGISTRATION').should('not.exist')
        cy.contains('SIGN IN').should('exist')
    })
})