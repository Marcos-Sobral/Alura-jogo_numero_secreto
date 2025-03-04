let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularMedia(){
    return ( (nota1 + nota2 + nota3 + nota4) / 4);
}


function verificarAprovacao(media) {
    return media >= 5 ? "Aprovado":"Reprovado";
}

let media = calcularMedia();

console.log(verificarAprovacao(media));