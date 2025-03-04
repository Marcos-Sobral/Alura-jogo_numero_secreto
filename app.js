let numeroSecreto = gerarNumeroAleatorio();
//console.log(numeroSecreto);

function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("p","Você descobriu o número secreto!");
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p","O número secreto é menor");  
        }else{
            exibirTextoNaTela("p", "O número secreto é maior");
        }
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

function exibirTextoNaTela(tag, texto) {
    let campo = window.document.querySelector(tag);
    campo.innerHTML = texto;
};


exibirTextoNaTela("h1","Jogo do numero secreto");
exibirTextoNaTela("p","Escolha um numero entre 1 a 10");