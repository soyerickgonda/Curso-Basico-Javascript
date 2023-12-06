/*DESESTRUCTURACION DE ARRAY
La desestructuración en JavaScript es una característica que permite a los desarrolladores descomponer objetos o arrays
en partes más pequeñas para acceder a sus elementos de una manera más concisa.*/

/*Tipos de Desestructuracion:

1)Desestructuracion Básica: permite asignar valores de un objeto o array a variables.

    SINTAXIS: Desestructuracion en 1 linea
        const [valor1,valor2,valor3] = [elemento1,elemento2,elemento3]          //Array

        const {key1,key2,key3} = {key1:value1, key2:value2, key3:value3}        //Object

    SINTAXIS: Desestructuracion en 2 linea
        let array = [elemento1,elemento2,elemento3, ..., elementoN];        //Array
        let [valor1,valor2,valor3, ..., valorN] = array;

        const objeto = {key1:value1, key2:value2, key3:value3};            //Object
        const {key1,key2,key3} = objeto;                                    

::Nota:: las 2 sinxtaxis es casi lo mismo, lo unica diferencia es la cantidad de lineas de codigo que se emplea*/

/*ejm 1:
desestructuracion de array en 1 linea:*/
const [uno,dos] = ['pera','platano','fresa'];
console.log(uno); //pera
console.log(dos); //platano

//desestructuracion de objeto en 2 linea: 
const frutas = {fruta1 : 'pera',fruta2 : 'platano',fruta3 : 'piña'}
const {fruta1,fruta2,fruta3} = frutas;
console.log(fruta1); //pera
console.log(fruta2); //platano
console.log(fruta3); //piña

//desestructuracion de objeto en 1 linea: 
const {name, lastName} = {name:'Alessandro', lastName:'Gonda'};
console.log(name); //Alessandro
console.log(lastName); //Gonda

/* 
2) Desestructuracion con Spread Operator(...)
El 'spread' se utiliza para descomponer elementos de un array u objeto en elementos individuales. Incluso se podrian
combinar estos elementos con otro 'array' u 'object' 

    SINTAXIS:
        let [variable1, variable2, ...resto] = array;           // Array

        let { propiedad1, propiedad2, ...resto } = objeto;      // Objeto
*/

//ejm 1:
const [primero, segundo, ...restante] = [1,2,3,4,5,6,7,8,9,0];
console.log(primero);   // 1
console.log(segundo);   // 2
console.log(restante);  // [3,4,5,6,7,8,9,0]

//ejm 2:
const {country, ...resto} = {name:'Erick',lastName:'Gonda',age:30,country:'Canada'};
console.log(country);   //Canada
console.log(resto);     //{ name: 'Erick', lastName: 'Gonda', age: 30 }

//ejm 3: usamos el spread para combinar los valores del objeto 'persona' con los de 'nuevaPersona'
const persona = { nombre: 'Ana', edad: 25};
const nuevaPersona = {...persona, ciudad: 'Barcelona', profesion: 'Diseñadora' };
console.log(nuevaPersona); //{ nombre: 'Ana', edad: 25, ciudad: 'Barcelona', profesion: 'Diseñadora' }
  

/* 
3) Desestructuracion con Rest Operator(...)
El 'rest' se utiliza para asignar el resto de los elementos de un array o las propiedades no especificadas de un objeto 
a una variable.

    SINTAXIS:
        let [variable1, variable2, ...resto] = array;       // Array

        let { propiedad1, propiedad2, ...resto } = objeto;  // Objeto */

//ejm 1:
let numbers = [1, 2, 3, 4, 5];
let [a, b, ...rest] = numbers;
console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // [3, 4, 5]

//ejm 2:
let person = { user: 'Valentino', age: 1, city: 'New York' };
let { user, ...info } = person;
console.log(user); // 'John'
console.log(info); // { age: 1, city: 'New York' }

//ejm 3: usamos '...rest' en el parametro de una funcion
function funcionRest(...params) { //usamos '..rest' cuando no sabemos con exactitud la cantidad de parametros a usar para nuestra funcion
    console.log(params)
}
funcionRest('Alessandro',1,true,[3,2,1],{nickName: 'frejolito'});