/* -----------------------------
    LISTA DE IMAGENS UTILIZADAS
   -----------------------------*/
const imagens = [
    "images/home_screen.png", // tela 1 - menu inicial
    "images/screen2.png", // tela 2 - narrativa 1
    "images/screen3.png", // tela 3 - narrativa 2
    "images/screen3.png", // tela 4 - tela de escolha do jogo
    "images/screen3.png", // tela 5 - tela do jogo dos 7 erros
    "images/screen3.png", // tela 6 - narrativa 3
    "images/screen3.png", // tela 7 - narrativa 4
    "images/screen4.png", // tela 8 - narrativa 5
    "images/screen-balloon1.png", // tela 9 - tela fixa: balão enfa
    "images/screen-balloon2.png", // tela 10 - tela fixa: balão sr. antônio
    "images/screen5.png", // tela 11 - narrativa 6
    "images/screen-balloon3.png", // tela 12 - tela fixa: balão enfa (mudar img)
    "images/screen5.png", // tela 13 - tela de escolha
    "images/screen5.png", // tela 14 - narrativa 7
    "images/screen5.png", // tela 15 - narrativa 8
    "images/screen5.png", // tela 16 - tela de escolha do jogo + jogo caça palavras
    "images/screen5.png", // tela 17 - narrativa 9
    "images/screen5.png", // tela 18 - tela que mostra o poema
    "images/screen-balloon4.png", // tela 19 - tela fixa: balão sr. antônio
    "images/screen5.png", // tela 20 - narrativa 10
    "images/screen-balloon5.png", // tela 21 - tela fixa: balão enfa
    "images/screen5.png", // tela 22 - narrativa 11
    "images/screen-balloon6.png", // tela 23 - tela fixa: balão sr. antônio
    "images/screen8.png", // tela 24 - narrativa 12
    "images/screen8.png", // tela 25 - tela de escolha + jogo da memória
    "images/screen9.png", // tela 26 - narrativa 13
    "images/screen10.png", // tela 27 - narrativa 14
    "images/screen-balloon7.png", // tela 28 - tela fixa: balão sr. antônio
    "images/screen11.png", // tela 29 - narrativa 15
    "images/screen12.png", // tela 30 - tela fixa: Dias depois...
    "images/screen13.png", // tela 31 - narrativa 16
    "images/screen-balloon8.png", // tela 32 - tela fixa: balão netinho
    "images/screen14.png", // tela 33 - narrativa 17
    "images/end_screen.png" // tela 34 - FIM

];

/* ------------------------------------------
    FUNÇÃO DE DIGITAÇÃO - PALAVRA P/ PALAVRA
   ------------------------------------------*/
let indice = 0;

function typeTextByWord(element, text, speed = 40) {
    element.textContent = "";
    const words = text.split(" ");
    let i = 0;

    const interval = setInterval(() => {
        element.textContent += (i === 0 ? "" : " ") + words[i];
        i++;
        if (i >= words.length) {
            clearInterval(interval);
        }
    }, speed);
}

/* -------------------------------
    FUNÇÃO DE PARA TROCA DE TELAS
   -------------------------------*/
let escolhaJogador = "";

function proximaImagem() {
    indice++;
    if (indice >= imagens.length) indice = 0;

    const fundo = document.getElementById("fundo");
    const menu = document.querySelector('.menu-buttons');
    const botao = document.getElementById("botao");
    const balloon_screen2 = document.getElementById("balloon_screen2");
    const balloon_screen3 = document.getElementById("balloon_screen3");
    const balloon_screen4 = document.getElementById("balloon_screen4");
    const balloon_screen5 = document.getElementById("balloon_screen5");
    const balloon_screen6 = document.getElementById("balloon_screen6");
    const balloon_screen7 = document.getElementById("balloon_screen7");
    const balloon_screen8 = document.getElementById("balloon_screen8");
    const balloon_screen9 = document.getElementById("balloon_screen9");
    const balloon_screen10 = document.getElementById("balloon_screen10");
    const balloon_screen11 = document.getElementById("balloon_screen11");
    const balloon_screen12 = document.getElementById("balloon_screen12");
    const balloon_screen13 = document.getElementById("balloon_screen13");
    const balloon_screen14 = document.getElementById("balloon_screen14");
    const balloon_screen15 = document.getElementById("balloon_screen15");
    const balloon_screen16 = document.getElementById("balloon_screen16");
    const balloon_screen17 = document.getElementById("balloon_screen17");
    const balloon_screen18 = document.getElementById("balloon_screen18");
    const game7errors = document.getElementById("game7errors");
    const telaEscolhaMsg = document.getElementById("tela_escolha_msg");
    const telaEscolhaCaca = document.getElementById("tela_escolha_cacapalavras");
    const telaEscolhaMemory = document.getElementById("tela_escolha_memory");
    

    botao.style.display = "none"; // por padrão, o botão fica oculto

    // Fade out da imagem atual
    fundo.classList.add("fade-out");

    setTimeout(() => {
        
        fundo.src = imagens[indice];
        fundo.style.display = "block";
        fundo.classList.remove("fade-out");

        // Oculta tudo por padrão
        balloon_screen2.style.display = "none";
        balloon_screen3.style.display = "none";
        balloon_screen4.style.display = "none";
        balloon_screen5.style.display = "none";
        balloon_screen6.style.display = "none";
        balloon_screen7.style.display = "none";
        balloon_screen8.style.display = "none";
        balloon_screen9.style.display = "none";
        balloon_screen10.style.display = "none";
        balloon_screen11.style.display = "none";
        balloon_screen12.style.display = "none";
        balloon_screen13.style.display = "none";
        balloon_screen14.style.display = "none";
        balloon_screen15.style.display = "none";
        balloon_screen16.style.display = "none";
        balloon_screen17.style.display = "none";
        balloon_screen18.style.display = "none";
        
        game7errors.style.display = "none";
        

        // === tela inicial - menu ===
        if (indice === 0) {
            menu.style.display = "flex"; // volta o menu se retornar à tela inicial

        // === tela 2 - narrativa ===
        } else if (indice === 1) {
            menu.style.display = "none";
            balloon_screen2.style.display = "block";
            botao.style.display = "block"; // mostra botão PRÓXIMO

            const narrativa2 = "Naquela tarde ensolarada no Asilo Aurora, o relógio antigo da sala marcava pouco mais de meio dia. O som ritmado do pêndulo se misturava às vozes alegres que vinham do refeitório, onde alguns moradores comentavam sobre a visita dos familiares no domingo seguinte. As risadas enchiam o ambiente, mas o senhor Antônio, que atravessava a sala naquele momento, não compreendeu bem o motivo de tanta euforia e resolveu ir até lá para ver o que estava acontecendo.";
            typeTextByWord(balloon_screen2, narrativa2, 180); 

        // === tela 3 - narrativa ===
        } else if (indice === 2) {
            balloon_screen3.style.display = "block";
            botao.style.display = "block"; // mostra botão PRÓXIMO

            const narrativa3 = "No meio do caminho, a atenção do senhor Antônio desviou para algo ao lado da poltrona. Sobre a pequena mesinha, repousava um porta-retratos antigo: ele, a esposa, o filho, a nora e os netinhos, Miguel e Alice. Mas algo parecia estranho naquela imagem …";
            typeTextByWord(balloon_screen3, narrativa3, 180);
            
        // === tela 4 - decisão antes do jogo ===
        } else if (indice === 3) {
            const telaEscolha = document.getElementById("tela_escolha");
            telaEscolha.style.display = "block";
            botao.style.display = "none"; // esconde o botão PRÓXIMO nesta tela
            mostrarTelaEscolha();
            return;

        // === tela 5 - jogo dos 7 erros ===
        } else if (indice === 4) {
            fundo.style.display = "block";
            game7errors.style.display = "block";
            botao.style.display = "none"; // esconde botão enquanto joga
            iniciarJogo7Erros();


        // === tela 6 - narrativa ===
        } else if (indice === 5) {
            balloon_screen4.style.display = "block";
            botao.style.display = "block"; // mostra o botão PRÓXIMO        
        
            const narrativa4 = "Os sorrisos eternizados na fotografia despertaram nele uma saudade profunda. Passou os dedos enrugados pelo vidro, como se quisesse tocar novamente aquele instante perdido no tempo. Suspirou. Então lembrou que, naquele dia, era o aniversário do seu netinho, Miguel, e decidiu preparar uma surpresa para enviar a ele; algo que os dois sempre compartilhavam com carinho: poemas.";
            typeTextByWord(balloon_screen4, narrativa4, 180);

        // === tela 7 - narrativa ===
        } else if (indice === 6) {
            balloon_screen5.style.display = "block";
            botao.style.display = "block"; // mostra o botão PRÓXIMO

            const narrativa5 = "Observando a foto, recordou o momento capturado naquele registro: um verão no campo, repleto de risadas, brincadeiras e o barulho suave dos galhos das árvores. Gostaria de escrever algo sobre aquele momento especial, mas ao mesmo tempo em que estava feliz pela lembrança, também se viu apreensivo pois não sabia como colocar aquela lembrança em versos.";
            typeTextByWord(balloon_screen5, narrativa5, 180);

        // === tela 8 - narrativa ===
        } else if (indice === 7) {
            balloon_screen6.style.display = "block";
            botao.style.display = "block";

            const narrativa6 = "Enquanto passava pela sala com um caderno de anotações, a enfermeira Clara notou o sorriso estampado no rosto do senhor Antônio. Curiosa e afetuosa, perguntou:";
            typeTextByWord(balloon_screen6, narrativa6, 180);

        // === tela 9 - só a img ===
        } else if (indice === 8) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 10 - só a img ===
        } else if (indice === 9) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 11 - narrativa ===
        } else if (indice === 10) {
            balloon_screen7.style.display = "block";
            botao.style.display = "block";

            const narrativa7 = "Clara o chamou para ir à salinha mais reservada e se sentou ao lado dele. Não lhe deu instruções, apenas deixou que as palavras viessem com calma. Depois de alguns minutos, sorriu e perguntou:";
            typeTextByWord(balloon_screen7, narrativa7, 180);

        // === tela 12 - só a img ===
        } else if (indice === 11) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 13 - tela de escolha: carta ou mensagem ===
        } else if (indice === 12) {
            fundo.style.display = "block";
            telaEscolhaMsg.style.display = "flex";

            document.getElementById("botao_carta").onclick = () => {
                telaEscolhaMsg.style.display = "none";
                escolhaJogador = "carta";
                proximaImagem();
            };

            document.getElementById("botao_mensagem").onclick = () => {
                telaEscolhaMsg.style.display = "none";
                escolhaJogador = "mensagem";
                proximaImagem();
            };
            return; // impede que o resto da função continue
        
        // === tela 14 - narrativa ===
        } else if (indice === 13) {
            balloon_screen8.style.display = "block";
            botao.style.display = "block";

            const narrativa8 = "Seu Antônio refletiu. Cada escolha tinha seu valor: a carta, mais lenta, seria um presente que duraria no tempo; a mensagem digital, rápida, encurtaria a distância imediatamente. Por fim, tomou sua decisão.";
            typeTextByWord(balloon_screen8, narrativa8, 180);

        // === tela 15 - narrativa ===
        } else if (indice === 14) {
            balloon_screen9.style.display = "block";
            botao.style.display = "block";

            const narrativa9 = "Os olhos de Antônio se encheram de brilho. Hesitou por um momento, mas logo as palavras começaram a sair, primeiro tímidas, depois mais firmes,  até se transformarem em versos para o neto:";
            typeTextByWord(balloon_screen9, narrativa9, 180);

        // === tela 16 - decisão antes do jogo + jogo ===
        } else if (indice === 15) {
            botao.style.display = "none"; 
            telaEscolhaCaca.style.display = "flex";

            document.getElementById("btnJogarCaca").onclick = () => {
                telaEscolhaCaca.style.display = "none";
                botao.style.display = "none";
                iniciarCacaPalavras(); 
                return; 
            };

            document.getElementById("btnPularCaca").onclick = () => {
                telaEscolhaCaca.style.display = "none";
                proximaImagem();
            };
            return;


        // === tela 17 - narrativa ===
        } else if (indice === 16) {
            balloon_screen10.style.display = "block";
            botao.style.display = "block";

            const narrativa10 = "Quando terminou, leu em voz alta, acompanhando as linhas com o dedo trêmulo. Um sorriso sereno tomou-lhe o rosto.";
            typeTextByWord(balloon_screen10, narrativa10, 180);

        // === tela 18 - mostra a carta ou a mensagem === 
        } else if (indice === 17) {
            botao.style.display = "block";
            fundo.style.display = "block";

            if (escolhaJogador === "carta") {
                fundo.src = "images/screen6.png"; // ou altere para a carta se necessário
            } else if (escolhaJogador === "mensagem") {
                fundo.src = "images/screen7.png"; // ou altere para a mensagem
            }

            return;

        // === tela 19 - só a img === 
        } else if (indice === 18) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 20 - narrativa ===
        } else if (indice === 19) {
            balloon_screen11.style.display = "block";
            botao.style.display = "block";

            const narrativa11 = "Clara, tocada pela cena, sugeriu:";
            typeTextByWord(balloon_screen11, narrativa11, 180);

        // === tela 21 - só a img === 
        } else if (indice === 20) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 22 - narrativa ===
        } else if (indice === 21) {
            balloon_screen12.style.display = "block";
            botao.style.display = "block";

            const narrativa12 = "Antônio concordou, mas antes pediu licença para ir ao quarto. Lembrou-se de um detalhe que tornaria aquele gesto ainda mais especial.";
            typeTextByWord(balloon_screen12, narrativa12, 180);

        // === tela 23 - só a img === 
        } else if (indice === 22) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 24 - narrativa ===
        } else if (indice === 23) {
            balloon_screen13.style.display = "block";
            botao.style.display = "block";

            const narrativa13 = "Determinado a procurar. Abriu gavetas, afastou meias e camisas dobradas. Nada. Foi até o armário e puxou uma caixa de lembranças.";
            typeTextByWord(balloon_screen13, narrativa13, 180);


        // === tela 25 - decisão antes do jogo + jogo ===
        } else if (indice === 24) {
            botao.style.display = "none";
            telaEscolhaMemory.style.display = "flex";

            document.getElementById("btnJogarMemory").onclick = () => {
                telaEscolhaMemory.style.display = "none";
                iniciarJogoMemoria();
            };

            document.getElementById("btnPularMemory").onclick = () => {
                telaEscolhaMemory.style.display = "none";
                proximaImagem(); // pula o jogo e continua a história
            };
            return;

        
        // === tela 26 - narrativa ===
        } else if (indice === 25) {
            balloon_screen14.style.display = "block";
            botao.style.display = "block";

            const narrativa14 = "Ali estavam cartas antigas, bilhetes amarelados, um relógio parado… e, entre eles, o chapéu. Pequeno, já gasto, mas guardando um tesouro: um chapéu de palha, dado por Miguel anos atrás, com seu nome escrito à caneta.";
            typeTextByWord(balloon_screen14, narrativa14, 180);

        // === tela 27 - narrativa ===
        } else if (indice === 26) {
            balloon_screen15.style.display = "block";
            botao.style.display = "block";

            const narrativa15 = "Os olhos de Antônio se encheram de lágrimas. Segurando o chapéu contra o peito, voltou até Clara.";
            typeTextByWord(balloon_screen15, narrativa15, 180);
        
        // === tela 28 - só a img === 
        } else if (indice === 27) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 29 - narrativa ===
        } else if (indice === 28) {
            balloon_screen16.style.display = "block";
            botao.style.display = "block";

            const narrativa16 = "Minutos depois, já no jardim ensolarado, a câmera registrou a imagem de Antônio sorrindo, o chapéu de palha sobre a cabeça. O clique foi simples, mas carregado de memórias.";
            typeTextByWord(balloon_screen16, narrativa16, 180);

        // === tela 30 - só a img === 
        } else if (indice === 29) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 31 - narrativa ===
        } else if (indice === 30) {
            balloon_screen17.style.display = "block";
            botao.style.display = "block";

            const narrativa17 = "No domingo esperado, Miguel correu pelo portão do Asilo Aurora. Saltou nos braços do avô, apertando-o com força.";
            typeTextByWord(balloon_screen17, narrativa17, 180);

        // === tela 32 - só a img === 
        } else if (indice === 31) {
            botao.style.display = "block";
            fundo.style.display = "block";

        // === tela 33 - narrativa ===
        } else if (indice === 32) {
            balloon_screen18.style.display = "block";
            botao.style.display = "block";

            const narrativa18 = "Naquele instante, Antônio compreendeu: mesmo diante das limitações, sempre existiriam caminhos para cultivar a memória, a conexão e, acima de tudo, o amor.";
            typeTextByWord(balloon_screen18, narrativa18, 180);

        }

    }, 800);
}

/* ------------------------------------
    CHAMADA FINAL DO JOGO DOS 7 ERROS
   ------------------------------------*/
function concluirJogo7Erros() {
    const game7errors = document.getElementById("game7errors");
    game7errors.style.display = "none";
    indice++; // passa para a tela 4
    proximaImagem();
}

/* -------------------------------
   FUNÇÕES DAS TELAS DE INFORMAÇÃO
   -------------------------------*/

// Exibe a imagem "Sobre o Jogo"
function mostrarSobre() {
    document.getElementById("sobreJogo").style.display = "flex";
}

// Fecha a imagem "Sobre o Jogo"
function fecharSobre() {
    document.getElementById("sobreJogo").style.display = "none";
}

// Exibe a imagem "Sobre a Desenvolvedora"
function mostrarDesenvolvedora() {
    document.getElementById("sobreDev").style.display = "flex";
}

// Fecha a imagem "Sobre a Desenvolvedora"
function fecharDesenvolvedora() {
    document.getElementById("sobreDev").style.display = "none";
}

/* ------------------------------
   FUNÇÕES DAS TELAS DE ESCOLHA
   ------------------------------*/
function mostrarTelaEscolha() {
  document.getElementById("tela_escolha").style.display = "flex";
}

function iniciar7erros() {
    const telaEscolha = document.getElementById("tela_escolha");
    const game7errors = document.getElementById("game7errors");
    const fundo = document.getElementById("fundo");
    const botao = document.getElementById("botao");

    telaEscolha.style.display = "none";
    fundo.style.display = "block";
    game7errors.style.display = "block";
    botao.style.display = "none";

    iniciarJogo7Erros(); // chama a função do jogo
}

function pularJogo() {
    const telaEscolha = document.getElementById("tela_escolha");
    telaEscolha.style.display = "none";
    indice++; // avança para a próxima tela (narrativa pós-jogo)
    proximaImagem();
}

/* --------------------------------------------
    FUNÇÃO PARA CHAMADA DO JOGO CAÇA PALAVRAS
   --------------------------------------------*/
function iniciarCacaPalavras() {
    const jogoCacaPalavras = document.getElementById("jogoCacaPalavras");
    const fundo = document.getElementById("fundo");
    const botao = document.getElementById("botao");

    // Esconde o botão PRÓXIMO
    botao.style.display = "none";

    // Mostra o fundo e o jogo
    fundo.style.display = "block";
    jogoCacaPalavras.style.display = "flex";

    // Reinicia o jogo (funções do wordsearch.js)
    if (typeof shuffleWords === "function") {
        grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));
        foundCount = 0;
        shuffleWords();
        fillEmptyCells();
        drawGrid();
        displayWords();
        handleSelection();
        document.getElementById('progress').textContent =
            `Palavras encontradas: 0/${validWords.length}`;
    }
}


/* -----------------------------------------------
   VERSÕES AUXILIARES PARA CONTROLE DE TELAS
   -----------------------------------------------*/

// Chamada ao clicar no botão da tela introdutória
function iniciarCacaPalavrasTela() {
    document.getElementById("tela_intro_cacapalavras").style.display = "none";
    mostrarCacaPalavras();
}

// Mostra o jogo do caça-palavras (caso queira chamar direto)
function mostrarCacaPalavras() {
    document.getElementById("jogoCacaPalavras").style.display = "flex";
    iniciarCacaPalavras(); // Função definida no arquivo wordsearch.js
}


/* -----------------------------------------------
   FUNÇÃO PARA MOSTRAR A TELA DE ESOLHA: CARTA/SMS
   -----------------------------------------------*/

function mostrarCarta() {
    const telaEscolhaMsg = document.getElementById("tela_escolha_msg");
    const fundo = document.getElementById("fundo");
    const botao = document.getElementById("botao");

    telaEscolhaMsg.style.display = "none";
    fundo.src = "images/carta.png"; // imagem da carta
    fundo.style.display = "block";
    botao.style.display = "block"; // mostra botão para continuar
}

function mostrarMensagemInstantanea() {
    const telaEscolhaMsg = document.getElementById("tela_escolha_msg");
    const fundo = document.getElementById("fundo");
    const botao = document.getElementById("botao");

    telaEscolhaMsg.style.display = "none";
    fundo.src = "images/mensagem.png"; // imagem simulando WhatsApp
    fundo.style.display = "block";
    botao.style.display = "block"; // mostra botão para continuar
}
/* ---------------------------------------
   FUNÇÃO PARA CHAMAR O JOGO DA MEMÓRIA
   ---------------------------------------*/
function iniciarJogoMemoria() {
  const fundo = document.getElementById("fundo");
  const botao = document.getElementById("botao");
  const memoryContainer = document.getElementById("memoryContainer");
  const telaEscolhaMemory = document.getElementById("tela_escolha_memory");

  // Esconde os elementos da narrativa
  fundo.style.display = "none";
  botao.style.display = "none";
  telaEscolhaMemory.style.display = "none";

  // Exibe o container do jogo em tela cheia
  memoryContainer.style.display = "flex";

  // Carrega o jogo dentro do iframe
  const iframe = document.getElementById("memoryFrame");
  iframe.src = "indexMemoryGame.html"; 
}

/* -------------------------------------------
   ESCUTA A MENSAGEM DO IFRAME (JOGO CONCLUÍDO)
   -------------------------------------------*/
window.addEventListener("message", function (event) {
  if (event.data === "memoriaConcluida") {
    const memoryContainer = document.getElementById("memoryContainer");
    const fundo = document.getElementById("fundo");
    const botao = document.getElementById("botao");

    // Fecha o container do jogo
    memoryContainer.style.display = "none";

    // Continua a história
    proximaImagem();
  }
});
