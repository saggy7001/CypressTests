context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://saggy7001.github.io/')
    })

    it('Alerts tab Test', () => {
        cy.get('button[onclick="openTab(event, \'Form\')"')
        .should('have.text','Form')
        .click()
        .should('have.class', 'active')

        cy.get('div.page-title h1')
        .should('have.text','Register')

        cy.get('input#gender-male')
        .should('have.attr', 'name', 'Gender')
        .check()
        .should('be.checked')

        cy.get('input#FirstName')
        .should('have.attr', 'name', 'FirstName')
        .type('Sagar',{delay:100})
        .should('have.value','Sagar')

        cy.get('input#LastName')
        .should('have.attr', 'name', 'LastName')
        .type('Gaikwad',{delay:100})
        .should('have.value','Gaikwad')
    })
})