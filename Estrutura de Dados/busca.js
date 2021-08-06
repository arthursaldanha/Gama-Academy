// Busca Sequencial
let valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120];

function busca(num) {
   for(i = 0; i < valores.length; i++) {
      if (num === valores[i]) {
         return i;
      }
   }
   return -1;
}

function buscaBin(num) {
   let inicio, meio, fim;
   let passos = 0;
   inicio = 0;
   fim = valores.length - 1;
   
   while (inicio <= fim) {
      meio = parseInt((inicio + fim) / 2);
      passos += 1;
      if (num == valores[meio]) {
         console.log("Achei em " + passos + " passos");
         return meio;
      } else {
         if (num > valores[meio]) {
            inicio = meio + 1;
         } else {
            fim = meio -1;
         }
      }
   }
   console.log("Não achei em " + passos + " passos");
   return -1
}

// usando a ferramenta de busca
console.log(buscaBin(10));
console.log(buscaBin(60));
console.log(buscaBin(50));