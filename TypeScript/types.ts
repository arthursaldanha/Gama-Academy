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

// Never: não aceita nenhum tipo, utilizada principalmente para funções que nunca devem retornar algo (funções sem retorno retornam undefined, por isso é usado void) como loops infinitos ou exceções.
function loopInfinito() {
   while (true) {  }
}

// Union Types
let valor: number | string = 3.5;
function exibirNota(nota: number | string) {
   console.log(`A nota é ${nota}`);
}

exibirNota("10")

// Alias
type Aluno = {
   nome: string;
   sobrenome: string;
   dataDeNascimento: Date;
}

const alunos: Aluno[] = [{
   nome: "Arthut",
   sobrenome: "Saldanha",
   dataDeNascimento: new Date(),
}, {
   nome: "Caique",
   sobrenome: "Calazans",
   dataDeNascimento: new Date(),
}, {
   nome: "Cledyvan",
   sobrenome: "Siqueira",
   dataDeNascimento: new Date(),
}]

function tratarAlunos(alunos: Aluno[]) {
   for (const aluno of alunos) {
      console.log("Nome do aluno: ", aluno.nome);
   }
}

// Valores Opcionais
type Contato = {
   nome: string,
   telefone1: string,
   telefone2?: string,
}

const contato: Contato = {
   nome: "Arthur",
   telefone1: "79 98116-9065"
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
// (<number>minhaIdade).toString();

const input = document.querySelector("#numero1") as HTMLInputElement;
// const input = <HTMLInputElement>document.querySelector("#numero1");
console.log(input.value);