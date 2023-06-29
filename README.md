## Projeto Halloween Website

Este projeto consiste em uma página web que exibe uma tela de boas-vindas ao Halloween. Ao carregar a página, o usuário é recebido com um conteúdo animado e um botão "Avançar". Ao clicar no botão, um som é reproduzido e a tela de boas-vindas desaparece após 1 segundo.

## Funcionalidades

- Tela de boas-vindas animada com efeito de transição.
- Reprodução de som ao clicar no botão "Avançar".
- Remoção da tela de boas-vindas após 1 segundo.

## Pré-requisitos

- Navegador web.

## Como utilizar

1. Clone ou faça o download deste repositório.

2. Abra o arquivo "index.html" em seu navegador.

3. Ao carregar a página, você será recebido com a tela de boas-vindas ao Halloween.

4. Clique no botão "Avançar" para reproduzir o som e remover a tela de boas-vindas.

## Personalização

Você pode personalizar a página de boas-vindas ao Halloween de acordo com suas preferências:

- Modifique o texto exibido no título principal, substituindo o conteúdo dentro das tags `<h1>Bem-Vindo ao <br><span>Halloween!</span></h1>`.
- Altere o som reproduzido ao clicar no botão "Avançar" substituindo o arquivo de áudio "sound1" por outro de sua escolha. Certifique-se de atualizar o caminho do arquivo de áudio no script.
- Ajuste a duração em que a tela de boas-vindas é exibida antes de desaparecer, alterando o valor no método `setTimeout()` dentro da função `buttonClick()` no arquivo "script.js".
