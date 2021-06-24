/// <reference types="cypress" />

const defaultToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNTNjYjJlMy0yZWY0LTQ5ZmYtYjdmYS1iMmQ5MzY5NGU1ZDQiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE2MjQ1NTY3NDUsImV4cCI6MTYyNDU2MDM0NSwiYXVkIjoiYjhhYjU3MjQtM2MwYi00MjhiLWE2MmQtOTM4Y2Q1Nzg2YTQ5IiwiaXNzIjoic2FuZGJveC5hY2NvdW50cy5sb2dpLmNvbSIsInN1YiI6Ijg4MWRjYjRmLTFkYTgtNGQ0ZS1hNTI0LTE1MWJiNmEyOGZmZCJ9.dtqE1HE0iy6xkHX7cJlBbZ8fciMkPo7BdVpeW2MUGfm3B776WHQOZT-QOCRyB3wm0v6bLsPWqkBOJc1ALdKn3I2-Ak8Nbgboq0wcIYW_dgyvXnmnL_KETsiyT2FfSLJvAW9FmeT2NxmgyZnx4wDZ7Z8dcnV_cHyU42yZIy-MZp1a4nF1t0Uq3jcDMB7gFYkuc139oWIn4oTl8W3MKEoisN9si_pL-jPzEG4wSvHexJefZkTOtCUzI8GzKQzWpP0R9G0ChFfSveOZERgZZGLKjJ0DTzTOoE-PitNJfipAT4Wn3SArq7gTLgXY8HPH5LE4dOhlvSWuGfkeDcDn3a4GLFEBHalZr9yQsuxEwQ_lFJchnZRo6ZSmNdJEp2a3qPrNVlR7-LHgpi5STWDg7QqzNwKoUCEEnlRLp_ynt0NLv4ja-W7icxbGARFXrNB1qq6NufSrguREdmTKGMZpCXUUa1-vT_YgdXniam66-v_x7Ixijo_2Xjfu5BmQdzJ5rhejOYm7WM9YemapjdiY8v24dA_S7OY8O2JBMm7aHCNwozkrX7rR1HuSw2e_jQV5IPs4h16sK_sxIEFsvHXrGaNpnunmCtAodBhtWSd8zk-vTWaOhnCSgpn8es0fiv5HESIyxyntBhPocm8JoiNZb1H_IQbwsbgcllr_aIUWIdxwLdI"
const defaultUrlID = "pojay41635"



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