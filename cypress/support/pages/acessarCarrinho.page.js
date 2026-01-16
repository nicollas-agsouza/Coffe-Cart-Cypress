const CARRINHO = '//a[@href="/cart"]'
const CONFIRMAR_COMPRA = '//button[@data-test="checkout"]'
const REMOVER_MOCHA_PROMOCIONAL = '//button[@aria-label="Remove all (Discounted) Mocha"]'

class AlterarJanela {

    trocarParaCarrinho() {
        cy.xpath(CARRINHO).wait(1150).click()
    }

    removerUmCafe() {
        cy.xpath(REMOVER_MOCHA_PROMOCIONAL).wait(1000).click()
    }

    acessarJanelaDeCompra() {
        cy.xpath(CONFIRMAR_COMPRA).wait(2500).click()
    }
}

export default new AlterarJanela