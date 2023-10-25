/*
:::CONCEPTOS BASICOS:::

-Variables: son contenedores que almacenan cualquier tipo de dato(valores) para luego ser reutilizados en nuestro codigo.
-Scope(alcance): es el alcance que puede tener una variable dentro de nuestro codigo.Existe el alcance Global y el alcance 
                 Local(ó de Bloque).
--Alcance Global: se da cuando definimos una variable (var-let-const) fuera de una funcion; esto quiere decir que podremos
                  acceder a dicho valor desde cualquier parte de nuestro codigo.

                  :::Recuerda::: La declaracion var es la unica que al declararla dentro de un bloque { } if, su alcance tbn sera Global. 
                  Con let y const su alcance si sera Local, siempre que esten definidos dentro de un bloque { }

--Alcance Local(ó de bloque): se da cuando definimos una variable (var-let-const) dentro de una funcion (ó dentro de un bloque {}).*/

/*VAR: almacena valores que pueden ser reasignados y/o modificado. (desde ECMAScript 6 'var' ya no se usa).
var tiene un scope global y a nivel bloque*/

//ejem 1 con alcance Global:
var numero1 = 20; //esta variable al tener scope global, podremos acceder a su valor tanto fuera como dentro de la condicional 'if'
if(true){
  console.log(numero1); //20
  var numero1 = 30;     //reasignamos un nuevo valor a numero1
  console.log(numero1); //30
}
console.log(numero1); //30
/*Nota:La variable definida con var es la unica que dentro de la condicional 'if' logra tener un scope Global, incluso
es posible reasignarle un nuevo valor a la misma variable, tal como se ve en el ejemplo */

//ejem 2 con alcance Local(ó de bloque)
function numeros(){
  var numero2 = 10; //el valor de esta variable tiene un alcance a nivel Local, solo se podra acceder a el dentro de la funcion { }
  console.log(numero2);
}
numeros(); // 10
//console.log(numero2); //Error: numero2 is not defined



/*Nota:Si definieramos una variable let o const dentro de un condicional 'if', su alcance sera local, quiere decir que 
solo podremos acceder al valor de dicha variable dentro del bloque { }.*/


/*LET: almacena valores que pueden ser reasignados.Tiene un scope global y a nivel bloque*/
//ejem 1 con scope global
let dia = "Lunes"; //tiene un scope global porque fue definido fuera de bloques {} y su valor puede ser llamado          
                   //tanto fuera como dentro de la funcion (desde cualquier parte del codigo)
if(dia){           
  console.log(dia); //Lunes
}
console.log(dia); //Lunes

//ejemplo 2
let variableGlobal = "Enero"; //variable con scope global
function mesDelAño() {
  let variableLocal = "Diciembre"; //variable con scope local
  console.log(variableLocal);
}
mesDelAño(); //Diciembre
console.log(variableGlobal); //Enero
//console.log(variableLocal); //variableLocal is not defined

//ejm 3 con scope local
function mifuncion (){ //las variables declaradas dentro de la funcion tienen un alcance dentro de bloque {}
  let edad = 20;
  let dobleEdad2 = edad + edad; 
  console.log(dobleEdad2); 
}
mifuncion(); //40
//console.log(edad);//edad is not defined


//CONST: almacena un valor unico que no puede ser reasignado ni modificado
const pi = 3.236
console.log(pi) //3.236 

//Nota: el alcance de una variable declarada con 'const' sera el mismo que el de 'let'(todo depende donde este definido)

/*RECUERDA:
Declarar variables con 'VAR' puede ser algo peligroso, por ejemplo al declararla dentro
de una condicional, su valor se vuelve accesible para todo el codigo y no solo para la condicional.*/


//TIPOS DE DATOS EN JAVASCRIP
//Datos Primitivos:
//string
let cadenaDeTexto = "Erick";

//number(integer - float)
let numeroEntero = 4;
let numeroDecimal = 4.9

//boolean(true - false)
let verdadero = true;
let falso = false;

/*CASOS ESPECIALES DE DATOS
-undefined: es un tipo de dato sin definir pero que si existe para cualquier programa de programacion
-null: es un tipo de dato con un valor nulo(vacio)
-NaN: es un tipo de dato No Numerico
-BigInt (permite almacenar numeros de grandes cifras, para ello se añade una 'n' al final del valor ---> var valorBigInt = 4n)
*/

/*Datos Compuestos
Se dice que son compuestos porque son capaces de almacenar muchos datos en una sola variable.*/
//Array []
let frutas = ["pera","platano","fresa"];

//Object { }
let user = {
  name : "Erick",
  Age : 25,
  caracteristicas : {
    estatura : 175,
    peso : 75
  },
  country : "Canada"
}

//Maps


//Conjuntos(set)



//COMENTARIOS DE CODIGO EN JAVASCRIPT
//Existen 2 formas de comentar codigo en JS:

//: se usa doble slash para comentar una sola linea de codigo
/*se usa esta combinacion de simbolos para comentar multiples lineas de codigo*/

