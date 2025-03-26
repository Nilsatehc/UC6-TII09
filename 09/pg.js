//// OBJETOS: CONTÉM MÉTODOS E ATRIBUTOS

// OBJETO LITERAL
let carroA = { marca: "Toyota", modelo: "Corolla" };

let carroB = { 
    marca: "Fiat", 
    modelo: "Uno",
    ano: 2009,
    ligar: function() {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
};

console.log(carroA.marca); // Toyota
console.log(carroB.modelo); // Uno
console.log(carroB.modelo); // Uno