

//class com todos os dados presentes
class Funcionario {
    constructor(nomeCompleto, matricula, anoAdmissao, endereco) {
        this._nomeCompleto = nomeCompleto;
        this._matricula = matricula;
        this._anoAdmissao = anoAdmissao;
        this._endereco = endereco;
    }
//funcões  de salario, tempo de empresa e ponto de registro do funcionario
    receberSalario(valor) {
        return `Salário de R$ ${valor.toFixed(2)} recebido por ${this._nomeCompleto}.`;
    }

    tempoDeEmpresa(anoAtual = new Date().getFullYear()) {
        return `${this._nomeCompleto} está na empresa há ${anoAtual - this._anoAdmissao} anos.`;
    }

    baterPonto() {
        return `Ponto registrado para ${this._nomeCompleto}.`;
    }
}

// Cadastro do Gerente
class Gerente extends Funcionario {
    receberSalario(valor) {
        const bonus = valor * 0.20;
        const total = valor + bonus;
        return `Gerente ${this._nomeCompleto} recebeu R$ ${total.toFixed(2)} (salário + bônus de 20%).`;
    }
 //despesas com autorização da gerencia
    autorizarDespesa(valor) {
        return `Despesa de R$ ${valor.toFixed(2)} autorizada por ${this._nomeCompleto}.`;
    }
}

// dados do funcionario da frente de caixa 
// recebe um salario padronizado

class OperadorDeCaixa extends Funcionario {
    fecharCaixa(totalMovimentado) {
        return `Caixa fechado por ${this._nomeCompleto}. Total movimentado: R$ ${totalMovimentado.toFixed(2)}.`;
    } 
}

//Dados da funcao e dos atributos de estagiarios 

class Estagiario extends Funcionario {
    constructor(nomeCompleto, matricula, anoAdmissao, endereco) {
        super(nomeCompleto, matricula, anoAdmissao, endereco);
        this._atividades = [];
    }
// Valores a receber como estagiario diferente de um operador(a) de caixa
    receberSalario() {
        const bolsa = 1200;
        return `Estagiário ${this._nomeCompleto} recebeu bolsa auxílio de R$ ${bolsa.toFixed(2)}.`;
    }
//atividades feitas por ele e uma lista dessas atividades 
    registrarAtividade(descricao) {
        this._atividades.push(descricao);
        return `Atividade registrada: "${descricao}".`;
    }

    listarAtividades() {
        return this._atividades;
    }
}
// funcionários
const gerente = new Gerente("Luciana Menezes", "007", 2010, "Rua Formosa, 233");
const caixa = new OperadorDeCaixa("Carlos Silva", "001", 2017, "Av. Matarazzo, 46");
const estagiario = new Estagiario("Isis Morais", "009", 2024, "Rua Miller, 555");

//exibir reasultados do cadastro
console.log(gerente.baterPonto(), gerente.tempoDeEmpresa(), gerente.receberSalario(10000), gerente.autorizarDespesa(2500), '\n');
console.log(caixa.baterPonto(), caixa.tempoDeEmpresa(), caixa.receberSalario(3500), caixa.fecharCaixa(18500), '\n');
console.log(
  estagiario.baterPonto(), 
  estagiario.tempoDeEmpresa(), 
  estagiario.receberSalario(), 
  estagiario.registrarAtividade("Organizou arquivos"), 
  estagiario.registrarAtividade("Auxiliou no suporte"), 
  "Atividades:", estagiario.listarAtividades()
);