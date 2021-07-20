"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia,
            this.mes = mes,
            this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2021);
console.log(data.dia);
var data2 = new Data(1, 1);
// Forma resumida
var Datas = /** @class */ (function () {
    function Datas(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Datas;
}());
var datas = new Date(1, 1, 2021);
console.log(data.dia);
var datas2 = new Datas(1, 1);
