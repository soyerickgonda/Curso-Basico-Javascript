//TAMBIEN FORMAN PARTE DE LA ESTRUCTURA DE CONTROL EN JS
/*
BUCLES EN JAVASCRIPT (while, Do While, For, For in, For off, For Each)

Definicion:
*BUCLE:Es como un "ciclo" en el que se ejecuta una tarea varias veces de manera automatica.
*ITERACIÓN:Es hacer que algo dentro de un programa se repita una y otra vez.
Por lo tanto, cuando usas un bucle, estás realizando iteraciones.
*/

/*WHILE:
Se usa para repetir automaticamente y de manera indefinida un bloque de codigo, siempre que la condicion sea verdadera.
El bucle se detendra cuando la condicion sea false */

//ejm 1:
let numero = 0;
while (numero < 10) {
  numero++;
  if (numero == 6) {
    break; //sale del bucle cuando 'numero' llegue a valer 6(la iteracion se detiene)
  }
  console.log(numero); //12345
}

//ejm 2:
let numero2 = 0;
while (numero2 < 10) {
  numero2++;
  if (numero2 === 5) {
    continue; //salta la iteracion cuando 'number' es igual a 5
  }
  console.log(numero2); //1234678910
}

//ejm 3: Se solicita al usuario ingresar el valor correcto para que el bucle finalice
/*
var color = "";
while (color != "rojo") {
  //mientras color tengo un valor distinto a 'rojo' el bucle seguira ejecuntando el prompt
  color = prompt("dame un color (escribe rojo para salir)", "");
  console.log(color);
}*/

/*Recuerda:
El 'break' se utiliza para detener el bucle antes de que se complete su iteración normal.
El 'continue' se utiliza dentro de una estructura de bucle para saltar la iteración actual y pasar a la siguiente.*/

/*Bucle infinito
Por lo general un bucle se ejecuta de manera infinita cuando la condicion esta mal planteada

ejm:
    var num = 0;
    while(num < 100){
      num = parseInt(Math.random() * 100); //
      num ++;
    }

En este ejemplo, la condicion while dice que mientras la variable 'num' sea '<' a '100', debera ejecutar lo que esta dentro de  {}
-num = parseInt(Math.random() * 100): el valor de 'num' va a ser igual a un numero random (que sera entero y estara en el rango de 0 a 100).
Aca hay un problema pues imagines que random asigne valores siempre menores a 100, el bucle seguira ejecutandose infinitamente.
La unica manera de que el bucle se detenga es que el valor de 'num' sea igual o mayor a 100, pero dificilmente random asignara esos valores.
-num ++: luego que 'num' coge el valor que random le dio, este se incrementara en 1.

Para este ejemplo , la manera correcta de resolver el ejercicio y evitar que se genere un bucle infinito seria de la siguiente manera:*/
//ejm:
var nume = 0;
var i = 0;
while (i < 10) {
  nume = parseInt(Math.random() * 100);
  console.log(`nume vale ${nume} en la iteracion ${i++}`);
}

/*::interpretacion del codigo::
-var nume = 0: esta variable almacenara el valor de 'num' durante cada iteracion
-var i = 0: esta variable representara cada iteracion mientras que (i < 10).
-while (i < 10): mientras que i<10, se ejecutara el codigo dentro de las llaves {}
-nume = parseInt(Math.random() * 100): el valor de 'nume' va a ser igual a un numero random (que sera entero y estara en el rango de 0 a 100).
-console.log(`nume vale ${nume} en la iteracion ${i++}`): mostrara el valor de 'nume' en cada iteracion y el numero de iteracion que el bucle va ejecutando
*/

/*DO WHILE:
Este bucle se ejecuta al menos 1 vez antes de evaluar si la condicion 'while()' es o no verdadera. Luego de
ejecutarse recien evalua la condicion y si esta es verdadera volvera a ejecutar el bloque de codigo y si
es falsa el bucle se detiene.*/

//ejemplo 1:
let contador = 2;
do {
  console.log(contador);
  contador++; //234... el 'do' ejecuta 3 veces antes de validar la condicion
} while (contador < 5);

//ejemplo 2:
/*
let numerox;
do {
  numerox = prompt("Ingresa un número: (debe ser mayor a 5 para salir del bucle)",""); //el usuario ingresara un n° mayor a 5
} while (numerox <= 5); //Si el usuario ingresa un número menor o igual a 5, el bucle se repetirá hasta que se ingrese un número válido.

console.log("Número ingresado válido:", numerox); //mostrara el numero mayor a 5 ingresado por el usuario
*/

/*FOR:
Se usa para ejecutar un bloque de codigo las veces que nosotros decidamos mientras se cumpla una condicion.
La cantidad de iteracion lo controlaremos utilizando un contador y una condicion que determine cuando detener el Bucle.*/

//ejm 1: INCREMENTO
let x = 5;
for (let i = 0; i <= x; i++) {
  console.log(i); //012345
}

//ejm 2: DECREMENTO
let y = 0;
for (let i = 5; i >= y; i--) {
  console.log(i); //543210
}

//OJO con los siguientes ejemplos, no son los mismos aunque parecen
//ejem 3: la variable 'number' incrementara su valor de 2 en 2 hasta iterar 20 veces
let number = 0;
for (let i = 0; i < 20; i++) {
    number = number + 2;
    console.log(number); //2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40
}

//ejm 4: La variable 'number1' incrementara su valor de 2 en 2 hasta que su valor sea igual a 20.
let number1 = 0;
for (let i = 0; number1 < 20; i++) {
    number1 = number1 + 2;
    console.log(number1); //2 4 6 8 10 12 14 16 18 20
}

//ejm 5: Evaluaremos si los valores de un array son todos iguales
let numeros = [2,2,2];
let todosiguales = true;

for(i=1; i < numeros.length; i++){
  if(numeros[i] !== numeros[0]){
    todosiguales = false;
    break;
  }
}
if(todosiguales){
console.log(true);
} else {
  console.log(false)
}

//ejm 6: Ejercicio en donde inviertas una palabra (ejm: 'HOLA' --> 'ALOH')
let palabra = 'mamá';
let palabraInvertida = ''; //aca se guardara la palabra 'mama' pero al reves 'ámam'

for(i=palabra.length -1; i>=0; i--){
// console.log(palabra[i]);
palabraInvertida = palabraInvertida + palabra[i];
}
console.log(palabraInvertida);

/*FOR IN:
En un Array: Recorre los indices (ó posiciones) de los elementos que lo conforman.
En un Objeto: Recorre las propiedades de un objeto e itera sobre las claves de esta (recuerda que un objeto esta formado por pares de clave:valor)*/

//ejm 1:'for in' en un array
let libros = [
  "Harry Potter",
  "El Señor de los Anillos",
  "Cien Años de Soledad",
];

for (let indice in libros) {
  console.log(indice); // 0 1 2...muestra el indice de cada uno de los libros
}

//ejm 2: de 'for in' en un object
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

for (usuario in persona) {
  console.log(usuario); //nombre, edad, ciudad
}

//FOR OF: Recorre los elementos de un array o cadena de texto y devuelve el valor de cada elemento.
//ejm 1:
let libros2 = [
  "Harry Potter",
  "El Señor de los Anillos",
  "Cien Años de Soledad",
];

for (let libro of libros2) {
  console.log(libro); //Harry Potter, El Señor de los Anillos, Cien Años de Soledad...muestra el valor de cada uno de los indices
}
//Nota: 'for of' no se usa para Object ya que solo recorre valores de estructuras de datos iterables como el array o string


//ejm 2:
let numeros3 = [1, 2, 3, 4, 5, 6];
for(numeroPar of numeros3){
    if(numeroPar % 2 === 0){
        console.log(numeroPar)
    }
 }


















