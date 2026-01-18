#utf-8
#language: pt


Funcionalidade: Efetuar compra
    Cenário: Finalizar pedido
        Dado que o usuario navega para a página inicial do "Coffee Cart"
        E que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café Mocha com desconto
        Mas o usuario remove um item aleatório antes de finalizar a compra
        Quando o usuario segue para o checkout para inserir suas credenciais e confirma o envio
        Entao deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."
