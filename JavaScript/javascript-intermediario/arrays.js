const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

console.log(alunasGama[2]) //"Estela"


// Operador spread (...)

const alunasXp = [...alunasGama, "Simara"]

console.log(alunasXp)


// Métodos de iteração 

for (let i = 0; i < alunasXp.length; i ++) {
    console.log(alunasXp[i])
}

//Método Map
alunasXp.map(aluna => console.log(aluna))

//Método Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)

console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)

//Método Reduce
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
})

console.log(soma) //70
