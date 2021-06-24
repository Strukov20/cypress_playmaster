/// <reference types="cypress" />

import {defaultToken} from "./variables";

describe('Playmaster Log IN', () => {
    it('logIn', () => {
        cy.visit('https://dev-skillmaster-web.np.logitech.io/')
            .contains('Early Access Sign Up / Login').click()
        cy.get('#signin__email').type('bsdevx+9@gmail.com')
        cy.get('#signin__password').type('bsdevx+9@gmail.com')
            .get('#signin__submit').click()
            .setCookie('AUTH_TOKEN', defaultToken)
    })

    it('logOut', () => {
        cy.visit('https://dev-skillmaster-web.np.logitech.io/')
            .setCookie('AUTH_TOKEN', defaultToken)
        cy.get('[class="ant-avatar ant-avatar-circle ant-avatar-image ant-dropdown-trigger user-avatar___3VFdW"]').click()
        cy.get('[class="buttonCyan logout-button___3XbSn"]').contains('Sign out').click()
        // cy.get('[class="home-main-title___swsmb"]').contains('PUSH YOUR CS:GO SKILLS WITH PLAYMASTER')
    })
})