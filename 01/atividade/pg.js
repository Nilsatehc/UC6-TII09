let totalDeNotas = parseFloat(prompt("Quantas notas você quer tirar a média?"));
let soma = 0;

for (i = 1; i <= totalDeNotas; i++) {
    let nota = parseFloat(prompt(`Informe a nota: ${i}`));
    soma = soma + nota;
};

let media = soma / totalDeNotas;

document.getElementById("resultado").innerText = "Sua média é: " + media;