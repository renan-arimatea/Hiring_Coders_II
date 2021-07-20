class Data {
    public dia: number;
    mes: number;
    ano: number;

    constructor (dia: number, mes: number, ano: number = 1970) { //1970 é um valor default
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
    }
}

const data = new Data (1, 1, 2021)
console.log (data.dia)

const data2 = new Data (1, 1)


// Forma resumida

class Datas {
   
constructor (public dia: number, public mes: number, public ano: number = 1970) {
 }
}

const datas = new Date (1, 1, 2021)
console.log (data.dia)

const datas2 = new Datas (1, 1)
