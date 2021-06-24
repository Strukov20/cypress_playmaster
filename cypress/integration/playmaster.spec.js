/// <reference types="cypress" />

const defaultToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMzkzYmY4Zi1mNzNmLTRjMzEtOGNiNC05OWNmZGIyMDYxZTYiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE2MjQ1NjA4NTcsImV4cCI6MTYyNDU2NDQ1NywiYXVkIjoiYjhhYjU3MjQtM2MwYi00MjhiLWE2MmQtOTM4Y2Q1Nzg2YTQ5IiwiaXNzIjoic2FuZGJveC5hY2NvdW50cy5sb2dpLmNvbSIsInN1YiI6Ijg4MWRjYjRmLTFkYTgtNGQ0ZS1hNTI0LTE1MWJiNmEyOGZmZCJ9.nTbEwkg2DvZF-XpGgL7vSRBVizMibr9sozssZxQ6ivhvAAg95Sx9qGP64Jxc1ZOU3B0gSTQKoPV6j3oUGmp4NGkjU8BXs4IhOda4OYFMg4iNlzi69cnq6g2OP6iaa92I2uXCzM-xlbPFQ6wmnz-SImQrkgVvcuWE9U_p6JWiIvbEy38kmXlWqOB2VqSLo2QwfAyFXLQ0ydsnbJaXjbG-lhTWdmGDVaWkTJQa9H8_4Mwvst72MO-Bx0lzH2P_Nc3QpaxkaCh1bjBBzfy2Nbu8BPbFEpyAIPZPJ9vr-iQUy1w4XV3usILmCGlNrT62-Wet7ZlYxbCaTxHo-2fK09ZqGclh_Ux_JsJpRD-8CAHR0_xn4T750epPSxwuNQ-zRVxb50SNh9yBaIeRgClsjybwBYDNeP3jTqoHbhQ6VPbXVzS9D5uPrvZMjOqdYoyEaukLFjeGZU0OSeeOpFCmm4dDtqFaHNK0B9dQB53OnqhaNOVKP1d9ZrI_XIWH5BoXtvTBJjerPLhAmiEEW2tQsKV4KMxx_1l5BiDseoo3O9QsyBgOJMcDa9YY3uazlHOlD15W_arFj4uEA4Ee9_jzqVG8tY1DlYBwybZxBEq5TuOGGPEG0ChVH3YvHK1FOC_Lur4IYVp2nZxePBSq1u0U61FUg7EjQpbbtl8a7Fh93sucj8c"
const defaultUrlID = "pojay41635"
const memberSince = "18.06.2021"
const profileKeyWeakness = "Aim Pistol"
const profileKeyStrength = "Peek Rifle"
const baselineKeyWeakness = "Spray"
const baselineKeyStrength = "Track"

before(() => {
    cy.setCookie('AUTH_TOKEN', defaultToken)
    cy.visit('https://dev-skillmaster-web.np.logitech.io')
})

describe('Playmaster', () => { 
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

})

describe('Profile', () => { 
    it('Play now tooltip', () => {
        cy.get('[class="cta-message-text___3_ZAU"]').contains(`Challenge your ${profileKeyWeakness} to improve your play`)
    })

    it('get widgets from Profile page', () => {
        cy.get(`[href="/profile/${defaultUrlID}"]`).contains('Profile').click()
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Global Score')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Key Weakness')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains(`${profileKeyWeakness}`)
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Key Strength')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains(`${profileKeyStrength}`)
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Global Leaderboard')
        cy.get('[class="dashboard-summary___1El0q dashboard-summary"]').contains('Skill Radar')
    })

})

describe('Challange', () => { 

    it('Play now tooltip', () => {
        cy.get('[class="cta-message-text___3_ZAU"]').contains(`Challenge your ${profileKeyWeakness} to improve your play`)
    })

    it('Navigate to Challange page', () => {
        cy.get('[href="/dashboard/challenges"]').click()
        cy.get('[class="ant-menu-title-content"]').contains('FPS Mechanics') //control
        cy.get('[class="ant-menu-title-content"]').contains('CS:GO Specifics') //control
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

        //-----------------------------------

        describe('CS:GO Specifics section', () => {

            it('Peek Pistol page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/peek_pistol"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Hits on Target')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Time to frag')
            })

            it('Peek SMG page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/peek_smg"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Hits on Target')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Time to frag')
            })

            it('Peek Rifle page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/peek_rifle"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Hits on Target')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Time to frag')
            })

            it('Peek AWP page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/peek_awp"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Frag Percentage')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Hits on Target')
                cy.get('[class="tab-container___2UCMH tab-container-strafe"]').contains('Time to frag')
            })

            it('Spray page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/spray"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-spray"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-spray"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-spray"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-spray"]').contains('Hits on Target')
            })

            it('Jump page', () => {
                cy.get('[href="/dashboard/challenges"]').click()
                cy.get('[href="/dashboard/challenges/jump"]').click()
                cy.get('[class="tab-container___2UCMH tab-container-move"]').contains('Skill Score')
                cy.get('[class="tab-container___2UCMH tab-container-move"]').contains('Skill Leaderboard')
                cy.get('[class="tab-container___2UCMH tab-container-move"]').contains('Skill Progression')
                cy.get('[class="tab-container___2UCMH tab-container-move"]').contains('Scorecard')
            })

        })

    })

})

describe('Baseline', () => { 

    it('Navigate to Baseline page', () => {
        cy.get('[href="/dashboard/baseline"]').click()
        cy.get('[class="score-chart-widget-date-result___146Tk"]').contains(`Your Baseline results from ${memberSince}`) //control
    })

    it('Play now tooltip', () => {
        cy.get('[class="cta-message-text___3_ZAU"]').contains(`Challenge your ${profileKeyWeakness} to improve your play`)
    })

    describe('Baseline tabs', () => {

        it('Overview page', () => {
            cy.get('[href="/dashboard/baseline/overview"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains('Baseline Score')
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains('Key Weakness')
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains(`${baselineKeyWeakness}`)
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains('Key Strength')
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains(`${baselineKeyStrength}`)
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-overview"]').contains('Skill Radar')
        })

        it('Track page', () => {
            cy.get('[href="/dashboard/baseline/track"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-track"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-track"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-track"]').contains('Crosshair Error')
            cy.get('[class="tab-container___3j7yh tab-container-track"]').contains('Crosshair on Target')
        })

        it('Aim Rifle page', () => {
            cy.get('[href="/dashboard/baseline/aim_rifle"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-shoot"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-shoot"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-shoot"]').contains('Time to frag')
            cy.get('[class="tab-container___3j7yh tab-container-shoot"]').contains('Hits on Target')
        })

        it('Peek Rifle page', () => {
            cy.get('[href="/dashboard/baseline/peek_rifle"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-strafe"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-strafe"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-strafe"]').contains('Time to frag')
            cy.get('[class="tab-container___3j7yh tab-container-strafe"]').contains('Hits on Target')
        })

        it('Spray page', () => {
            cy.get('[href="/dashboard/baseline/spray"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-spray"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-spray"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-spray"]').contains('Spray Error')
            cy.get('[class="tab-container___3j7yh tab-container-spray"]').contains('Hits on Target')
        })

        it('Jump page', () => {
            cy.get('[href="/dashboard/baseline/jump"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-move"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-move"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-move"]').contains('Scorecard')
        })

        it('Perceive page', () => {
            cy.get('[href="/dashboard/baseline/perceive"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-perceive"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-perceive"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-perceive"]').contains('Time to Perceive')
            cy.get('[class="tab-container___3j7yh tab-container-perceive"]').contains('Perception Error')
        })

        it('Flick AWP page', () => {
            cy.get('[href="/dashboard/baseline/flick_awp"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-flick"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-flick"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-flick"]').contains('Time to frag')
            cy.get('[class="tab-container___3j7yh tab-container-flick"]').contains('Hits on Target')
        })

        it('Hold AWP page', () => {
            cy.get('[href="/dashboard/baseline/hold_awp"]').click()
            cy.get('[class="tab-container___3j7yh tab-container-hold"]').contains('Skill Score')
            cy.get('[class="tab-container___3j7yh tab-container-hold"]').contains('Skill Leaderboard')
            cy.get('[class="tab-container___3j7yh tab-container-hold"]').contains('Time to Shoot')
            cy.get('[class="tab-container___3j7yh tab-container-hold"]').contains('Hits on Target')
        })
    })

    

})