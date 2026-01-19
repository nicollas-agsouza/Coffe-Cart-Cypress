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

## 📋 Pré-requisitos para Execução

Para rodar este projeto localmente, você precisa garantir que sua máquina possui:

1.  **Node.js instalado:** Versão atual (LTS).
2.  **IDE de sua preferência:** Recomendamos o Visual Studio Code (VS Code).

---

## 🚀 Passo a Passo para Configuração e Execução

Siga rigorosamente as etapas abaixo para configurar o ambiente:

### 1. Preparação dos Arquivos
* Faça o download do arquivo **Code ZIP** do projeto.
* Extraia o conteúdo do ZIP em uma pasta local em seu computador.

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
4.  **Seleção:** Na lista de testes, procure e clique no arquivo: `efetuar pagamento`.

> **Nota:** O Cypress iniciará automaticamente a execução dos passos e você poderá acompanhar o log de comandos no painel lateral esquerdo.

---

### 📑 Estrutura do Projeto

* `cypress/e2e/`: Contém os arquivos de teste (specs).
* `cypress/fixtures/`: Dados estáticos utilizados nos testes.
* `cypress/support/`: Comandos personalizados e configurações globais.
