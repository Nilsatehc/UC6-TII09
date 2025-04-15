let elementosVagas = document.querySelectorAll(".vaga");
let infoElementos = document.querySelectorAll(".resumo div");
let vagas = [null, null, null, null, null, null, null, null, null, null];
let totalHoras = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let resultadoTexto = document.getElementById("resultado");
let totalizar = document.getElementById("totalizar");
let totalCarros = 0;

elementosVagas.forEach((vaga, i) => {
    vaga.addEventListener("click", () => gerenciarVaga(i));
});

function gerenciarVaga(numeroDaVaga) {
    let hora = parseInt(prompt("Informe a hora (somente número inteiro):"));

    if(isNaN(hora) || hora < 0 || hora > 23) {
        alert("Hora inválida");
        return;
    }

    if (vagas[numeroDaVaga] === null) {
        vagas[numeroDaVaga] = hora;
        elementosVagas[numeroDaVaga].classList.add("ocupado");
    } else {
        if (hora < vagas[numeroDaVaga]) {
            alert("A hora de saída é inválida!");
            return;
        }
        totalHoras[numeroDaVaga] += hora - vagas[numeroDaVaga];
        vagas[numeroDaVaga] = null;
        totalCarros++;
        elementosVagas[numeroDaVaga].classList.remove("ocupado");
    }
    atualizarInfo();
}

function atualizarInfo() {
    for(let i = 0; i < 10; i++) {
        infoElementos[i].innerText = `Vaga ${i + 1}: ${totalHoras[i]}h`
    }
}

totalizar.addEventListener("click", () => {
    let somaDasHoras = totalHoras.reduce((valorAcumulado, valorAtual) => valorAcumulado + valorAtual, 0);

    let faturamento = somaDasHoras * 12;
    resultadoTexto.innerText = `Total de horas: ${somaDasHoras}, Carros Atendidos: ${totalCarros}, Faturamento: R$${faturamento},00`;
}
)