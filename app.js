let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = window.document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate: 1.2});
}

/*Opção sem usar o responsive Voice
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

*/

function exibirMensagemInicial() {
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 a 10");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Acertou!");
        let palavraTentativa = tentativas > 1 ? "Tentativas!":"Tentativa!";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p",mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
        limparCampo();
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p","O número secreto é menor");  
        }else{
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function verificarNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo.");
    }else if(numero < 0){
        console.log("O número é negativo.");
    }else{
        console.log("O número é zero.");
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}