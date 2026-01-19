 # Coffee Cart - Automação de Testes E2E

### Objetivo do Projeto
Validar a autonomia técnica no desenvolvimento de uma automação **ponta a ponta (E2E)**, aplicando as melhores práticas de mercado para garantir a qualidade e escalabilidade do código.

A solução foca em dois pilares principais:
* **BDD (Behavior Driven Development):** Escrita de cenários em Gherkin utilizando Cucumber para alinhar o entendimento do negócio.
* **POM (Page Object Model):** Estruturação do código para facilitar a manutenção, separando os seletores e a lógica de interação da lógica de teste.

## Cenário de Teste Automatizado
A automação cobre o fluxo completo de compra no site [Coffee Cart](https://coffee-cart.app/), validando os seguintes requisitos:

* **Acesso:** Navegação até a URL oficial do projeto.
* **Seleção:** Escolha de 3 tipos de cafés diferentes.
* **Promoção:** Validação da aparição do modal de oferta (Mocha por $4) e aceitação da oferta.
* **Carrinho:** Validação de que os 4 itens (3 iniciais + 1 brinde/oferta) estão presentes com os valores corretos.
* **Edição:** Remoção de 1 item do carrinho.
* **Checkout:** Realização do pagamento e validação da mensagem de sucesso final.

## Tecnologias Utilizadas
O ecossistema do projeto é composto por:
* **Framework de Teste:** Cypress
* **Ambiente de Execução:** Node.js
* **Controle de Versão:** Git
* **BDD/Gherkin:** Cucumber
* **Seletores:** Biblioteca XPath
* **Simulação de Eventos:** Biblioteca realEvents (para interações nativas do navegador)

## 📋 Pré-requisitos para Execução

Para rodar este projeto localmente, você precisa garantir que sua máquina possui:

1.  **Node.js instalado:** Versão atual (LTS).
2.  **IDE de sua preferência:** Recomendamos o Visual Studio Code (VS Code).


---

## Passo a Passo para Configuração e Execução

Siga rigorosamente as etapas abaixo para configurar o ambiente:

### 1. Preparação dos Arquivos
* Faça o download do arquivo **Code ZIP** do projeto.
* Extraia o conteúdo do ZIP em uma pasta local em seu computador.
* **Configuração de Variáveis:** Na raiz do projeto (mesma pasta onde está o arquivo `package.json`), crie um novo arquivo chamado `cypress.env.json` e adicione o seguinte conteúdo:

```json
 {
    "email": "qualquerValor@email.com",
    "nome": "qualquerNome"
 }
```

### 2. Abertura e Instalação
* Abra o **VS Code**.
* Vá em `Arquivo > Abrir Pasta` e selecione a pasta que você extraiu.
* Abra o terminal integrado do VS Code e digite o comando abaixo para instalar as dependências necessárias:
```bash
npm install
```

### 3. Execução dos Testes
Para abrir a interface gráfica do Cypress e rodar os testes, utilize o comando:
```bash
npx cypress open
```
Dentro da interface do Cypress, siga este fluxo:

1.  **Configuração:** Clique em `E2E Testing` (Configured).
2.  **Navegador:** Selecione o navegador de sua escolha (ex: Chrome, Edge ou Electron).
3.  **Início:** Clique no botão para iniciar o teste no navegador selecionado.
4.  **Seleção:** Na lista de testes, procure e clique no arquivo: `efetuar-compra`.

> **Nota:** O Cypress iniciará automaticamente a execução dos passos e você poderá acompanhar o log de comandos no painel lateral esquerdo.

### 🎯 O que a automação executa?
O projeto testa a funcionalidade de **efetuar pagamento** através de dois cenários principais, garantindo que o usuário consiga concluir a compra por diferentes caminhos do site:

1.  **Checkout via Home:** Finalização do pedido diretamente na página inicial.
2.  **Checkout via Carrinho:** Fluxo completo de navegação e finalização na página dedicada do carrinho.

### Requisitos Validados
Durante a execução, os seguintes passos são realizados e validados:

* **Acesso:** Navegação segura até a URL oficial do projeto.
* **Seleção:** Escolha estratégica de 3 tipos de cafés diferentes.
* **Promoção:** Detecção e validação do modal de oferta (Mocha por $4) e aceitação da oferta.
* **Carrinho:** Verificação se os 4 itens (3 iniciais + 1 oferta) estão presentes com os cálculos de valores corretos.
* **Edição:** Teste de remoção de 1 item para validar a atualização do carrinho.
* **Checkout:** Preenchimento dos dados de pagamento e validação da mensagem de sucesso final.

---

### 📑 Estrutura do Projeto

* `cypress/e2e/`: Contém os arquivos de teste (specs).
* `cypress/fixtures/`: Dados estáticos utilizados nos testes.
* `cypress/support/`: Comandos personalizados e configurações globais.
