context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://saggy7001.github.io/')
    })

    it('IFrame Test', () => {
        cy.get('button[onclick="openTab(event, \'IFrames\')"]')
        .should('have.text','I-Frames')
        .click()
        .should('have.class', 'active')

        //Get iframe body
        cy.get('IFrame#frame1')
        .then(function ($iframe) {
        const body = $iframe.contents().find('body')
            cy.wrap(body)
            .find('div#post-body-3107268830657760720')
            .should('be.visible')

            cy.wrap(body.find('a.home-link'))
            .scrollIntoView({ force: true })
            .should('be.visible')
            .click()
        })
    })

})