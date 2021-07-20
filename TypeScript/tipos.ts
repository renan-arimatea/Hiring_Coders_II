// Boolean
const contaPaga: boolean = false

// Number
const idade: number = 23
const avaliacao: number = 4.5

// String
const nome: string = 'Renan Arimatea'

// Array
const idades: number [] = [23, 28, 45]
const idades2: Array <number> = [23, 28, 45]

// Tuple
let jogadores: [string, number, boolean]
jogadores = ['Renan', 5, true]

// Enum
enum statusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado

// Any
const retornoDaAPI: any [] = [123, 'Renan', false]
const retornoDaAPI2: any = {
    //...
}

// Void
function printarNaTela (msg: string): void {
    console.log (msg)
}

// Null e Undefined
const u: undefined = undefined
const n: null = null

// Object
function criar (Object: object) {
    //...
}
criar({
    propriedade: 1,
})
// criar('Renan') // Dá erro

// Never
function loopInfinito(): never {
    while (true) { }
}

function erro (mensagem: string) : never {
    throw new Error(mensagem)
}

function falha() {
    return erro ('Algo falhou')
}

// Union Types
function exibirNota (nota: number | string) {
    console.log('A nota é ' + nota)
}

exibirNota('10')
exibirNota(10)

// Alias
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}

const funcionarios: Funcionario[] = [{
    nome: 'Renan',
    sobrenome: 'Arimatea',
    dataNascimento: new Date()
},
{
    nome: 'João',
    sobrenome: 'Paulo',
    dataNascimento: new Date()
}]

function tratarFuncionarios(funcionarios: Funcionario []) {
    for (let funcionario of funcionarios) {
        console.log ('Nome do funcionário: ', funcionario.nome)
    }
}
