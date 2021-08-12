//Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 18;
const valorDaConta: number = 213.76;

// String
const nome: string = 'Arthur Saldanha';

const idades: number[] = [21, 22, 23, 24, 25, 26, 27, 28, 29];
const idades2: Array<number> = [21, 22, 23, 24, 25, 26,];

// Tuples
let jogadores: [string, string, string];
jogadores = ["Arthur", "Caique", "Cledyvan"];

// Enum
enum StatusAprovacao {
   Aprovado = "001",
   Pendente = "002",
   Rejeitado = "003",
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaApi: any[] = [123, "Arthur", false];
const retornoDaApi1: Array<any> = [456, "Saldanha", true];
const retornoDaApi2: any = {
   // ... ... ...
}

// Void
function printarNaTela(msg: string) {
   console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
   // ... ...
}
criar({
   Nome: "Arthur",
})