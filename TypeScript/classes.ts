class Data {
   public dia: number;
   mes: number;
   ano: number;

   constructor(dia: number, mes: number, ano: number = 2002) {
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
   }
}

/* 
class Data {
   constructor(public dia: number, public mes: number, public ano: number) {

   }
}

Funciona da mesma forma que o formato anterior
*/

const data = new Data(15, 7, 2002);
const data2 = new Data(5, 1)