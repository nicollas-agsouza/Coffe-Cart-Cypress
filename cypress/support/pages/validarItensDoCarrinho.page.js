const MENSAGEM_SUCESSO = '//*[contains(text(), "Thanks for your purchase")]'

class ConfirmacaoPage {
    validarCompra() {
        cy.xpath(MENSAGEM_SUCESSO).should('be.visible')
    }
}