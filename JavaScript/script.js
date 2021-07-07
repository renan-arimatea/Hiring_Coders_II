var myName = "Renan"

console.log(myName)

let language = "JavaScript"

const pattern = "ECMAScript"


//dentro do escopo

{
    var age = 32
}

console.log(age)

//fora do escopo

{
    let age = 32

    console.log(age)
}

var myName = "Renan"  //string

var age = 12 //number

var height = 1.67 //number

null
undefined

var isStudent = false //boolean

// objeto

var person = {
    "name": 'Renan',
    "age": 32
}

//array

var students = ["Renan", "Marcia", "Ariel"]

//function

function sum(){
    return 5 + 2
}

// operador typeof

console.log(typeof 32)

console.log(typeof "age")
