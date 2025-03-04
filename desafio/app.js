let titulo = window.document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

const exibirConsole = () =>{
    console.log("O botão foi clicado!");
};

const exibirAlerta = function () {
    alert('Eu amo JS');
}

function exibirPrompt() {
   let nomeCidade = prompt("Cite o nome de uma cidade do Brasil: ");
   alert(`Estive em ${nomeCidade} e lembrei de você`);
}

const exibirSoma = () => {
   let valorA = parseInt(prompt("Informe um valor inteiro para soma:"));
   let valorB = parseInt(prompt("Informe mais outro valor inteiro para soma:"));
   let resultadoSoma =  valorA + valorB;
   alert(`O resultado da soma foi de ${resultadoSoma}`);
}