const BTN_ACEITAR_PROMOCAO = '//button[text()="Yes, of course!"]'
const BTN_FINALIZAR_PEDIDO = '//button[@data-test="checkout"]'
const QUANTIDADE_ITENS = '(//ul//li[@data-v-a68519c8][@class="list-item"])[position() <= 4]'
const MODAL = '//div[@class="promo"]'

const CATALOGO = [
    { xpath: '//div[@data-test="Espresso"]',           nome: 'Espresso',           preco: '$10.00' },
    { xpath: '//div[@data-test="Espresso_Macchiato"]', nome: 'Espresso Macchiato', preco: '$12.00' },
    { xpath: '//div[@data-test="Cappuccino"]',         nome: 'Cappuccino',         preco: '$19.00' },
    { xpath: '//div[@data-test="Mocha"]',              nome: 'Mocha',              preco: '$8.00' },
    { xpath: '//div[@data-test="Flat_White"]',         nome: 'Flat White',         preco: '$18.00' },
    { xpath: '//div[@data-test="Americano"]',          nome: 'Americano',          preco: '$7.00' },
    { xpath: '//div[@data-test="Cafe_Latte"]',         nome: 'Cafe Latte',         preco: '$16.00' },
    { xpath: '//div[@data-test="Espresso_Con Panna"]', nome: 'Espresso Con Panna', preco: '$14.00' },
    { xpath: '//div[@data-test="Cafe_Breve"]',         nome: 'Cafe Breve',         preco: '$15.00' }
];

class MenuDeEscolhas {

    constructor() {
        this.listaParaValidacao = [];
    }

    seletorDeCafe() {
        this.listaParaValidacao = [];
        const CAFES_ESCOLHIDOS = Cypress._.sampleSize(CATALOGO, 3);

        CAFES_ESCOLHIDOS.forEach((item) => {
            cy.xpath(item.xpath).should('be.visible').realHover().realClick();
            this.listaParaValidacao.push({ nome: item.nome, preco: item.preco });
        });
    }

    aceitarCafePromocional(){
        cy.xpath(MODAL).should('be.visible');
        cy.xpath(BTN_ACEITAR_PROMOCAO).should('be.visible').click();
        cy.xpath(MODAL).should('not.exist');
        
        this.listaParaValidacao.push({
            nome: '(Discounted) Mocha',
            preco: '$4.00'
        });
        cy.wrap(this.listaParaValidacao).as('itensSelecionados');
    }

     ativarHover() {
        cy.xpath(BTN_FINALIZAR_PEDIDO).realHover();
    }

    validarProdutos() {
        cy.get('@itensSelecionados').then((itensSelecionados) => {
            const somaTotal = itensSelecionados.reduce((accumulator, item) => {
                const valorNumber = parseFloat(item.preco.replace('$', ''));
                return accumulator + valorNumber;
            }, 0);

            const totalEsperado = 'Total: $' + somaTotal.toFixed(2);
            cy.log(`Total esperado: ${totalEsperado}`);

            cy.get('[data-test="checkout"]').should('be.visible').realHover();

            cy.get('ul.cart-preview').should('be.visible').find('li.list-item') 
            .should('have.length', itensSelecionados.length);

            itensSelecionados.forEach((item) => {
                cy.get('ul.cart-preview').should('contain.text', item.nome);
            });
            cy.get('[data-test="checkout"]').invoke('text').should('contain', totalEsperado);
        });
    }

    deletarUmItemAleatorio() {

    cy.get('@itensSelecionados').then((itensSelecionados) => {
        if (!itensSelecionados || itensSelecionados.length === 0) {
            cy.log('A lista está vazia. Nada para deletar.');
            return; 
        }
        cy.get('[data-test="checkout"]').realHover();
        cy.get('button[aria-label^="Remove one"]').should('have.length.greaterThan', 0).then(($buttons) => {
            
            const totalDeBotoes = $buttons.length;
            const randomIndex = Math.floor(Math.random() * totalDeBotoes);
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
            cy.wrap(botaoAlvo).click({ force: true });
            cy.get('[data-test="checkout"]').realHover();
            });
        });
    }

    apertarBotaoDeFinalizarCompra() {
        cy.xpath('//button[@aria-label="Proceed to checkout"]')
        .should('be.visible').and('not.be.disabled').click();
    }

    realizandoPedido(){
        this.seletorDeCafe();
        this.aceitarCafePromocional();
    }

    operacoesDoMenu() {
        this.ativarHover();
        this.validarProdutos();
        this.deletarUmItemAleatorio();
        this.apertarBotaoDeFinalizarCompra();
    }
}

export default new MenuDeEscolhas