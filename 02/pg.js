let x;
const GRAVIDADE_TERRA = 9.8;
const PI = 3.14;
const ANO_NASCIMENTO = 1999;

// Tipos de Dados
// string, number, boolean, undefined, null
let texto = "Novo Texto"; // string
let numero = 12345; // number
let temAulaHoje = true; // boolean
let elementoX;
let buscaValorNoBancoDeDados = null;

console.log(typeof numero); // number
console.log(typeof texto); // string

// Teste:
let alturaEmMetros = 1.82;
let estaChovendo = true;

// Operadores Aritméticos
// + - * / %
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);
console.log("Resto da divisão:", num1 % num2);
console.log("-----------------------------------");

// Operadores Lógicos
// && (AND) || (OU) || ! (NOT)
let tenhoCarro = true;
let tenhoGrana = true;
let tenhoTempo = false;

if (tenhoCarro && tenhoGrana && !tenhoTempo) {
    console.log("Posso ir ao trabalho de carro");
}

if (tenhoCarro && !tenhoGrana && tenhoTempo) {
    console.log("Preciso lavar meu próprio carro");
}

if (!tenhoCarro && tenhoGrana && tenhoTempo) {
    console.log("Vou viajar de ônibus");
}

if (tenhoCarro && tenhoGrana && tenhoTempo) {
    console.log("Posso viajar de carro");
}

let novoTexto = "10.3";

let inteiroDoTexto = parseInt(novoTexto);
console.log(inteiroDoTexto)

// conversão de dados do prompt
let idadeUsuario = prompt("Informe sua idade ");
console.log(typeof idadeUsuario); // string

let peso = Number(prompt("Informe seu peso"));
console.log(typeof peso); // number