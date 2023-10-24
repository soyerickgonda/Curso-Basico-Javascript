//CONCEPTOS BASICOS
/*
-Variables: son contenedores que almacenan cualquier tipo de dato(valores) para luego ser reutilizados en nuestro codigo.
-Scope(alcance): es el alcance que puede tener una variable dentro de nuestro codigo.Existe el alcance Global y el alcance 
Local(ó de Bloque).
--Alcance Global: se da cuando definimos una variable (var-let-const) fuera de una funcion; esto quiere decir que podremos
acceder a dicho valor desde cualquier parte de nuestro codigo.
:::Nota::: La declaracion var es la unica que al declararla dentro de un bloque { } if, su alcance tbn sera Global. 
            Con let y const su alcance si sera Local, siempre que esten definidos dentro de un bloque { }

--Alcance Local(ó de bloque): se da cuando definimos una variable (var-let-const) dentro de una funcion (ó dentro de un bloque {}).

Ejemplos con Scope Global */

var numero1 = 20; //esta variable al tener scope global, podremos acceder a su valor tanto fuera como dentro de la condicional 'if'
if(true){
  console.log(numero1); //20
  var numero1 = 30;     //reasignamos un nuevo valor a numero1
  console.log(numero1); //30
}
console.log(numero1); //30
/*Nota:La variable definida con var es la unica que dentro de la condicional 'if' logra tener un scope Global, incluso
es posible reasignarle un nuevo valor a la misma variable, tal como se ve en el ejemplo */

let numero2 = 10; //esta variable al tener scope global, podremos acceder a su valor tanto fuera como dentro de la condicional 'if'
if(true){
  console.log(numero2);//10
}
console.log(numero2);//10
/*Nota:Si definieramos una variable let o const dentro de un condicional 'if', su alcance sera local, quiere decir que 
solo podremos acceder al valor de dicha variable dentro del bloque { }.*/

/*Se puede declarar variables usando 3 palabras claves: (VAR-LET-CONST)

*VAR: almacena valores que pueden ser reasignados y/o modificado. (desde ECMAScript 6 'var' ya no se usa).
var tiene un scope global y a nivel bloque*/
var pais = "peru";
var pais = "EEUU";//reinicializado
pais = "Chile"; //modificado
console.log(pais); //"Chile"

//scope global
var edad = 20; //var tiene un scope global
if(edad){
  var dobleEdad = edad + edad; //var tiene un scope dentro y fuera de bloque
  console.log(dobleEdad); //40
}
console.log(edad);//20
console.log(dobleEdad);//40

//scope a nivel bloque (local)
function misAños (){
  var años = 2000; //tiene un scope a nivel bloque porque fue declarado dentro de una funcion
  console.log(años);
}
misAños();// 2000
//console.log(años); //ReferenceError: años is not defined .. no se puede acceder a la variable años fuera de la funcion

/*LET: almacena valores que pueden ser reasignados.Tiene un scope global y a nivel bloque*/
//scope global
let dia = "Lunes"; //tiene un scope global porque fue definido fuera de bloques {}
if(dia){
  console.log(dia); //Lunes
}
console.log(dia); //Lunes

//scope a nivel bloque (local)
let edad2 = 20; //var tiene un scope global
if(edad2){
  let dobleEdad2 = edad2 + edad2; //let tiene un scope dentro de bloque
  console.log(dobleEdad2); //40
}
console.log(edad2);//20
//console.log(dobleEdad2);//ReferenceError: dobleEdad is not defined.. no se puede acceder a la variable
                          //'dobleEdad' fuera de la condicional if { }


//CONST: almacena un valor unico que no puede ser reasignado ni modificado
const pi = 3.236
console.log(pi) //3.236 

//Nota: el alcance de una variable declarada con 'const' sera el mismo que el de 'let'(todo depende donde este definido)

/*RECUERDA:
Declarar variables con 'VAR' puede ser algo peligroso, por ejemplo al declararla dentro
de una condicional, su valor se vuelve accesible para todo el codigo y no solo para la condicional.*/

//TIPOS DE DATOS
//string
let cadenaDeTexto = "Erick";

//number(integer - float)
let numeroEntero = 4;
let numeroDecimal = 4.9

//boolean(true - false)
let verdadero = true;
let falso = false;

//CASOS ESPECIALES DE DATOS(undefined,null,NaN)
//undefined: es un tipo de dato sin definir pero que si existe para cualquier programa de programacion
//null: es un tipo de dato con un valor nulo(vacio)
//NaN: es un tipo de dato No Numerico



//COMENTARIOS DE CODIGO EN JAVASCRIPT
//Existen 2 formas de comentar codigo en JS:

//: se usa doble slash para comentar una sola linea de codigo
/*se usa esta combinacion de simbolos para comentar multiples lineas de codigo*/


//TIPOS DE DATOS EN JAVASCRIP
/*Datos primitivos:
-number (integer / float)
-boolean (true / false)
-string
-undefined
-BigInt (permite almacenar numeros de grandes cifras, para ello se añade una 'n' al final del valor ---> var valorBigInt = 4n)
*/

/*Datos compuestos
Se dice que son compuestos porque son capaces de almacenar muchos datos en una sola variable.
-Array []
-Object { }
-Maps
-Conjuntos(set)
 */