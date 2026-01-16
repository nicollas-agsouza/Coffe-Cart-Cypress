const CARRINHO = '//a[@href="/cart"]'

class AlterarJanela {

    trocarParaCarrinho() {
        cy.xpath(CARRINHO).click()
    }
}

export default new AlterarJanela