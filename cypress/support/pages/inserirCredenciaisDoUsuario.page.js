const CAMPO_NOME = '//input[@name="name"]'
const CAMPO_EMAIL = '//input[@name="email"]'
const BOTAO_SUBMIT = '//button[@id="submit-payment"]'

class PreencherFormulario {

    preencherCredenciais() {
        cy.xpath(CAMPO_NOME).type(Cypress.env('nome')).wait(400)
        cy.xpath(CAMPO_EMAIL).type(Cypress.env('email')).wait(400)
        cy.xpath(BOTAO_SUBMIT).should('be.visible').click()
    }
    
}

export default new PreencherFormulario