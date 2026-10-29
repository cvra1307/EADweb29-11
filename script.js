```javascript
// Busca o botão e o parágrafo pelo ID definido no HTML.
const botaoMensagem = document.getElementById("botao-mensagem");
const textoMensagem = document.getElementById("texto-mensagem");

// Controla qual mensagem será exibida.
let mensagemAlternativa = false;

// Adiciona um evento para executar uma função quando o botão for clicado.
botaoMensagem.addEventListener("click", function () {

    // Verifica qual mensagem está sendo exibida.
    if (mensagemAlternativa === false) {

        // Altera o texto do parágrafo.
        textoMensagem.textContent =
            "Cada linha de código é uma oportunidade para aprender e evoluir na programação.";

        // Altera o texto exibido no botão.
        botaoMensagem.textContent = "Voltar à mensagem";

        // Informa que a mensagem alternativa está sendo exibida.
        mensagemAlternativa = true;

    } else {

        // Restaura a mensagem original.
        textoMensagem.textContent =
            "Estou no começo do curso e cada atividade é uma oportunidade para aprender.";

        // Restaura o texto original do botão.
        botaoMensagem.textContent = "Ver mensagem";

        // Informa que a mensagem original voltou a ser exibida.
        mensagemAlternativa = false;
    }
});
```