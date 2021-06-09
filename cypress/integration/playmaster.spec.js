/// <reference types="cypress" />

const defaultToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MTJkMzlhNi0xZDQ1LTQzNmYtOGI1Yy1mMTUyYTY5NGI4OGEiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE2MjMyNzE2MDAsImV4cCI6MTYyMzI3NTIwMCwiYXVkIjoiYjhhYjU3MjQtM2MwYi00MjhiLWE2MmQtOTM4Y2Q1Nzg2YTQ5IiwiaXNzIjoic2FuZGJveC5hY2NvdW50cy5sb2dpLmNvbSIsInN1YiI6ImVmYWRmN2Q4LTJlMGYtNDAwNS05NDMxLTUxMWRiYThlZTlhZSJ9.KMoZamt6R8laJP5OJ8cgrAFixiRKAe8BzrTINLLMQfSdvAZHs2NWba1ZoGnZXRUGsM7yMT8p8np0-ETpsQFnrerYW9KWfz-8BegO-3AagvhRnj0rhDwBwf-lw5mqtysljyaTvKiH3ISjeqzoUi4JiMoXxG_WRGpMEs3Kjjfm9IHIarkNt6IcMjCu5Cz2B9NMsSyBQPoKAOMPgYcb0sG21htZvOCpy9hZGUyQasNI90wsxIrusCt2d2lrpK7iIve8pugajoTd_hZrMN38y4XD4ll0qyzIWv8nfsx7QalK5mfq3LLtov0GUNcuZy0BvRJRBEXqew_wUb8AK-occejbtB-UXsQECH9edvVcgJeCav1ZB4Zw7NazXWL1ARVrsa79YCg08_QfCz9510bWlnXcyxqu0y4clEB7c5rs1mkNrRuTOQAWsUDYchNfDG2pNKZbTWKHmDwmVbcsFpaNMnYy1TlpNG6sTmBuL-X0Fa4BrhVppIm7knbzg5JthRbXbmL6gblCd3QRPYRHa3ZUtlD2aeusyUn0jPSkP5U738Cjf_DDzxjEr5ih-JSSGc3qdm4J32jZEYu-l7DAJh3oHl97EhPuMZyO91Uj4ejsXGhYDLBHBwaWmTCgchv6ekbmf6tvQdZcKsihDvycRRCDbyQur-9aj0orhMhZQRFLNWcfnDM"
const defaultUrlID = "vicot70634-SmokeTest-Pre-Real"

before(() => {
    cy.setCookie('AUTH_TOKEN', defaultToken)
    cy.visit('https://dev-skillmaster-web.np.logitech.io')
})

// describe('Playmaster', () => { 
//     it('Get main menu items', () => {
   
//         cy.get('.top-menu___TPkGB').then( mainMenu => {
//             const profileTab = mainMenu.find(`[href="/profile/${defaultUrlID}"]`).text()
//             const challengesTab = mainMenu.find('[href="/dashboard/challenges"]').text()
//             const baselineTab = mainMenu.find('[href="/dashboard/baseline"]').text()

//             expect(profileTab).to.equal('Profile')
//             expect(challengesTab).to.equal('Challenges')
//             expect(baselineTab).to.equal('Baseline')
//         })
//     })

// })

// describe('Profile', () => { 

//     it('get widgets from Profile page', () => {
//         cy.get(`[href="/profile/${defaultUrlID}"]`).click()
//         cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Global Score')
//         cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Key Weakness')
//         cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Key Strength')
//         cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Global Leaderboard')
//         cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Skill Radar')
//     })

// })

describe('Challange', () => { 

    it('Navigate to Challange page', () => {
        cy.get('[href="/dashboard/challenges"]').click()
        cy.get('[class="ant-menu-title-content"]').contains('FPS Mechanics') //control
    })

    describe('get widgets from Challange page', () => {

        describe('FPS Mechanics section', () => {

            it('Track page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/track"]').click()
                cy.get('[class="tab-container___2UCMH"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH"]').contains('Crosshair Error')
                cy.get('[class="tab-container___2UCMH"]').contains('Crosshair on Target')
            })

            it('Aim Pistol page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/aim_pistol"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Hits on Target')
            })

            it('Aim SMG page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/aim_smg"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Hits on Target')
            })

            it('Aim Rifle page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/aim_rifle"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-shoot"]').contains('Hits on Target')
            })

            it('Perceive page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/perceive"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-perceive"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-perceive"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-perceive"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-perceive"]').contains('Time to Perceive')
                cy.get('[class="tab-container___2UCMH tab-container-perceive"]').contains('Perception Error')
            })

            it('Flick AWP page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/flick_awp"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-flick"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-flick"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-flick"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-flick"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-flick"]').contains('Hits on Target')
            })

            it('Hold AWP page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/hold_awp"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-hold"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-hold"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-hold"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-hold"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-hold"]').contains('Hits on Target')
            })
        })


    })



})

// describe('Baseline', () => { 

//     it('Navigate to Baseline page', () => {
//         cy.get('[href="/dashboard/baseline"]').click()
//         cy.get('[href="/dashboard/baseline/overview"]').contains('Overview')
//     })

// })