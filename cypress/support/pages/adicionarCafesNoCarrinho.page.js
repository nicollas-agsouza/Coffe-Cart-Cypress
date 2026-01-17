const ESPRESSO = '//div[@data-test="Espresso"]' 
const ESPRESSO_MACCHIATO = '//div[@data-test="Espresso_Macchiato"]'
const CAPUCCINO = '//div[@data-test="Cappuccino"]'
const MOCHA = '//div[@data-test="Mocha"]'
const FLAT_WHITE = '//div[@data-test="Flat_White"]'
const AMERICANO = '//div[@data-test="Americano"]'
const CAFE_LATTE = '//div[@data-test="Cafe_Latte"]'
const ESPRESSO_CON_PANNA = '//div[@data-test="Espresso_Con Panna"]'
const CAFE_BREVE = '//div[@data-test="Cafe_Breve"]'
const MOCHA_PROMOCIONAL = '//button[text()="Yes, of course!"]'

const CATALOGO_DE_CAFES = 
        [
        ESPRESSO, 
        ESPRESSO_MACCHIATO, 
        CAPUCCINO, 
        MOCHA, 
        FLAT_WHITE, 
        AMERICANO, 
        CAFE_LATTE, 
        ESPRESSO_CON_PANNA, 
        CAFE_BREVE
        ]

class MenuDeEscolhas{
    
    seletorDeCafe(){
        const SELECAO_DINAMICA = Cypress._.sampleSize(CATALOGO_DE_CAFES, 3);

        SELECAO_DINAMICA.forEach((cafe) => {
        cy.xpath(cafe).click()
        }) 
    }

    aceitarCafePromocional(){

        cy.xpath(MOCHA_PROMOCIONAL).click()
    }
}

export default new MenuDeEscolhas