const filmes = [
    {
        id: 1,
        titulo: "Dilema das Redes",
        descricao: "Um documentário sobre tecnologia.",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Us",
        descricao: "Um filme de terror amedrontador.",
        duracao: 155
    },
    {
        id: 3,
        titulo: "Run",
        descricao: "Um filme de suspense bem legal",
        duracao: 115
    },
]

const [{id, titulo, descricao, duracao}] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.descricao))