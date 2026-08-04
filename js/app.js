const dados = {
    letras: [
        { simbolo: 'abelha.png', nome: 'A de Abelha 🐝', fala: 'Letra A. A de abelha', termos: ['a', 'abelha'] },
        { simbolo: 'bola.png', nome: 'B de Bola ⚽', fala: 'Letra B. B de bola', termos: ['b', 'bola'] },
        { simbolo: 'cachorro.png', nome: 'C de Cachorro 🐕', fala: 'Letra C. C de cachorro', termos: ['c', 'cachorro', 'cão'] },
        { simbolo: 'dado.png', nome: 'D de Dado 🎲', fala: 'Letra D. D de dado', termos: ['d', 'dado'] },
        { simbolo: 'escola.png', nome: 'E de Escola 🏫', fala: 'Letra E. E de escola', termos: ['e', 'escola', 'colégio'] },
        { simbolo: 'fogo.png', nome: 'F de Fogo 🔥', fala: 'Letra F. F de fogo', termos: ['f', 'fogo', 'fogueira'] },
        { simbolo: 'gato.png', nome: 'G de Gato 🐈', fala: 'Letra G. G de gato', termos: ['g', 'gato', 'gata'] },
        { simbolo: 'hipopotamo.png', nome: 'H de Hipopótamo 🦛', fala: 'Letra H. H de hipopótamo', termos: ['h', 'hipopótamo', 'ipopotamo'] },
        { simbolo: 'igreja.png', nome: 'I de Igreja ⛪', fala: 'Letra I. I de igreja', termos: ['i', 'igreja'] },
        { simbolo: 'jacare.png', nome: 'J de Jacaré 🐊', fala: 'Letra J. J de jacaré', termos: ['j', 'jacaré'] },
        { simbolo: 'kiwi.png', nome: 'K de Kiwi 🥝', fala: 'Letra K. K de kiwi', termos: ['k', 'kiwi'] },
        { simbolo: 'leao.png', nome: 'L de Leão 🦁', fala: 'Letra L. L de leão', termos: ['l', 'leão'] },
        { simbolo: 'macaco.png', nome: 'M de Macaco 🐒', fala: 'Letra M. M de macaco', termos: ['m', 'macaco'] },
        { simbolo: 'navio.png', nome: 'N de Navio 🚢', fala: 'Letra N. N de navio', termos: ['n', 'navio'] },
        { simbolo: 'ovo.png', nome: 'O de Ovo 🥚', fala: 'Letra O. O de ovo', termos: ['o', 'ovo'] },
        { simbolo: 'pato.png', nome: 'P de Pato 🦆', fala: 'Letra P. P de pato', termos: ['p', 'pato'] },
        { simbolo: 'queijo.png', nome: 'Q de Queijo 🧀', fala: 'Letra Q. Q de queijo', termos: ['q', 'queijo'] },
        { simbolo: 'rato.png', nome: 'R de Rato 🐀', fala: 'Letra R. R de rato', termos: ['r', 'rato'] },
        { simbolo: 'sapo.png', nome: 'S de Sapo 🦘', fala: 'Letra S. S de sapo', termos: ['s', 'sapo'] },
        { simbolo: 'trem.png', nome: 'T de Trem 🚂', fala: 'Letra T. T de trem', termos: ['t', 'trem'] },
        { simbolo: 'uva.png', nome: 'U de Uva 🍇', fala: 'Letra U. U de uva', termos: ['u', 'uva'] },
        { simbolo: 'vaca.png', nome: 'V de Vaca 🐄', fala: 'Letra V. V de vaca', termos: ['v', 'vaca'] },
        { simbolo: 'wafer.png', nome: 'W de Wafer 🧇', fala: 'Letra W. W de wafer', termos: ['w', 'wafer', 'uai fer'] },
        { simbolo: 'xicara.png', nome: 'X de Xícara ☕', fala: 'Letra X. X de xícara', termos: ['x', 'xícara', 'xicara'] },
        { simbolo: 'yakisoba.png', nome: 'Y de Yakisoba 🍜', fala: 'Letra Y. Y de yakisoba', termos: ['y', 'yakisoba', 'iacsoba'] },
        { simbolo: 'zebra.png', nome: 'Z de Zebra 🦓', fala: 'Letra Z. Z de zebra' }
    ],
    cores: [
        { simbolo: 'quadrado_vermelho.png', nome: 'Vermelho 🟥', fala: 'Cor vermelho', corFundo: '#f00a0a', termos: ['vermelho', 'vermelha'] },
        { simbolo: 'quadrado_azul.png', nome: 'Azul 🟦', fala: 'Cor azul', corFundo: '#0000FF', termos: ['azul'] },
        { simbolo: 'quadrado_verde.png', nome: 'Verde  🟩', fala: 'Cor verde', corFundo: '#00FF7F', termos: ['verde'] },
        { simbolo: 'quadrado_amarelo.png', nome: 'Amarelo 🟨', fala: 'Cor amarelo', corFundo: '#fff700', termos: ['amarelo', 'amarela'] },
        { simbolo: 'quadrado_roxo.png', nome: 'roxo 🟪', fala: 'Cor roxo', corFundo: '#8A00C4', termos: ['roxo', 'roxa', 'violeta'] }
    ],
    figuras: [
        { simbolo: 'circulo.png', nome: 'Círculo ⚫', fala: 'Figura círculo', termos: ['círculo', 'circulo', 'bola', 'redondo'] },
        { simbolo: 'quadrado.png', nome: 'Quadrado ⬛', fala: 'Figura quadrado', termos: ['quadrado'] },
        { simbolo: 'triangulo.png', nome: 'Triângulo 🔺', fala: 'Figura triângulo', termos: ['triângulo', 'triangulo'] },
        { simbolo: 'estrela.png', nome: 'Estrela ⭐', fala: 'Figura estrela', termos: ['estrela'] },
        { simbolo: 'coracao.png', nome: 'Coração ❤️', fala: 'Figura coração', termos: ['coração', 'coracao'] }
    ]
};

let indiceAtual = 0;
let categoriaAtual = 'letras';
let executandoProximo = false;
let estrelas = 0;
let jogoIniciado = false;

function somVitoria() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime);
    gain1.gain.setValueAtTime(0.1, audioCtx.currentTime);
    osc1.start();
    osc1.stop(audioCtx.currentTime + 0.1);

    setTimeout(() => {
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime);
        gain2.gain.setValueAtTime(0.1, audioCtx.currentTime);
        osc2.start();
        osc2.stop(audioCtx.currentTime + 0.2);
    }, 100);
}

function falaTexto(texto, callback) {
    window.speechSynthesis.cancel();
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'pt-BR';
    voz.rate = 0.85;
    voz.pitch = 1.15;
    if (callback) voz.onend = callback;
    window.speechSynthesis.speak(voz);
}

function reconheceVoz() {
    if (!jogoIniciado) {
        falaTexto("Escolha uma opção acima primeiro!");
        document.getElementById('status').textContent = '⚠️ Escolha uma opção acima primeiro!';
        return;
    }
    if (executandoProximo) return;

    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        document.getElementById('status').textContent = '❌ Navegador não suporta ouvir voz';
        return;
    }

    const rec = new SpeechRec();
    rec.lang = 'pt-BR';
    rec.start();
    document.getElementById('status').textContent = '🎤 Ouvindo...';

    rec.onresult = (evento) => {
        const falado = evento.results[0][0].transcript.toLowerCase().trim();
        const item = dados[categoriaAtual][indiceAtual];
        const acertou = item.termos.some(termo => falado.includes(termo));

        if (acertou) {
            document.getElementById('status').textContent = '✅ Acertou!';
            executandoProximo = true;
            estrelas++;
            document.getElementById('placar-estrelas').textContent = estrelas;
            somVitoria();

            falaTexto('🎉 Parabéns! Você acertou!', () => {
                setTimeout(() => {
                    executandoProximo = false;
                    proximoItem();
                }, 1000);
            });
        } else {
            document.getElementById('status').textContent = `🔄 Você disse: ${falado}`;
            falaTexto(`Quase! É ${item.fala}`);
        }
    };

    rec.onerror = () => {
        document.getElementById('status').textContent = '⚠️ Não entendi, tente novamente';
    };
}

function mostrarItem() {
    if (!jogoIniciado) return;

    const item = dados[categoriaAtual][indiceAtual];

    // ROTA TOTALMENTE CORRIGIDA E LIMPA AQUI:
    document.getElementById("visual-item").src = "assets/images/" + item.simbolo;
    
    document.getElementById('texto-item').textContent = item.nome;
    document.getElementById('status').textContent = '';

    const totalItens = dados[categoriaAtual].length;
    const porcentagem = (indiceAtual / totalItens) * 100;
    document.getElementById('barra-progresso').style.width = `${porcentagem}%`;

    const areaConteudo = document.querySelector('.area-conteudo');
    if (item.corFundo) {
        areaConteudo.style.backgroundColor = item.corFundo + '30';
    } else {
        areaConteudo.style.backgroundColor = 'rgba(26, 27, 38, 0.85)';
    }
}

function proximoItem() {
    indiceAtual++;
    if (indiceAtual >= dados[categoriaAtual].length) {
        indiceAtual = 0;
    }
    mostrarItem();
}

function mudarCategoria(categoria) {
    if (executandoProximo) return;
    jogoIniciado = true; 
    categoriaAtual = categoria;
    indiceAtual = 0;
    mostrarItem();
}

document.getElementById('btn-letras').addEventListener('click', () => mudarCategoria('letras'));
document.getElementById('btn-cores').addEventListener('click', () => mudarCategoria('cores'));
document.getElementById('btn-figuras').addEventListener('click', () => mudarCategoria('figuras'));

document.getElementById('btn-falar').addEventListener('click', () => {
    if (jogoIniciado && !executandoProximo) {
        falaTexto(dados[categoriaAtual][indiceAtual].fala);
    } else if (!jogoIniciado) {
        falaTexto("Escolha uma opção acima primeiro!");
    }
});
document.getElementById('btn-ouvir').addEventListener('click', reconheceVoz);
