const CARRINHO = '//a[@href="/cart"]'
const CONFIRMAR_COMPRA = '//button[@data-test="checkout"]'
const BTN_DELETAR = '//button[@class="delete"]'
const QUANTIDADE_ITENS = '(//ul//li[@class="list-item"])[position() > 4]'

class Carrinho {

    acessarCarrinho() {
        cy.xpath(CARRINHO).should('be.visible').click();
        cy.url().should('include', '/cart');
    }

    validarQuantidadeDeItens() {
        cy.xpath(QUANTIDADE_ITENS).should('be.visible').and('have.length', 4);
    }

    validarProdutos() {
    cy.get('@itensSelecionados').then((itensSelecionados) => {

        cy.xpath(QUANTIDADE_ITENS)
            .should('be.visible')
            .each(($el, index) => {

                const colunas = $el.children('div');
                const rawNome = colunas.eq(0).text().trim();
                const rawPreco = colunas.eq(2).text().trim();
                const nomeLimpo = rawNome.split(' x')[0].trim();
                const precoLimpo = rawPreco.split(' x')[0].trim();

                const itemMatch = itensSelecionados.find(i => i.nome === nomeLimpo && i.preco === precoLimpo);

                expect(itemMatch, `O item ${nomeLimpo} (${precoLimpo}) deve estar no carrinho`).to.not.be.undefined;
            });
        });
    }

    deletarCafe() {
        cy.xpath(BTN_DELETAR).then((elementos) => {
            const quantidadeAntes = elementos.length;
            const NUM = Math.floor(Math.random() * quantidadeAntes);
            
            cy.xpath(BTN_DELETAR).eq(NUM).click();
            cy.xpath(BTN_DELETAR).should('have.length', quantidadeAntes - 1);
            cy.log('1 item removido com sucesso.');
        });
    }

    acessarCheckout() {
        cy.xpath(CONFIRMAR_COMPRA).should('be.visible').and('not.be.disabled').click();   
    }

    operacoesDoCarrinho() {
        this.acessarCarrinho();
        this.validarQuantidadeDeItens();
        this.validarProdutos();
        this.deletarCafe();
    }
}

export default new Carrinho();