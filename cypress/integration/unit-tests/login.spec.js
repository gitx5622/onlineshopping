/// <reference types="cypress"/>

describe('it should visits login page and tests elements', () => {
    it('onclick login it should navigste to login url', () => {
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
    it('should switch btn login and create account component', () => {    
        cy.visit('/user/login')   
        cy.get('[data-test="create-account"]').click()
        cy.contains('USER REGISTRATION').should('exist')
        cy.contains('SIGN IN').should('not.exist')
        cy.get('[data-test="login-account"]').click()
        cy.contains('USER REGISTRATION').should('not.exist')
        cy.contains('SIGN IN').should('exist')
    })
})