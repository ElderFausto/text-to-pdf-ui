# Conversor de Texto para PDF - Interface com Angular

[![Angular](https://img.shields.io/badge/Angular-17+-red.svg)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Interface de usuário moderna e responsiva construída com **Angular** para interagir com uma API de conversão de texto para PDF. A aplicação oferece uma experiência de usuário limpa e intuitiva, focada na simplicidade e eficiência.

## ✨ Demonstração

<img width="730" height="713" alt="image" src="https://github.com/user-attachments/assets/f943c93d-2fed-4ceb-8b20-cc8bf831d312" />

## 🚀 Funcionalidades Principais

-   **Interface Reativa:** Formulário construído com o `FormsModule` do Angular, utilizando `[(ngModel)]` para um data binding bidirecional eficiente.
-   **Feedback em Tempo Real:** Contador de caracteres e palavras que se atualiza instantaneamente conforme o usuário digita, melhorando a experiência de edição.
-   **Comunicação com API:** Utiliza o `HttpClient` do Angular e o padrão `Observable` (RxJS) para uma comunicação assíncrona e robusta com o backend.
-   **Manipulação de Arquivos no Cliente:** Processa a resposta da API (`Blob`) para iniciar o download do arquivo PDF diretamente no navegador do usuário.
-   **Melhoria de UX:** Inclui um botão para limpar o texto e feedback visual (estado de carregamento) no botão principal durante o processamento da requisição.
-   **Design Polido:** CSS moderno com variáveis, Flexbox para layout responsivo e efeitos de `hover`/`focus` que tornam a interface mais agradável e profissional.

## 🛠️ Tecnologias Utilizadas

-   **Angular 17+**
-   **TypeScript**
-   **RxJS:** Para programação reativa.
-   **HTML5**
-   **CSS3:** Com variáveis e Flexbox.
-   **Angular CLI:** Para a gestão do projeto.
-   **Font Awesome:** Para iconografia.

## ⚙️ Como Executar o Projeto

1.  **Pré-requisitos:**
    -   Node.js e npm instalados.
    -   Angular CLI instalado (`npm install -g @angular/cli`).
    -   A **API de backend** deve estar rodando em `http://localhost:8080`.

2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/text-to-pdf-ui.git](https://github.com/seu-usuario/text-to-pdf-ui.git)
    cd text-to-pdf-ui
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

5.  Acesse a aplicação em `http://localhost:4200` no seu navegador.
