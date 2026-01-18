import { Given, When, And, Then, Before, After, But } from 'cypress-cucumber-preprocessor/steps'
import AlterarJanela from '../pages/Carrinho.page'
import MenuDeEscolhas from '../pages/EscolherCafe.page'
import PreencherFormulario from '../pages/CredenciaisDoUsuario.page'

Given ('que o usuario navega para a página inicial do "Coffee Cart"', () => {
    cy.visit('/')
})

And('que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café Mocha com desconto', () => {
    MenuDeEscolhas.realizandoPedido()
})

But('o usuario remove um item aleatório antes de finalizar a compra', () => {
    AlterarJanela.operacoesDoCarrinho()
})

When('o usuario segue para o checkout para inserir suas credenciais e confirma o envio', () => {
    PreencherFormulario.preencherFormularioCompleto()
})

Then('deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."', () => {
    PreencherFormulario.validarCompra()
})

After(() => {
    cy.screenshot('Evidência_do_sucesso_do_pagamento', { overwrite: true })
})