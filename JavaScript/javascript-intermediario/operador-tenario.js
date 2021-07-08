// if... else

function CalculaIdade(idade) {

    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(CalculaIdade(16))



function CalculaIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
}
console.log(CalculaIdade(19))
