// variables for all tests

    const defaultToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNGU5ZjdkZi04NzBkLTQ2ZTYtYTgyNy1mMWJiZDIzYzlkZGYiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE2MjQ1Njk1NzksImV4cCI6MTYyNDU3MzE3OSwiYXVkIjoiYjhhYjU3MjQtM2MwYi00MjhiLWE2MmQtOTM4Y2Q1Nzg2YTQ5IiwiaXNzIjoic2FuZGJveC5hY2NvdW50cy5sb2dpLmNvbSIsInN1YiI6Ijg4MWRjYjRmLTFkYTgtNGQ0ZS1hNTI0LTE1MWJiNmEyOGZmZCJ9.IQykYpymSjTMthI8fY7BZvq8__d6WDPEeL_eGYXPEvmwNOeB3zgPJvwnzK-L5nvrU-z8nTA8_xLRNx21t7wm5-Dn7sXcFXh2oTF7veouG8ekpOr1reQIl7SJAVaSg5aXu782XtjwfEGc_nAby8bg4nwIatKj8ZiT53IxjgEKT6_tNgsIgrYbOWcUTvh-g7wQ0HXBH9ZlByOnuaNkEZAVKjKarpsfJU35U1iGGnvpSDVqqcm_euExKWtjQmY1bNyOjzqcMw99NZvk1CSoLcKYQnFpy-0Hn9T75-ApWhJz9ijwXW5Od65he_X7Knc4u5z27stPT_lGt2Dm0ZfGrqKNNGl0x4w0UUyVOm7tvthrdhkM-XmhNppuvAvhWZLd0eLd9y6tpmWs6N63f99yuoMm4HpkIwYaervd3lwF6ki-vPlBPsKkfCy-23cjqRp-Kck1hyqoBhmn1KfKvfkXbA0CS-kOew5YaPKp9cYfb03x0hfGsS7kcHTkfJ5ZpF9QYgZIomJLhvP0O2slF_hh42YuxRcbrWcoKv0SoGVcXJLEHXGQB6NKQhKEnJEA94e5F5x35k5SeUNbWvY20_8sEbuq1uVwcXOKLY_JVZZutUV91NGpfsIhiM45nyoIV0UK-Z7vzErrGUFgem7q8gwTagzxcpBZ4B2OQyS4zKRKCOEvwu4"
    const defaultUrlID = "pojay41635"
    const memberSince = "18.06.2021"
    const userName = "pojay41635 - ..123qwe312QEWE"
    const currentRank = 'III'
    const currentCountry = 'Ukraine'
    const profileKeyWeakness = "Aim Pistol"
    const profileKeyStrength = "Peek Rifle"
    const baselineKeyWeakness = "Spray"
    const baselineKeyStrength = "Track"

    function setAuthToken(){
        before('Set AUTH_TOKEN', () => {
            cy.setCookie('AUTH_TOKEN', defaultToken)
            cy.visit('https://dev-skillmaster-web.np.logitech.io')
        })
    }


export {defaultToken, 
        defaultUrlID, 
        memberSince,
        userName,
        currentRank,
        currentCountry, 
        profileKeyWeakness, 
        profileKeyStrength, 
        baselineKeyWeakness, 
        baselineKeyStrength, 
        setAuthToken }