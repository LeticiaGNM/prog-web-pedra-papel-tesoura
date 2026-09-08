const conteinerJogo = document.querySelector(".conteiner"),
    resultadoUsuario = document.querySelector(".resultado_usuario img"),
    resultadoPC = document.querySelector(".resultado_pc img"),
    resultado = document.querySelector(".resultado"),
    opcoesImagens = document.querySelectorAll(".opcao_imagem"),
    pontosUsuario = document.querySelector("#pontos_usuario"),
    pontosPC = document.querySelector("#pontos_pc"),
    botaoReiniciar = document.querySelector("#botao_reiniciar");

let placarUsuario = 0;
let placarPC = 0;
let jogoAtivo = true;

opcoesImagens.forEach((image, index) => {

    image.addEventListener("click", (e) => {

        if (!jogoAtivo) {
            return;
        }

        image.classList.add("ativa");

        resultadoUsuario.src = resultadoPC.src = "img_pedra.png";

        resultado.textContent = "...";

        opcoesImagens.forEach((image2, index2) => {

            index !== index2 && image2.classList.remove("ativa");

        });

        conteinerJogo.classList.add("start");

        let tempo = setTimeout(() => {

            conteinerJogo.classList.remove("start");

            let imageSrc = e.target.querySelector("img").src;

            resultadoUsuario.src = imageSrc;

            let numeroRandom = Math.floor(Math.random() * 3);

            let imagensPC = [
                "img_pedra.png",
                "img_papel.png",
                "img_tesoura.png"
            ];

            resultadoPC.src = imagensPC[numeroRandom];

            let valorPC = [
                "Pedra",
                "Papel",
                "Tesoura"
            ][numeroRandom];

            let valorUsuario = [
                "Pedra",
                "Papel",
                "Tesoura"
            ][index];

            let resultadosPartidas = {

                PedraPedra: "Empate",

                PedraPapel: "Computador",

                PedraTesoura: "Você",

                PapelPapel: "Empate",

                PapelPedra: "Você",

                PapelTesoura: "Computador",

                TesouraTesoura: "Empate",

                TesouraPedra: "Computador",

                TesouraPapel: "Você"

            };

            let valorResultado =
                resultadosPartidas[valorUsuario + valorPC];

            if (valorUsuario === valorPC) {

                resultado.textContent = "Empate!";

            } else {

                if (valorResultado === "Você") {

                    placarUsuario++;

                } else {

                    placarPC++;

                }

                pontosUsuario.textContent = placarUsuario;
                pontosPC.textContent = placarPC;

                resultado.textContent = `${valorResultado} Venceu!`;

                if (placarUsuario === 2) {

                    resultado.textContent = "Você venceu o jogo!";

                    finalizarJogo();

                } else if (placarPC === 2) {

                    resultado.textContent = "Computador venceu o jogo!";

                    finalizarJogo();

                }

            }

        }, 2500);

    });

});


function finalizarJogo() {

    jogoAtivo = false;

    botaoReiniciar.style.display = "block";

}


botaoReiniciar.addEventListener("click", () => {

    placarUsuario = 0;

    placarPC = 0;

    jogoAtivo = true;

    pontosUsuario.textContent = 0;

    pontosPC.textContent = 0;

    resultado.textContent = "Vamos Jogar!";

    resultadoUsuario.src = "img_pedra.png";

    resultadoPC.src = "img_pedra.png";

    botaoReiniciar.style.display = "none";

    opcoesImagens.forEach((image) => {

        image.classList.remove("ativa");

    });

});
