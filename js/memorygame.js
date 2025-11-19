/* ------------------------------------------
               JOGO DA MEMÓRIA
   ------------------------------------------*/

// deck de cartas
let deck = [
  {
    id: 1,
    name: "Chapéu",
    color: "#FFEB99",
    imagem: "images/1.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 2,
    name: "Cueca",
    color: "#99F0FF",
    imagem: "images/2.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 3,
    name: "Meias",
    color: "#FF9999",
    imagem: "images/3.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 4,
    name: "Relógio",
    color: "#D9D9D9",
    imagem: "images/4.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 5,
    name: "Carta",
    color: "#FFD699",
    imagem: "images/5.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 6,
    name: "Chaves",
    color: "#D9F4CD",
    imagem: "images/6.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 7,
    name: "Bilhetes",
    color: "#CAF5F7",
    imagem: "images/7.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
  {
    id: 8,
    name: "Celular",
    color: "#D3FF99",
    imagem: "images/8.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
  },
];

// seleciona todas as cartas
const cards = document.querySelectorAll('.card');

// variáveis de controle
let hasFlippedCard = false;   // verifica se o jogador virou a 1ª carta
let lockBoard = false;        // impede o jogador de virar novas cartas enquanto duas estão sendo comparadas
let firstCard, secondCard;    // armazenam as cartas viradas
let movements = 0;   // contador de erros cometidos
let winContador = 0; // contador para os pares corretos

// função para virar uma carta
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

// função para verificar se as cartas são iguais
function checkForMatch() {
  if (firstCard.dataset.nome !== secondCard.dataset.nome) {
    movements++;
  }

  document.getElementById("movimentos").innerHTML = `${movements}`;
  document.getElementById("movimentos2").innerHTML = `${movements}`;

  // verficação do par correto
  if (firstCard.dataset.nome === secondCard.dataset.nome) {
    winContador++;
    disableCards();

    // exibe um alert simples quando o jogador vence
    if (winContador === 8) {
        setTimeout(() => {
            alert(`Parabéns! Você encontrou todos os pares com ${movements} erros.`);
            window.parent.postMessage("memoriaConcluida", "*");
        }, 500);
    }
    return;
  }

  unflipCards();
}

// função para desativar cartas corretas
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

// função para desvirar cartas erradas
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

// função para resetar as variáveis de controle
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// função para embaralhar as cartas
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

// adiciona o efeito de clique em cada carta
cards.forEach(card => card.addEventListener('click', flipCard));
