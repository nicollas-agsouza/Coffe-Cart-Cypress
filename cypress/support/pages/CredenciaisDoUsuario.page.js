const CAMPO_NOME = '//input[@name="name"]'
const CAMPO_EMAIL = '//input[@name="email"]'
const CHECKBOX = '//input[@id="promotion"]'
const BOTAO_SUBMIT = '//button[@id="submit-payment"]'
const MENSAGEM_SUCESSO = '//*[contains(text(), "Thanks for your purchase")]'

class PreencherFormulario {

    preencherCredenciais() {
        cy.xpath(CAMPO_NOME).should('be.visible').type(Cypress.env('nome')).should('have.value', Cypress.env('nome'));
        cy.xpath(CAMPO_EMAIL).should('be.visible').type(Cypress.env('email')).should('have.value', Cypress.env('email'));
    }  

    marcarCheckBox() {
        if (Math.random() < 0.5) {
            cy.xpath(CHECKBOX).should('be.visible').click().should('be.checked')
        } else {
            cy.xpath(CHECKBOX).should('be.visible').should('not.be.checked')
        }
    }

    apertarBotaoSubmit() {
        cy.xpath(BOTAO_SUBMIT).should('be.visible').click()
    }

    validarMensagemFinal() {
        cy.xpath(MENSAGEM_SUCESSO).should('be.visible').and('contain', 'Please check your email for payment')
    }

    preencherFormularioCompleto() {
        this.preencherCredenciais()
        this.marcarCheckBox()
        this.apertarBotaoSubmit()
    }
}

export default new PreencherFormulario