class Funcionario {
    nomeCompleto;
    numeroMatricula;
    anoAdmissao;
    endereco;
    salario;

    constructor(nomeCompleto, numeroMatricula, anoAdmissao, endereco) {
        this.nomeCompleto = nomeCompleto;
        this.numeroMatricula = numeroMatricula;
        this.anoAdmissao = anoAdmissao;
        this.endereco = endereco;
    }

    receberSalario(valor) {
        this.salario = valor;
        console.log(`${this.nomeCompleto} recebeu R$ ${valor} de salário!`)
    }

    verificarTempoEmpresa(anoAtual) {
        let tempoDeEmpresa = anoAtual - this.anoAdmissao;
        console.log(`${this.nomeCompleto} tem ${tempoDeEmpresa} anos de empresa!`)
    }

    baterPonto(hora) {
        console.log(`${this.nomeCompleto} bateu o ponto às ${hora}h. Ponto registrado.`)
    }

    despesaFuncionario(despesa) {
        let limiteDespesa = 200;
        limiteDespesa = limiteDespesa - despesa;
        if (limiteDespesa < 0) {
            console.log(`${this.nomeCompleto} não tem saldo suficiente para esta despesa.`)
            return;
        }
        console.log(`${this.nomeCompleto} usou ${despesa} reais para despesas. Saldo atual: ${limiteDespesa} reais`)
    }
}

// let f1 = new Funcionario("Lucas M.", "1234", "2020", "Rua da Alegria, 123")
// f1.receberSalario(5600)
// f1.verificarTempoEmpresa(2025)
// f1.baterPonto(15)

class Gerente extends Funcionario {
    receberSalario(valor) {
        this.salario = valor * 1.2
        console.log(`${this.nomeCompleto} recebeu R$ ${this.salario} de salário, com 20% de bônus por ser Gerente!`)
    }

    despesaFuncionario(despesa) {
        console.log(`${this.nomeCompleto} usou ${despesa} reais para despesas.`)
    }
}

// let g1 = new Gerente("Gabriel", "1234", "2020", "Rua da Alegria, 123")
// g1.receberSalario(2100)

// g1.despesaFuncionario(201);

class OperadorCaixa extends Funcionario {
    comissao;
    constructor(nomeCompleto, numeroMatricula, anoAdmissao, endereco, comissao) {
        super(nomeCompleto, numeroMatricula, anoAdmissao, endereco)
        this.comissao = comissao;
    }

    fechamentoCaixa(movimentoDoDia) {
        console.log(`${this.nomeCompleto} registrou que o movimento do caixa de hoje foi: R$ ${movimentoDoDia}.`)
    }
}

// let c1 = new OperadorCaixa("Nilsa", "1234", "2020", "Rua da Alegria, 123");
// c1.fechamentoCaixa(5020);

class Estagiario extends Funcionario {
    receberSalario() {
        let salario = 1200
        console.log(`${this.nomeCompleto} recebeu R$ ${salario} de bolsa!`)
    }

    registrarAtividade(descricao) {
        console.log(`Parabéns ${this.nomeCompleto}! Sua atividade de hoje foi registrada com sucesso! Ela ficou assim: ${descricao}`)
    }
}

let e1 = new Estagiario("Douglas", "1234", "2020", "Rua da Alegria, 123");
e1.registrarAtividade("Estudei JavaScript")
e1.receberSalario();