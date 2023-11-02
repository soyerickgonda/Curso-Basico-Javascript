//Spread Operator (Operador de Propagación)
/*Es un operador de Javascript que se utilizar para descomponer Objetos o Arrays en elementos individuales.
Ejemplos de uso:*/
//1)Para copiar un Array
const arrayOriginal = [1,2,3,4,5];
const arrayCopia = [...arrayOriginal];
console.log(arrayCopia); //(5) [1, 2, 3, 4, 5]

//2)Para combinar Arrays
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinarArray = [...array1, ...array2];
console.log(combinarArray); //(6) [1, 2, 3, 4, 5, 6]

const array3 = [1,2,3];
const array4 = [4,5,6];
array3.push(array4);
console.log(array3); //(4) [1, 2, 3, Array(3)]

/*Recuerda:
La diferencia entre unir 2 o más Arrays con el 'spread operator' y el metodo push() es la siguiente:
-Usar el 'spread operator' nos permite que los valores combinados se almacenen en un nuevo array, de esta manera 
NO ALTERA los valores de los array originales.
-Usar push() agrega los elementos de un array dentro de otro array existente; con ello estariamos ALTERANDO los 
valores de uno de los arrays originales. (como el ejm de arriba)
 */

/*3)Para pasar argumentos a una Funcion
Podemos usar el 'spread operator (...)' para pasar una variable de numeros como argumentos a una funcion*/
function suma(...numeros) {
    return numeros.reduce(((total,elemento)=>total + elemento),0);
}
let sumaTotal = suma(1,2,3,4,5);
console.log(sumaTotal); //15

//4)Para crear nuevos objetos
const objeto1 = {a:1, b:2};
const objeto2 = {b:3, c:4};
const objetosCombinados = {...objeto1, ...objeto2};
console.log(objetosCombinados); //{a: 1, b: 3, c: 4}

//crearemos un nuevo objeto llamado 'otraPersona' en base al objeto 'persona'
let persona = {
    nombre : "Pedro",
    apellido : "Suarez"
}

let otraPersona = {
    ...persona,     //traemos las propiedades de este objeto
    ocupacion : "programador",
}

console.log(otraPersona); //{nombre: 'Pedro', apellido: 'Suarez', ocupacion: 'programador'}

