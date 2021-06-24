/// <reference types="cypress" />
import {
    defaultUrlID, 
    memberSince,
    userName,
    currentRank,
    currentCountry, 
    profileKeyWeakness,
    profileKeyStrength, 
    baselineKeyWeakness, 
    baselineKeyStrength,
    setAuthToken
    } from "./variables";



describe('Navigating to all tabs', () => {
    setAuthToken();
    
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

    describe('feedback form', () => {
        it('Send feedback', () => {
            cy.get('[class="dashboard-feedback-title"]').contains('Feedback').click()
            cy.get('[class="dashboard-feedback-body-head show"]').contains('How would you rate your experience?')
            cy.get('[class="dashboard-feedback-body-icons"]').first().click()
            cy.get('[placeholder="Tell us about your experience…"]').type('Feedback test automation')
            cy.get('[class="dashboard-feedback-body"]').contains('Send').click()
            cy.get('[class="ant-notification-notice ant-notification-notice-info ant-notification-notice-closable"]').contains('Thanks for contacting us!')
        })
        setAuthToken();
    })
    
    describe('Profile', () => { 
        it('Play now tooltip', () => {
            cy.get('[class="cta-message-text___3_ZAU"]').contains(`Challenge your ${profileKeyWeakness} to improve your play`)
        })

        it('Get current RANK', () => {
            cy.get('[class="profile-rank___3kRrg"]').contains(`Rank ${currentRank}`)
        })

        it('Get UserName', () => {
            cy.get('[class="username___3ERcP"]').contains(`${userName}`)
        })

        it('Get registration info', () => {
            cy.get('[class="info___23G8L"]').contains(`Member since ${memberSince}`)
            cy.get('[class="info___23G8L"]').contains('Early access member')
            cy.get('[class="info___23G8L"]').contains(`${currentCountry}`)
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
})

