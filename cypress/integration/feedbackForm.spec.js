/// <reference types="cypress" />
import {
    setAuthToken
    } from "./variables";

    describe('feedback form', () => {
        setAuthToken();
        it('Send feedback', () => {
            cy.get('[class="dashboard-feedback-title"]').contains('Feedback').click()
            cy.get('[class="dashboard-feedback-body-head show"]').contains('How would you rate your experience?')
            cy.get('[class="dashboard-feedback-body-icons"]').first().click()
            cy.get('[placeholder="Tell us about your experience…"]').type('Feedback test automation')
            cy.get('[class="dashboard-feedback-body"]').contains('Send').click()
            cy.get('[class="ant-notification-notice ant-notification-notice-info ant-notification-notice-closable"]').contains('Thanks for contacting us!')
        })
        
    })