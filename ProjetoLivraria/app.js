
// pegar o input
// Se for Sim, exibe as categorias disponíveis, pergunta qual categoria ela escolhe
// Se for não, exibe todos os livros em ordem crescente de quantidade de páginas

const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question("Deseja buscar um livro? S/N")

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log("Essas são as categorias disponíveis:")
    console.log("Produtividade", "/História brasileira", "/Americas", "/Tecnologia", "/Estilo de vida")

    const entradaCategoria = readline.question("Qual categoria voce escolhe?")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são os livros disponíveis:")
    console.table(livrosOrdenados)
}