function saudacao(nome, lugar) {
    console.log("Olá, " + nome + ", boa noite!");
    console.log("Seja Bem Vindos ao " + lugar );
}

// saudacao("Aecio", "Senac");
// saudacao("Adenilsa", "FreeFire");
// saudacao("Carlos", "TII09");
// saudacao("Lucas", "Aula de Sábado");

function soma(a, b) {
    return a + b;
}

// let resultado = soma(5, 10);
// console.log(resultado); // exibe 15
// console.log(soma(3, 4)); // exibe 7
// console.log(soma(2, 2) * 5); // exibe 20

//// Escopo local de funções

function teste() {
    let mensagem = "Olá";
    console.log(mensagem);
}

// teste();
// console.log(mensagem); // Erro de escpo