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

const data = new Data(15, 7, 2002);
const data2 = new Data(5, 1)