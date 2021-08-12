//Boolean
var contaPaga = false;
// Number
var idade = 18;
var valorDaConta = 213.76;
// String
var nome = 'Arthur Saldanha';
var idades = [21, 22, 23, 24, 25, 26, 27, 28, 29];
var idades2 = [21, 22, 23, 24, 25, 26,];
// Tuples
var jogadores;
jogadores = ["Arthur", "Caique", "Cledyvan"];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaApi = [123, "Arthur", false];
var retornoDaApi1 = [456, "Saldanha", true];
var retornoDaApi2 = {
// ... ... ...
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ... ...
}
criar({
    Nome: "Arthur"
});
// Never: não aceita nenhum tipo, utilizada principalmente para funções que nunca devem retornar algo (funções sem retorno retornam undefined, por isso é usado void) como loops infinitos ou exceções.
function loopInfinito() {
    while (true) { }
}
// Union Types
var valor = 3.5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota("10");
var alunos = [{
        nome: "Arthut",
        sobrenome: "Saldanha",
        dataDeNascimento: new Date()
    }, {
        nome: "Caique",
        sobrenome: "Calazans",
        dataDeNascimento: new Date()
    }, {
        nome: "Cledyvan",
        sobrenome: "Siqueira",
        dataDeNascimento: new Date()
    }];
function tratarAlunos(alunos) {
    for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
        var aluno = alunos_1[_i];
        console.log("Nome do aluno: ", aluno.nome);
    }
}
