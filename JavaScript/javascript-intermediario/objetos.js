const pessoa = {
    nome: "Renan", 
    idade: 25,
    cidade: "Ponta Grossa"
}

// Notação de ponto

console.log(pessoa.nome) //"Renan"

// Notação de colchetes

console.log(pessoa['idade'])  //25

// Como desestruturar objetos

const {nome, idade, cidade} = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)