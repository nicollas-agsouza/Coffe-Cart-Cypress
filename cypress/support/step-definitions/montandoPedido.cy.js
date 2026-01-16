import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import AlterarJanela from '../pages/selecionarCafes.page'

And ('que o usuario acessa o carrinho', () => {
    AlterarJanela.trocarParaCarrinho()
})