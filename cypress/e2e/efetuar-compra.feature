#utf-8
#language: pt


Funcionalidade: Efetuar compra
	Cenario: realizar pagamento com sucesso
		Dado que o usuario acessou o site coffee-cart
        E que o usuario adicionou 3 sabores diferentes de cafe ao carrinho
        E que o usuario aceitou adicionar um quarto cafe com desconto
        E que o usuario acessa o carrinho
        E que o usuario removeu um cafe aleatoriamente do carrinho
		Quando o usuario clicar no botao que exibe o preco total do pedido
        E o usuario preencher os campos de email e nome com suas credencias e confirmar o envio
		# Entao uma mensagem sera exibida na tela informando ao usuario checar o email para realizar o pagamento
        