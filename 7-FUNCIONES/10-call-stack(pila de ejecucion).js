/*(https://developer.mozilla.org/es/docs/Glossary/Call_stack)

Call Stack o 'Pila de Ejecucion'

Es una estructura de datos que mantiene un registro de las funciones que se estan ejecutando dentro de un programa en un momento dado.
Los 'call stack' utilizan el principio LIFO(lost in, first out), significa que la ultima funcion en entrar es la primera en salir.

¿Cómo funciona la Pila de Ejecucion?
El motor de javascript va leyendo el codigo de nuestro programa y cada vez que se encuentre con la invocacion(llamado) de una funcion, 
se creara un registro con la informacion asociada a esta funcion, y lo va agregar a la pila de ejecucion.
Este registro va a tener la informacion necesaria para que el motor pueda ejecutar esta funcion.
Ante un nuevo llamado de una funcion, el motor de Js volvera a crear un nuevo registro para poder ejecutar esta funcion y lo agregara a la 'pila de ejecucion'

::Nota:: La primera funcion que se agrega a la 'pila de ejecucion', es una funcion anonima que engloba a todo el programa. Cuando esta funcion
salga de la pila, significa que se termino la ejecucion del programa principal*/

//ejm 1:
function primeraFuncion() { 
  console.log("En la primera función");
  segundaFuncion(); //llamamos a la funcion 'segundaFuncion'
  console.log("Saliendo de la primera función");
}

function segundaFuncion() {
  console.log("Dentro de la segunda función");
}

primeraFuncion();  // Llamamos a la primera función, este sera el primer elemento de la 'pila de ejecucion' y ejecutara lo que haya dentro de la funcion
