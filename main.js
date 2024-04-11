//  1- Desestructuring

// Extrae la empleada Ana con todos sus datos personales:
// const empleados = [
//     { name: "Luis", email: "Luis@gmail.com" },
//     { name: "Ana", email: "Ana@gmail.com" },
//     { name: "Andrea", email: "Andrea@gmail.com" },
//   ];

//   const [,name] = empleados
//   console.log(name);

// // Extrae el email del empleado Luis --> Luis@gmail.com
// const [luis] = empleados
// // console.log(luis);
// const {email} = luis
// console.log(email);

// Dado el siguiente objeto:
const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}
// Cambia el nombre de la propiedad “name” por “nombre
const { name: nombre } = pokemon
console.log(nombre);

// Extrae el nombre del Pokemon
const { name } = pokemon
console.log(name);

// Extrae el tipo de Pokemon que es 
const { sunombre, type } = pokemon
console.log(type);

// Extrae el movimiento "Tackle"
const { moves } = pokemon
// console.log(moves);
const [, secondMove] = moves
console.log(secondMove);

// 2- Ejercicios spread/rest

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const margearPokemons = { ...pikachu, ...pokemon }
console.log(margearPokemons);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(a, b, c, d, e) {
    return a + b + c + d + e;
};
const numbers = [6, 8, 2, 3, 1]
console.log(sumEveryOther(...numbers));

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

// addOnlyNums(1, 'perro', 2, 4); //7

// Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

// countTheArgs('gato', 'perro'); //2
// countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const array1 = [1,2,3,4]
const array2 =["hola",5,"adiós",6]

function combineTwoArrays(a,b) {
    return array1 + array2;
}
console.log(...combineTwoArrays(array1,array2));