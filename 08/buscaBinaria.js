var prompt = require('prompt-sync')();
let numeros = [10, 20, 50, 70, 85];

//// Busca nativa em JavaScript
//console.log(numeros.indexOf(70)); // Retorna 3
//console.log(numeros.indexOf(100)); // Retorna -1

function buscaBinaria(array, valor) {
    let meio = Math.floor(array.length / 2);

    if(array[meio] === valor) {
        return meio;
    } else {
        return -1;
    }
}

console.log(buscaBinaria(numeros, 50));
