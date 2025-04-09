class Personagem {
    _nome;
    _forca;
    _pontosDeVida;
    _vivo; // valor booleano

    constructor(nome, forca, vida) {
        this._nome = nome;
        this._forca = forca;
        this._pontosDeVida = vida;
        this._vivo = true;
    }

    atacar(inimigo) {
        console.log(`${this._nome} atacou ${inimigo._nome}!`)
        this.mostrarDados();
        inimigo.tomarDano(this._forca);
    }

    tomarDano(danoRecebido) {
        if (danoRecebido > 0) {
            this._pontosDeVida -= danoRecebido;
            console.log(`${this._nome} sofreu um ataque de ${danoRecebido}!`);
            this.mostrarDados();

            if(this._pontosDeVida <= 0) {
                this.morrer();
            }
        } else {
            console.log("Valor do dano é inválido!");
        }
    }

    recuperarVida(valorARecuperar) {
        if (valorARecuperar > 0 && this._vivo) {
            this._pontosDeVida += valorARecuperar;
            console.log(`${this._nome} recuperou  ${valorARecuperar} de vida!`);
            this.mostrarDados()
        } else {
            console.log("Valor de vida é inválido ou está morto!");
        }
    }

    morrer() {
        this._vivo = false;
        console.log(`${this._nome} morreu!`)
    }

    mostrarDados() {
        console.log(`O ${this._nome} está com ${this._pontosDeVida} de vida e tem ${this._forca} de força`);
    }
}

class Guerreiro extends Personagem {
    // Ao tomar dano, é reduzido em 5 por conta do escudo;
    tomarDano() {
        super.tomarDano();
        console.log("Mas, esse dano foi reduzido em Y");
    }
}

class Mago extends Personagem {
    atacar(inimigo) {
        this._pontosDeVida -= 5;

        if(this._pontosDeVida <= 0) {
            // this.morrer();
            console.log("Vida insuficiente para conjurar um ataque!");
            this._pontosDeVida += 5;
            return;            
        }

        super.atacar(inimigo);
    }
}


// Ao atacar suas flchas serão diminuidas. tendo um total de 100 flechas
class Arqueiro extends Personagem {
    _totalDeFlechas;

    constructor(nome, forca, vida, totalDeFlechas) {
        super(nome, forca, vida);
        this._totalDeFlechas = totalDeFlechas; // Correção: atribuição correta com "="
    }

    mostrarDados() {
        console.log(`O ${this._nome} está com ${this._pontosDeVida} de vida, ${this._forca} de força e ${this._totalDeFlechas} flechas.`);
    }
}

let personagemArqueiro = new Arqueiro("Dorian", 150, 200, 3);
personagemArqueiro.mostrarDados();

let personagem1 = new Mago("Kazuma", 200, 250);
personagem1.tomarDano(50);
