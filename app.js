let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = window.document.querySelector(tag);
    campo.innerHTML = texto;
};


exibirTextoNaTela("h1","Jogo do numero secreto");
exibirTextoNaTela("p","Escolha um numero entre 1 a 10");

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
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 a 10");
}