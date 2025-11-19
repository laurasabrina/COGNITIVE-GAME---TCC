/* ------------------------------------------
               JOGO CAÇA PALAVRAS
   ------------------------------------------*/

// configuração incial do jogo - define o tamanho da grade 
const gridRows = 16;
const gridCols = 24; 

// lista de palavras válidas
const validWords = [
  "MENINO", "RISO", "TEMPO", "MEMORIA", "AMOR", "NETINHO", "SOL",
  "CAMINHO", "CAMPO", "ABRACO", "SANTO", "TRILHAS", "FLORES", "JARDIM",
  "CANTO", "TARDE"
];

// cria uma grade vazia
let grid = Array.from({ length: gridRows }, () => Array(gridCols).fill(''));

// preenche as células vazias com letras aleatórias de A a Z
function fillEmptyCells() {
  for (let r = 0; r < gridRows; r++) {
    for (let c = 0; c < gridCols; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }
}

// desenha a grade na tela
function drawGrid() {
  const table = document.getElementById('puzzleGrid');
  table.innerHTML = '';
  grid.forEach((row, r) => {
    const tr = document.createElement('tr');
    row.forEach((letter, c) => {
      const td = document.createElement('td');
      td.textContent = letter;
      td.dataset.row = r;
      td.dataset.col = c;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

// exibe a lista de palavras que o jogador deve achar
function displayWords() {
  const wordsDiv = document.getElementById('wordsList');
  wordsDiv.innerHTML = '';
  validWords.forEach((word, i) => {
    const w = document.createElement('span');
    w.textContent = word;
    w.id = `word${i}`;
    w.className = 'word';
    wordsDiv.appendChild(w);
  });
}

// direções para inserção das palavras
const directions = [
  [0, 1], [1, 0], [1, 1],
  [0, -1], [-1, 0], [-1, -1],
  [1, -1], [-1, 1]
];

// posiciona as palavras na grade de maneira aleatória
function shuffleWords() {
  validWords.forEach(word => {
    let placed = false;
    while (!placed) {
      const dir = directions[Math.floor(Math.random() * directions.length)];
      const row = Math.floor(Math.random() * gridRows);
      const col = Math.floor(Math.random() * gridCols);
      let fits = true;

      for (let i = 0; i < word.length; i++) {
        const r = row + dir[0] * i;
        const c = col + dir[1] * i;
        if (
          r < 0 || r >= gridRows || c < 0 || c >= gridCols ||
          (grid[r][c] !== '' && grid[r][c] !== word[i])
        ) {
          fits = false;
          break;
        }
      }

      if (fits) {
        for (let i = 0; i < word.length; i++) {
          const r = row + dir[0] * i;
          const c = col + dir[1] * i;
          grid[r][c] = word[i];
        }
        placed = true;
      }
    }
  });
}

// seleção e verificação 
let startCell = null;  // onde o jogador iniciou o clique
let endCell = null;    // onde ele soltou o clique
let foundCount = 0;    // nº de palavras já encontradas

function handleSelection() {
  document.querySelectorAll('#puzzleGrid td').forEach(cell => {
    cell.addEventListener('mousedown', () => {
      startCell = cell;
      document.querySelectorAll('.highlight').forEach(td => td.classList.remove('highlight'));
      cell.classList.add('highlight');
    });

    cell.addEventListener('mouseup', () => {
      if (!startCell) return;
      endCell = cell;
      highlightSelection();
      checkWord();
      startCell = null;
      endCell = null;
    });
  });
}

// destaca seleção do jogador
function highlightSelection() {
  const startR = +startCell.dataset.row, startC = +startCell.dataset.col;
  const endR = +endCell.dataset.row, endC = +endCell.dataset.col;
  const dR = Math.sign(endR - startR);
  const dC = Math.sign(endC - startC);
  let r = startR, c = startC;
  while (true) {
    const td = document.querySelector(`[data-row='${r}'][data-col='${c}']`);
    td.classList.add('highlight');
    if (r === endR && c === endC) break;
    r += dR;
    c += dC;
  }
}

// verifica se a seleção é uma palavra válida
function checkWord() {
  const highlighted = document.querySelectorAll('.highlight');
  const word = Array.from(highlighted).map(td => td.textContent).join('');
  const reversed = word.split('').reverse().join('');

  validWords.forEach((valid, i) => {
    if (valid === word || valid === reversed) {
      highlighted.forEach(td => td.classList.add('found'));
      document.getElementById(`word${i}`).classList.add('found-word');
      foundCount++;
    }
  });

  document.querySelectorAll('.highlight').forEach(td => td.classList.remove('highlight'));

  const total = validWords.length;
  document.getElementById('progress').textContent = `Palavras encontradas: ${foundCount}/${total}`;

    if (foundCount >= total) {
    setTimeout(() => {
        alert("Parabéns! Você encontrou todas as palavras!");
        // Após o jogador clicar em "OK", mostra a próxima tela
        document.getElementById("jogoCacaPalavras").style.display = "none";
        document.getElementById("botao").style.display = "block"; // volta o botão PRÓXIMO
        proximaImagem();
    }, 100);
    }

}

// inicialização
shuffleWords();
fillEmptyCells();
drawGrid();
displayWords();
handleSelection();
document.getElementById('progress').textContent = `Palavras encontradas: 0/${validWords.length}`;
