const BTN_FINALIZAR_PEDIDO = '//button[@data-test="checkout"]'

class Menu {

    ativarHover() {
        cy.xpath(BTN_FINALIZAR_PEDIDO).realHover()
    }

    validarQuantidadeDeItens() {

    cy.xpath('(//ul//li[@data-v-a68519c8][@class="list-item"])[position() <= 4]')
        .should('be.visible').and('have.length', 4)
        .each(($el, index) => {
            cy.log(`Item visível ${index + 1} confirmado.`);
        });
    }

    validarProdutos() {
        cy.get('@listaEsperada').then((listaEsperada) => {
            const totalSum = listaEsperada.reduce((accumulator, item) => {
                const numericValue = parseFloat(item.preco.replace('$', ''));
                return accumulator + numericValue;
            }, 0);

            const expectedTotal = 'Total: $' + totalSum.toFixed(2);
            cy.log(`Expected Total: ${expectedTotal}`);

            cy.get('[data-test="checkout"]').should('be.visible').realHover();

            cy.get('ul.cart-preview').should('be.visible').find('li.list-item') 
            .should('have.length', listaEsperada.length);

            listaEsperada.forEach((item) => {
                cy.get('ul.cart-preview').should('contain.text', item.nome);
            });
            cy.get('[data-test="checkout"]').invoke('text').should('contain', expectedTotal);
        });
    }

    deletarUmItemAleatorio() {
    // 1. Correção: Use cy.get() para aliases (@), não cy.xpath()
    cy.get('@listaEsperada').then((listaEsperada) => {
        if (!listaEsperada || listaEsperada.length === 0) {
            cy.log('A lista está vazia. Nada para deletar.');
            return; // Opcional, mas boa prática
        }

        cy.get('[data-test="checkout"]').realHover();

        // 2. Correção: Removido o ")" extra após ($buttons)
        cy.get('button[aria-label^="Remove one"]').should('have.length.greaterThan', 0).then(($buttons) => {
            const totalDeBotoes = $buttons.length;
            const randomIndex = Math.floor(Math.random() * totalDeBotoes);

            // 3. Correção: Usei botaoAlvo em vez de targetButton para manter consistência
            const botaoAlvo = $buttons.eq(randomIndex);

            if (!botaoAlvo || botaoAlvo.length === 0) {
                throw new Error(`Erro de seleção no botão com indice ${randomIndex}. Total de botões: ${totalDeBotoes}`);
            }

            const ariaText = botaoAlvo.attr('aria-label');

            if (!ariaText) {
                throw new Error(`Erro de seleção no botão com indice ${randomIndex} não consta no atributo aria-label`);
            }

            const removerdCoffeeName = ariaText.replace('Remove one', '').trim();

            cy.log(`Removendo: "${removerdCoffeeName}"`);

            // 4. Click e re-hover para validar a mudança visual
            cy.wrap(botaoAlvo).click({ force: true });
            cy.get('[data-test="checkout"]').realHover();
        }); // Fim do .then($buttons)
    }); // Fim do .then(listaEsperada) 
}

apertarBotaoDeFinalizarCompra() {
        cy.xpath('//button[@aria-label="Proceed to checkout"]')
        .should('be.visible').and('not.be.disabled').click()
    }

}

export default new Menu