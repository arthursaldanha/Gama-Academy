"use strict";
//Boolean
const contaPaga = false;
// Number
const idade = 18;
const valorDaConta = 213.76;
// String
const nome = 'Arthur Saldanha';
const idades = [21, 22, 23, 24, 25, 26, 27, 28, 29];
const idades2 = [21, 22, 23, 24, 25, 26,];
// Tuples
let jogadores;
jogadores = ["Arthur", "Caique", "Cledyvan"];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
const retornoDaApi = [123, "Arthur", false];
const retornoDaApi1 = [456, "Saldanha", true];
const retornoDaApi2 = {
// ... ... ...
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
const u = undefined;
const n = null;
// Object
function criar(objeto) {
    // ... ...
}
criar({
    Nome: "Arthur",
});
