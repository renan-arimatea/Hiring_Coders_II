interface Usuario {
    nome: string,
    email: string,
    address?: string
}

function getUser(): Usuario {
    return {
        nome: 'Renan',
        email: 'renan@email.com'
    }
}

function setUser (usuario : Usuario) {
    //...
}
