context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://saggy7001.github.io/')
    })
    
    it('Drag And Drop Test with HTML5', () => {
        cy.get('button[onclick="openTab(event, \'DragAndDrop\')"]')
        .should('have.text','Drag and Drop')
        .click()
        .should('have.class', 'active')

        cy.get("li#item4")
        .trigger("mousedown", {which: 1})
        cy.get("li#item5")
        .trigger("mousemove")
        .trigger("mouseup")
        cy.wait(1000)
        cy.get("li#item3")
        .trigger("mousedown", {which: 1})
        cy.get("li#item4")
        .trigger("mousemove")
        .trigger("mouseup")
        cy.wait(1000)
        cy.get("li#item2")
        .trigger("mousedown", {which: 1})
        cy.get("li#item3")
        .trigger("mousemove")
        .trigger("mouseup")
        cy.wait(1000)
        cy.get("li#item1")
        .trigger("mousedown", {which: 1})
        cy.get("li#item2")
        .trigger("mousemove")
        .trigger("mouseup")
        cy.wait(1000)

        //HTML5 Drag and Drop
        const dataTransfer = new DataTransfer();
        cy.get('button#draga')
        .trigger('mousedown')
        .trigger('dragstart', {
            dataTransfer: dataTransfer,
        })
        .get('button#dragb')
        .trigger('dragenter', { dataTransfer: dataTransfer })
        .trigger('dragover', { dataTransfer: dataTransfer })
        .trigger('drop', { dataTransfer: dataTransfer });
        cy.wait(1000)

        cy.get('button#dragb').should('have.text','Drag To!Drag Me!')
    })

})
class DataTransfer {
    constructor() {
        this.data = {};
        this.types = [];
        this.files = [];
    }

    setData(format, data) {
        this.data[format] = data;
    }

    getData(format) {
        return this.data[format];
    }
}
