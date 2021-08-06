let elementos = [];
let topo = -1;
const max = 10;

function push(num) {
   if (topo < max) {
      topo += 1;
      elementos[topo] = num
   } else {
      console.log("A pilha está cheia!");
   }
}

function estaVazia() {
   return topo === -1;
}

function pop() {
   if (topo != -1) {
      let num = elementos[topo];
      topo -= 1;
      return num;
   } else {
      console.log("A pilha está vazia!");
   }
}

let numDecimal = 10;
let resto;

console.log("Hora de Empilhar...");
while (numDecimal != 0) {
   resto = parseInt(numDecimal % 2);
   push(resto);
   console.log(resto);
   numDecimal = parseInt(numDecimal / 2);
}


console.log("Desempilhando tudo...");
while (!estaVazia()) {
   console.log(pop());
}