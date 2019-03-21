context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://saggy7001.github.io/')
    })

    it('Java Script Alerts tab Test', () => {
        cy.get('button[onclick="openTab(event, \'JSAlerts\')"]')
        .should('have.text','Javascript Alerts')
        .click()
        .should('have.class', 'active')

        const stub = cy.stub()

        cy.on('window:alert', stub)

        cy.get('button#alert')
            .should('have.text','Alert Box')
            .click()
            .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Please share this website with your friends and in your organization.')
        })

        const stub1 = cy.stub()
        cy.on('window:confirm', stub1)

        cy.get('button#timingAlert')
        .should('have.text','Timing Alert')
        .click()
        .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Please share this website with your friends and in your organization.')
        })

        cy.get('button#doubleClick')
        .should('have.text','Change Color')
        .click()
        .should('have.attr', 'style', 'color: orange;')
    })
})