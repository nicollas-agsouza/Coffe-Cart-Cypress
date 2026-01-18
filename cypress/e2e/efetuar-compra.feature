#utf-8
#language: pt


Funcionalidade: Efetuar compra
	# Cenario: realizar pagamento com sucesso
	# 	Dado que o usuario acessou o site coffee-cart
    #     E que o usuario adicionou 3 sabores diferentes de cafe ao carrinho
    #     E que o usuario aceitou adicionar um quarto cafe com desconto
    #     E que o usuario acessa o carrinho
    #     E que o usuario removeu um cafe aleatoriamente do carrinho
	# 	Quando o usuario clicar no botao que exibe o preco total do pedido
    #     E o usuario preencher os campos de email e nome com suas credencias e confirmar o envio
	# 	Entao uma mensagem sera exibida na tela informando ao usuario checar o email para realizar o pagamento

    Cenário: Finalizar pedido
        Dado que o usuario navega para a página inicial do "Coffee Cart"
        E que o usuario adiciona ao carrinho 3 tipos diferentes de café mais um café Mocha com desconto
        Mas o usuario remove um item aleatório antes de finalizar a compra
        Quando o usuario segue para o checkout para inserir suas credenciais e confirma o envio
        Entao deve ser exibida na tela a mensagem "Thanks for your purchase. Please check your email for payment."
