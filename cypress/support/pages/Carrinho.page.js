const CARRINHO = '//a[@href="/cart"]'
const CONFIRMAR_COMPRA = '//button[@data-test="checkout"]'
const BTN_DELETAR = '//button[@class="delete"]'

class AlterarJanela {

    trocarParaCarrinho() {
        
        cy.xpath(CARRINHO).should('be.visible').click()
        cy.url().should('include', '/cart')
    }

    validarCarrinhoCompleto() {

    cy.xpath('(//ul//li[@class="list-item"])[position() > 4]')
        .should('be.visible') 
        .should('have.length', 4)
        .each(($el, index) => {
            cy.log(`Item visível ${index + 1} confirmado.`);
        });
}
    validarProdutos() {
    cy.get('@listaEsperada').then((listaEsperada) => {

        cy.xpath('(//ul//li[@class="list-item"])[position() > 4]')
            .should('be.visible')
            .each(($el, index) => {

                const colunas = $el.children('div');
                const rawNome = colunas.eq(0).text().trim();
                const rawPreco = colunas.eq(2).text().trim();
                const nomeLimpo = rawNome.split(' x')[0].trim();
                const precoLimpo = rawPreco.split(' x')[0].trim();

                if (!nomeLimpo || !precoLimpo.includes('$')) {
                    cy.log(` [Index ${index}] Ignorado: "${nomeLimpo}" | "${precoLimpo}"`);
                    return; 
                }

                cy.log(` Conferindo: [${nomeLimpo}] por [${precoLimpo}]`);

                const itemMatch = listaEsperada.find(i => i.nome === nomeLimpo && i.preco === precoLimpo);

                if (!itemMatch) {
                    cy.log(` ERRO: Item não encontrado no gabarito!`);
                    cy.log(`   Tela: ${nomeLimpo} | ${precoLimpo}`);
                }

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
            cy.log('✅ Um item removido com sucesso.');
        });
    }

    acessarJanelaDeCompra() {
        cy.xpath(CONFIRMAR_COMPRA)
            .should('be.visible').and('not.be.disabled').click()
            
    }

    operacoesDoCarrinho() {
        this.trocarParaCarrinho()
        this.validarCarrinhoCompleto()
        this.validarProdutos()
        this.deletarCafe()
        this.acessarJanelaDeCompra()
    }
}

export default new AlterarJanela();