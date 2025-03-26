class Pessoa {
    constructor(nome, altura, peso, anoNascimento) {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.anoNascimento = anoNascimento;
        this.vivo = true;
    }

    andar() {
        console.log(`${this.nome} está andando.`);
    }

    pular() {
        console.log(`${this.nome} pulou!`);
    }

    mostrarIdade(anoAtual) {
        const idade = anoAtual - this.anoNascimento;
        console.log(`${this.nome} tem ${idade} anos.`);
    }
}



let pessoa1 = new Pessoa("minoro", 1.75, 70, 1990);
pessoa1.andar();
pessoa1.pular();
pessoa1.mostrarIdade(2025);

