let estacionamento = [
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"]
]

function estacionarCarro(linha, coluna, placa) {
    if(estacionamento[linha][coluna] === "Vazio") {
        estacionamento[linha][coluna] = placa;
    } else {
        console.log(`ESSA VAGA ESTÁ OCUPADA! VEÍCULO: ${estacionamento[linha][coluna]}`);
    }
}

function removerCarro(linha, coluna) {
    // remove um carro se a vaga estiver ocupada
}

function exibirEstacionamento() {
    console.log(estacionamento);
}

exibirEstacionamento();
estacionarCarro(1, 1, "ZBX9887");
estacionarCarro(2, 1, "ABT0801");
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");