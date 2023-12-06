//Las funciones son una manera de encapsular 'bloques de codigo reutilizable' que realizan una tarea especifica.

//3 formas de Declarar Funciones:

//1) FUNCION CONVENCIONAL (conocidas como funcion declarada)
//ejm 1:
saludar("Erick"); //Hola Erick......llamamos a la funcion 'saludar'
function saludar (nombre) {
    console.log(`Hola ${nombre}`) 
} //Recuerda: tu puedes invocar a la funcion antes o depues de haberla declarado y funcionara igual

//ejm 2:
function sumar (a,b) {
    return resultado = a + b;  //retorna el resultado de una suma
}
console.log(sumar(4,50)); //54.....llamamos a la funcion dentro del console.log para que el resultado de muestre en la consola

//ejm 3:
function multiplicar (x,y) {
    return x * y;               //retornan el resultado de una multiplicacion
    alert("hola mundo");        //este alert no se ejecuta ya que esta debajo del return
}

let resultado2 = multiplicar(4,4); //llamamos a la funcion y esta la metemos dentro de la variable 'resultado2'
console.log(resultado2); //16

/*Recuerda:
Cuando la funcion retorna un valor, la funcion finaliza ahi y cualquier otra cosa que este debajo del return
ya no se ejecutara*/

/*2) FUNCION ANONIMA (conocidas como funcion expresada): 
Son funciones que no tienen nombre y al momento de crearlas estas se guardan dentro de una variable. */
//ejm 1:
const sumando = function(a, b) {
  return a + b;
};
console.log(sumando(100,100));  //200

//ejm 2:
var miFuncionAnonima = function() {
  console.log("Esta es una función anónima ejecutada después de 2 segundos.");
};
//Pasamos la función anónima como argumento a la funcion nativa setTimeout
setTimeout(miFuncionAnonima, 2000); // La función se ejecutará después de 2 segundos


//3) Funcion flecha: 
//ejm 1:
const restar = (a, b) => a - b;
console.log(restar(50,40));     //10

/*RECUERDA: 
Las parametros(son variables) declaradas dentro de una funcion y su uso es local (se accede a ella 
desde dentro de la funcion)*/
