let numero = gerarNumeroAleatorio();
console.log(numero);
function exibirTextoNaTela(tag, texto) {
    let campo = window.document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela("h1","Jogo do numero secreto");
exibirTextoNaTela("p","Escolha um numero entre 1 a 10");

document.getElementsByClassName('container_botao');

const verificarChute = () =>{
    console.log("O botao foi clicado");
}

function reiniciarJogo() {  }

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}