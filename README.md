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
* **Linguagem:** Javascript
* **Framework de Teste:** Cypress
* **BDD/Gherkin:** Cucumber
* **Seletores:** Biblioteca XPath
* **Simulação de Eventos:** Biblioteca realEvents (para interações nativas do navegador)



## Como Executar o Projeto

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão estável).
* Um editor de código (recomendo o VS Code).

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/nicollas-agsouza/Coffe-Cart-Cypress.git](https://github.com/nicollas-agsouza/Coffe-Cart-Cypress.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd Coffe-Cart-Cypress
    ```

3.  **Instale as dependências:**
    ```bash
    npm install cypress --save-dev
    ```

4.  **Execução dos testes:**

     **Para abrir a interface interativa do Cypress:**
     ```bash
     npx cypress open
     ```


## Estrutura do Projeto
Para manter a organização seguindo o padrão **POM**, o projeto está estruturado da seguinte forma:
* `cypress/e2e/`: Arquivos `.feature` (especificações em BDD).
* `cypress/support/step_definitions/`: Implementação técnica dos passos do Cucumber.
* `cypress/support/pages/`: Classes representando as páginas com seus respectivos elementos e métodos.
