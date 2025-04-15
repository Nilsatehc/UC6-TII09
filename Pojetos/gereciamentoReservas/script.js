let reservas = [];

function addReserva() {

    let nome = document.getElementById("name").value;
    let data = document.getElementById("date").value;
    console.log(`Nova reserva adicionada para ${nome} no dia ${data}`);
    if (nome === "" || data === "") {
        alert("Preencha todos os campos");
        return;
    }

    let novaReserva = { nome, data };
    reservas.push(novaReserva);

    document.getElementById("name").value = "";
    document.getElementById("date").value = "";

    attListaReserva();
    
}

function removerReserva(index) {
    reservas.splice(index, 1);
    attListaReserva();
}

function attListaReserva() {
    let lista = document.getElementById("listaReservas");
    lista.innerHTML = "";

    reservas.forEach((reserva, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${reserva.nome}, ${reserva.data} <button class="remover" onclick="removerReserva(${index})">X</button>`;
        lista.appendChild(li);
    });
}