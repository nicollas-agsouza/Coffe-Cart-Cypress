#utf-8
#language: pt


Funcionalidade: Efetuar compra
    Como um usuário do Coffee Cart
    Quero gerenciar meu carrinho e realizar o pagamento
    Para garantir que recebi os cafés selecionados

    Cenário: Finalizar pedido pela página do carrinho
        Dado que o usuario acessa a página inicial do "Coffee Cart"
        E que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café com desconto
        Mas o usuario remove um item aleatório pela pagina do "carrinho"
        Quando o usuario segue para o checkout para inserir suas credenciais e confirma o envio
        Entao deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."

    Cenário: Finalizar pedido na página inicial
        Dado que o usuario acessa a página inicial do "Coffee Cart"
        E que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café com desconto
        Mas o usuario remove um item aleatório pelo "carrinho flutuante" da pagina inicial
        Quando o usuario inserir suas credenciais no formulario pelo "carrinho flutuante"
        Entao deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."
