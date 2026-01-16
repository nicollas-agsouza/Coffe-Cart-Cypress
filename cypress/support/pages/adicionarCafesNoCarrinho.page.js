const EXPRESSO = '//div[@data-test="Espresso"]' 
const EXPRESSO_MACCHIATO = '//div[@data-test="Espresso_Macchiato"]'
const CAPUCCINO = '//div[@data-test="Cappuccino"]'
const MOCHA = '[data-cy="Mocha"]' // converter xpath
const FLAT_WHITE = '[data-cy="Flat-White"]' // converter xpath
const AMERICANO = '[data-cy="Americano"]' // converter xpath
const CAFE_LATTE = '[data-cy="Cafe-Latte"]' // converter xpath
const ESPRESSO_CON_PANNA = '[data-cy="Espresso-Con Panna"]' // converter xpath
const CAFE_BREVE = '[data-cy="Cafe-Breve"]' // converter xpath
const ACEITAR_MOCHA_PROMOCIONAL = '//button[text()="Yes, of course!"]'

class EscolherCafes {

    selecionar3cafes() {
        cy.xpath(EXPRESSO).should('be.visible').click()
        cy.xpath(EXPRESSO_MACCHIATO).should('be.visible').wait(500).click()
        cy.xpath(CAPUCCINO).should('be.visible').wait(500).click()
    }

    aceitarCafePromocional() {
        cy.xpath(ACEITAR_MOCHA_PROMOCIONAL).wait(500).click()
    }
}

export default new EscolherCafes