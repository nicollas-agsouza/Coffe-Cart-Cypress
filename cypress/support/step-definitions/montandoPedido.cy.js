import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import AlterarJanela from '../pages/acessarCarrinho.page'
import EscolherCafes from '../pages/adicionarCafesNoCarrinho.page'
import PreencherFormulario from '../pages/inserirCredenciaisDoUsuario.page'

And('que o usuario adicionou 3 sabores diferentes de cafe ao carrinho', () => {
    EscolherCafes.selecionar3cafes()
})

And('que o usuario aceitou adicionar um quarto cafe com desconto', () => {
    EscolherCafes.aceitarCafePromocional()
})

And('que o usuario acessa o carrinho', () => {
    AlterarJanela.trocarParaCarrinho()
})

And('que o usuario removeu um cafe aleatoriamente do carrinho', () => {
    AlterarJanela.removerUmCafe()
})

When('o usuario clicar no botao que exibe o preco total do pedido', () => {
    AlterarJanela.acessarJanelaDeCompra()
})

And('o usuario preencher os campos de email e nome com suas credencias e confirmar o envio', () => {
    PreencherFormulario.preencherCredenciais()
})

// Hook atualizado para sobrescrever o arquivo anterior
After(() => {
    cy.screenshot('Evidência_do_sucesso_do_pagamento', { overwrite: true })
})