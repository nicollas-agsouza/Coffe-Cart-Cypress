const BTN_ACEITAR_PROMOCAO = '//button[text()="Yes, of course!"]'
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

        cy.wrap(this.listaParaValidacao).as('listaEsperada');
    }

    realizandoPedido(){
        this.seletorDeCafe()
        this.aceitarCafePromocional()
    }
}

export default new MenuDeEscolhas