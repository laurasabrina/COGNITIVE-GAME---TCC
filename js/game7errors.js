/* ------------------------------------------
               JOGO DOS 7 ERROS
   ------------------------------------------*/

var Game7Errors = function(positions) {
    var $this = this;

    // variáveis internas
    $this.vars = {
        positions: positions,
        currentPositions: [],
        markers: 0,
        started: false,
        ended: false
    };

    // configuração para definir o raio de acerto
    $this.defaults = {
        radius: 50 // raio de acerto
    };

    // cache ds elementos: div principal e elementos que segue o mouse
    var $canvas_main = $("#canvas-main");
    var $cursor = $canvas_main.find('.cursor');

    // método utilizado para iniciar o jogo
    this.init = function() {
        $this.vars.started = true; // marca que o jogo foi iniciado
        $this.vars.ended = false; 
        $this.vars.markers = 0;
        $this.vars.currentPositions = [...$this.vars.positions]; 
        $this.bindMouseEvents(); 
        $canvas_main.find('.marker').remove(); 
    };

    // evento do mouse: mousemove, mouseleave e click
    this.bindMouseEvents = function() {
        $canvas_main.on('mousemove', function(e) { // faz o cursor seguir o mouse
            var parentOffset = $(this).offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;

            $cursor.css({ left: relX - 10, top: relY - 10 }).addClass('visible');
        });

        $canvas_main.on('mouseleave', function() { 
            $cursor.removeClass('visible'); //esconde o cursor
        });

        $canvas_main.on('click', function(e) { // trata o clique do jogador
            if (!$this.vars.started || $this.vars.ended) return;

            var parentOffset = $(this).offset(); // cálculo da posição dos cliques
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;

            // só considera a metade direita da div (onde estão os erros)
            if (relX < $canvas_main.width() / 2) return;

            $this.addMarker(relX, relY); // se o cálculo for válido, chama a função de verificação de acertos
        });
    };

    // função de verificação de acertos
    this.addMarker = function(relX, relY) {
        if ($this.vars.markers >= 7) return; // limite de 7 marcadores que representa os erros

        var achou = false;

        $.each($this.vars.currentPositions, function(index, pos) { // cálculo da distância do clique e do erro
            var dx = relX - pos.x;
            var dy = relY - pos.y;
            var distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < $this.defaults.radius) { // se o clique estiver dentro do raio
                achou = true;

                // cria marcador de acerto - círculo verde
                var $marker = $('<div class="marker accept"></div>');
                $marker.css({
                    left: pos.x - ($this.defaults.radius / 2),
                    top: pos.y - ($this.defaults.radius / 2)
                });
                $canvas_main.append($marker);

                // Remove posição encontrada
                $this.vars.currentPositions.splice(index, 1);
                $this.vars.markers++;
                return false; // sai do $.each
            }
        });

        if (!achou) { // se não está dentro do raio
            console.log("Clique inválido, não há erro aqui!");
        }

        if ($this.vars.currentPositions.length === 0) { // se encontrou todos os erros - exibe o alert abaixo
            $this.vars.ended = true;
            alert("Parabéns! Você encontrou todos os 7 erros.");

            // após clique em ok da janela modal, chama a função global que troca de tela:
            concluirJogo7Erros();
        }

    };

    this.init(); // inicia automaticamente ao ser criado
};

// função para iniciar o jogo
function iniciarJogo7Erros() {
    var $canvas_main = $("#canvas-main");
    var $imgRight = $canvas_main.find('img.right');

    // escala da imagem
    var scaleX = $imgRight.width() / 1365; 
    var scaleY = $imgRight.height() / 768;

    var offsetX = $canvas_main.width() / 2; // metade direita da div - onde os cliques são válidos

    // coordenadas originais dos erros (em pixels)
    var positionsOriginal = [
        {x: 1317, y: 260}, // sol 
        {x: 1157, y: 372}, // pássaro 
        {x: 617, y: 650}, // óculos 
        {x: 744, y: 798}, // casaco 
        {x: 1081, y: 741}, // janela 
        {x: 137, y: 795}, // flores 
        {x: 270, y: 722} // mato 
    ];

    // ajusta posições de acordo com escala e offset
    var positions = positionsOriginal.map(function(pos) {
        return {
            x: pos.x * scaleX + offsetX,
            y: pos.y * scaleY
        };
    });

    // inicializa o jogo
    new Game7Errors(positions);
}
