/// <reference types="cypress" />

const defaultToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MDU0MGIzMi05ZTdkLTQxN2MtOTg5MC1hMjIyZjlkMTljMjYiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE2MjMyNjc3ODAsImV4cCI6MTYyMzI3MTM4MCwiYXVkIjoiYjhhYjU3MjQtM2MwYi00MjhiLWE2MmQtOTM4Y2Q1Nzg2YTQ5IiwiaXNzIjoic2FuZGJveC5hY2NvdW50cy5sb2dpLmNvbSIsInN1YiI6ImVmYWRmN2Q4LTJlMGYtNDAwNS05NDMxLTUxMWRiYThlZTlhZSJ9.hC4clBfBCRc5k88e0d6L63Ot_ycgLtaggA6GUHugTbIcktIA_P4UM8VNPA9LV4rtt0FZR0loVWM7o1aATJKw_EwuAvmSdtCY9SxcVxUu3pQkm2aDFOkcES45nJfHY9MUZ1LLWbEteY3IwneUF4KzZlTr8Nb2yxQK6_0B4L8IvpiprUNiuGUcf5gKUkLEyFZE1wZkC_eXpnRLVmQRbW-dPrNgrdLRPpMbXjW8TNv-1Fv5UmVx7b6vKiCrZzdsWza7Gj8v7TLv56JT1GZAYBd9GnOHpEyPfNVCCr4e8YYYIb0Hr40w_MvuJ2EzBmUVxibwnzOkM3u9atrmY7TK2yHSyOXY-CsgUccxfsnPq3xMsTVzRV2t8lUn7TK1Dq41OSJT4POvKozPh3XMGD2rQ9ipZu_SsTSD66zkfJi3HWR6NN2bHtWNuQzRqPRyRx-KJ2RVzQPkXMD4FSaVbsAM3KbhgYGw_n-plivXHSai4tBD_tN6oJeV4PAAazobviL99YnTbnUKlvH4CmyxIpmeJXUjYmUZ2DbPRqVxQpaUlr6yGvCo5c3Tx_xOo9Hs9FsSss43iZA9gEEK9HSiyxDj-FqdxXpanpImG23vrddMASmPCowirualc3jh19H9HT-fwUz5glIfrkmKmryl7CzunrPd9SqnCiMWoEWFmSKKyYTxHBc"
const defaultUrlID = "vicot70634-SmokeTest-Pre-Real"



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

describe('Playmaster', () => {
    beforeEach(() => {
        cy.setCookie('AUTH_TOKEN', defaultToken)
        cy.visit('https://dev-skillmaster-web.np.logitech.io')
    })

    
    it('Get main menu items', () => {
   
        cy.get('.top-menu___TPkGB').then( mainMenu => {
            const profileTab = mainMenu.find(`[href="/profile/${defaultUrlID}"]`).text()
            const challengesTab = mainMenu.find('[href="/dashboard/challenges"]').text()
            const baselineTab = mainMenu.find('[href="/dashboard/baseline"]').text()

            expect(profileTab).to.equal('Profile')
            expect(challengesTab).to.equal('Challenges')
            expect(baselineTab).to.equal('Baseline')
        })
    })

    it('get widgets from Profile page', () => {
        cy.get(`[href="/profile/${defaultUrlID}"]`).click()
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Global Score')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Key Weakness')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Key Strength')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Global Leaderboard')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Skill Radar')
    })


    it('Navigate to Challange page', () => {
        cy.get('[href="/dashboard/challenges"]').click()
        cy.get('[class="ant-menu-title-content"]').contains('FPS Mechanics')
    })

    it('Navigate to Baseline page', () => {
        cy.get('[href="/dashboard/baseline"]').click()
        cy.get('[href="/dashboard/baseline/overview"]').contains('Overview')
    })




})
