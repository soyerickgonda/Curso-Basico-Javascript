//Recuerda: El while, Do While, For, For in, For off, For Each todos son 'Sentencias de Control de Flujo'
/*
Definicion:
*BUCLE:Es como un "ciclo" en el que se ejecuta una tarea varias veces de manera automatica.
*ITERACIÓN:Es hacer que algo dentro de un programa se repita una y otra vez. 
Por lo tanto, cuando usas un bucle, estás realizando iteraciones. 
*/

/*WHILE:
Evalua primero la condicion y luego ejecuta el codigo. Este bloque de codigo se repetira 
automaticamente mientras la condicion sea verdadera.*/ 

let numero = 0;
while (numero < 10) {
    numero++;
    if(numero == 6){            
        break;      //sale del bucle cuando 'numero' llegue a valer 6(la iteracion se detiene)  
    }
    document.write(numero); //12345
}
document.write("</br>")

let number = 0;
while (number < 10){
    number ++;
    if(number === 5){
        continue;           //salta la iteracion cuando 'number' es igual a 5
    }
    document.write(number); //1234678910
}
/*
Recuerda: 
El 'break' se utiliza para salir inmediatamente del bucle antes de que se complete su iteración normal.
El continue se utiliza dentro de una estructura de bucle para saltar la iteración actual y pasar a la siguiente.*/

/*DO WHILE: 
Ejecuta el codigo al menos una vez antes de verificar la condicion, luego de ello evalua la
condicion y si esta es verdadera volvera a ejecutar el bloque de codigo.*/

//ejemplo 1:
let contador = 2;

do {
    console.log(contador); 
    contador ++;           //234... el 'do' ejecuta 3 veces antes de validar la condicion 
} while (contador < 5);

//ejemplo 2:
let numerox;

do {
  numerox = prompt("Ingresa un número mayor que 5:", ""); //el usuario ingresara un n° mayor a 5
} while (numerox <= 5); //Si el usuario ingresa un número menor o igual a 5, el bucle se repetirá hasta que se ingrese un número válido.

console.log("Número ingresado válido:", numerox); //mostrara el numero mayor a 5 ingresado por el usuario

/*FOR:
Recorre los elementos de un Array el numero de veces que determinemos. La cantidad de 
iteracion lo controlaremos utilizando un contador y una condicion que determine cuando detener el Bucle.*/

//ejm de INCREMENTO
let x = 10;
for(let i = 0; i < x; i++) {
    console.log(i)
}

//ejm de DECREMENTO
let y = 0;
for(let d = 5; d > y; d--) {
    console.log(d)
}

/*FOR IN:
En un Array: Recorre los indices (ó posiciones) de los elementos que lo conforman.
En un Objeto: Recorre las propiedades de un objeto e itera sobre las claves de esta (recuerda que un objeto esta formado por pares de clave:valor)
*/
//ejemplo de 'for in' en un array
let libros = ["Harry Potter", "El Señor de los Anillos", "Cien Años de Soledad"];

for (let indice in libros) {
  console.log(indice); // 0 1 2...muestra el indice de cada uno de los libros
}

//ejemplo de 'for in' en un object
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  
  for (usuario in persona) {
    console.log(usuario); //nombre, edad, ciudad
  }

//FOR OF: Recorre los elementos de un array o cadena de texto y devuelve el valor de cada elemento.
//ejemplo de 'for of' en un array
let libros2 = ["Harry Potter", "El Señor de los Anillos", "Cien Años de Soledad"];

for (let libro of libros2) {
  console.log(libro); //Harry Potter, El Señor de los Anillos, Cien Años de Soledad...muestra el valor de cada uno de los indices
}
//Nota: 'for of' no se usa para Object ya que solo recorre valores de estructuras de datos iterables como el array o string