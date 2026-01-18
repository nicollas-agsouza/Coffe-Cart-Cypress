import { Given, When, And, Then, Before, After, But } from 'cypress-cucumber-preprocessor/steps'
import Carrinho from '../pages/Carrinho.page'
import MenuDeEscolhas from '../pages/Menu.page'
import PreencherFormulario from '../pages/DetalhesDePagamento.page'

Given ('que o usuario acessa a página inicial do "Coffee Cart"', () => {
    cy.visit('/')
})

And('que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café com desconto', () => {
    MenuDeEscolhas.realizandoPedido()
})

But('o usuario remove um item aleatório pelo "carrinho flutuante" da pagina inicial', () => {
    MenuDeEscolhas.operacoesDoMenu()
})

But('o usuario remove um item aleatório pela pagina do "carrinho"', () => {
    Carrinho.operacoesDoCarrinho()
})

When('o usuario inserir suas credenciais no formulario pelo "carrinho flutuante"', () => {
    PreencherFormulario.preencherFormularioCompleto()
})

When('o usuario segue para o checkout para inserir suas credenciais e confirma o envio', () => {
    Carrinho.acessarCheckout()
    PreencherFormulario.preencherFormularioCompleto()
})

Then('deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."', () => {
    PreencherFormulario.validarMensagemFinal()
})

After(() => {
    cy.screenshot('Evidência_do_Sucesso_01', { overwrite: true })
})
