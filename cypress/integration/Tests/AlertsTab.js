context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://saggy7001.github.io/')
    })

    it('Alerts tab Test', () => {
        cy.get('button[onclick="openTab(event, \'Alert\')"]')
        .should('have.text','Alert')
        .click()
        .should('have.class', 'active')

        const stub = cy.stub()

        cy.on('window:alert', stub)

        cy.get('button[onclick="clickSimpleAlert()"]')
            .should('have.text','Simple Alert')
            .click()
            .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Hello! I am an alert box!')
        })

        const stub1 = cy.stub()
        cy.on('window:confirm', stub1)

        cy.get('button[onclick="clickConfirmBox()"]')
            .should('have.text','Confirm Box')
            .click()
            .then(() => {
            expect(stub1.getCall(0)).to.be.calledWith('Press a button!')
        })
        
        //Missing code for third type of window alert
    }) 
})