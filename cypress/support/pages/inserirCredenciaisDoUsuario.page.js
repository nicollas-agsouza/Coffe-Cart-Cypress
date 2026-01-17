const CAMPO_NOME = '//input[@name="name"]'
const CAMPO_EMAIL = '//input[@name="email"]'
const CHECKBOX = '//input[@id="promotion"]'
const BOTAO_SUBMIT = '//button[@id="submit-payment"]'

class PreencherFormulario {

    preencherCredenciais() {
        cy.xpath(CAMPO_NOME).should('be.visible').type(Cypress.env('nome')).wait(400)
        cy.xpath(CAMPO_EMAIL).should('be.visible').type(Cypress.env('email')).wait(400)
    }  

    marcarCheckBox() {
        if (Math.random() < 0.5) {
            cy.xpath(CHECKBOX).should('be.visible').click().should('be.checked')
        } else {
            cy.xpath(CHECKBOX).should('be.visible').should('not.be.checked')
        }
        cy.wait(400)
    }

    apertarBotaoSubmit() {
        cy.xpath(BOTAO_SUBMIT).should('be.visible').click()
    }

    preencherFormularioCompleto() {
        this.preencherCredenciais()
        this.marcarCheckBox()
        this.apertarBotaoSubmit()
    }
}

export default new PreencherFormulario