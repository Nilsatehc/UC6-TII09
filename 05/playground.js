// Criando um arry de produtos:
let produtos = ["Arroz", "Feijão", "Macarrão", "Açúcar"];
console.log("Produtos 1:", produtos);

let clientes = ["Donald", "Mickey", "Pluto"];
console.log("Clientes 1:", clientes);

produtos.push("Café"); // Adiciona ao final da lista
console.log("Produtos 2:", produtos)

produtos.pop(); // Remove do final
console.log("Produtos 3:", produtos);

clientes.push("Margarida");
console.log("Clientes 2:", clientes);

clientes.shift(); // remove do início da lista
console.log(clientes);
produtos.unshift("Sal"); // adiciona no início da lista
console.log(produtos);

let idades = [97, 103, 12]

for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto ${i + 1}: ${produtos[i]}`);
}

clientes.forEach((value) => {
    console.log(`Cliente: ${value}`);
});

idades.forEach((index) => {
    console.log(`Idades: ${index}`);
});

let precos = [25.50, 10.00, 40.75, 5.99];

precos.reverse(); // inverte os valores da lista
precos.sort((z, y) => z - y); // ordena os valores da lista
console.log(precos);

precosAltos = precos.filter(x => x > 25);
console.log(precosAltos);

clientes.push("Margarida");

clientesComM = clientes.find(nome => nome.startsWith("M"));
console.log(clientesComM);