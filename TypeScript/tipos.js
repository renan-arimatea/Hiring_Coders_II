"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Renan Arimatea';
// Array
var idades = [23, 28, 45];
var idades2 = [23, 28, 45];
// Tuple
var jogadores;
jogadores = ['Renan', 5, true];
// Enum
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pendente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Renan', false];
var retornoDaAPI2 = {
//...
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(Object) {
    //...
}
criar({
    propriedade: 1,
});
// criar('Renan') // Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
function exibirNota(nota) {
    console.log('A nota é ' + nota);
}
exibirNota('10');
exibirNota(10);
var funcionarios = [{
        nome: 'Renan',
        sobrenome: 'Arimatea',
        dataNascimento: new Date()
    },
    {
        nome: 'João',
        sobrenome: 'Paulo',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
