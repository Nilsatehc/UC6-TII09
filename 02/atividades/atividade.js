let numero = Number(prompt("Digite um número: "));

if (isNaN(numero) === true) {
    alert("Digite um número válido!");
} else if (numero % 2 === 0) {
    alert("par");
} else {
    alert("impar");
}