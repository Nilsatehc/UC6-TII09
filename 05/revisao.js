// Declaraçaõ de Arrays
let numeros = [10, 20, 50, 30, 40];
let listaVazia = [];
let frutas = new Array("Maçã", "Banana", "Laranja");

// Acessando e modificando Arrays
console.log(numeros[1]); // saída: 20
numeros[2] = 70;
console.log(numeros); // [10, 20, 70, 30, 40]

// Manipulando Arrays
numeros.push(50); // Adiciona ao final
numeros.unshift(5); // Adiciona ao início
numeros.pop(); // Remove o último
numeros.shift(); // Remove o primeiro
console.log(numeros.indexOf(70)); // 2

// Percorrendo Arrays

for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento ${i} ${numeros[i]}`);
}

for (let x of numeros) {
    console.log(`Elemento ${x}`);
}

numeros.forEach(function (valor, i) {
    console.log(`Elemento ${i}: ${valor}`);
});

// Array de Objetos
// produto = { nome: "Notebook", preco: 4500 } // Objeto

let produtos = [
    { nome: "Notebook", preco: 4500 },
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 200 }
];