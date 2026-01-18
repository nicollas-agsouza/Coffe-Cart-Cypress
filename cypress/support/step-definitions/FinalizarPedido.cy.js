import { Given, When, And, Then, Before, After, But } from 'cypress-cucumber-preprocessor/steps'
import Carrinho from '../pages/Carrinho.page'
import MenuDeEscolhas from '../pages/EscolherCafe.page'
import PreencherFormulario from '../pages/CredenciaisDoUsuario.page'
import Menu from '../pages/Menu.page'

Given ('que o usuario navega para a página inicial do "Coffee Cart"', () => {
    cy.visit('/')
})

And('que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café Mocha com desconto', () => {
    MenuDeEscolhas.realizandoPedido()
})

But('o usuario remove um item aleatório pelo carrinho antes de finalizar a compra', () => {
    Carrinho.operacoesDoCarrinho()
})

When('o usuario segue para o checkout para inserir suas credenciais e confirma o envio', () => {
    PreencherFormulario.preencherFormularioCompleto()
})

Then('deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."', () => {
    PreencherFormulario.validarMensagemFinal()
})

After(() => {
    cy.screenshot('Evidência_do_Sucesso_01', { overwrite: true })
})

Given ('que o usuario navega para a página inicial do "Coffee Cart"', () => {
    cy.visit('/')
})

And('que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café Mocha com desconto', () => {
    MenuDeEscolhas.realizandoPedido()
})

But('o usuario remove um item aleatório pelo menu antes de finalizar a compra', () => {
    Menu.ativarHover()
    Menu.validarQuantidadeDeItens()
    Menu.validarProdutos()
    Menu.deletarUmItemAleatorio()
    Menu.apertarBotaoDeFinalizarCompra()
})

When('o usuario finalizar a compra pelo Menu', () => {
    PreencherFormulario.preencherFormularioCompleto()
})

Then('deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."', () => {
    PreencherFormulario.validarMensagemFinal()
})

After(() => {
    cy.screenshot('Evidência_de_Sucesso_02', { overwrite: true })
})

