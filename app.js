function exibirTextoNaTela(tag, texto) {
    let campo = window.document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela("h1","Jogo do numero secreto");
exibirTextoNaTela("p","Escolha um numero entre 1 a 10");

document.getElementsByClassName('container_botao');

/*function verificarChute(){
    console.log("O botao foi clicado");
}*/
const verificarChute = () =>{
    console.log("O botao foi clicado");
}
function reiniciarJogo() {  }