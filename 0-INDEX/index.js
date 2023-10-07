//CONCEPTOS BASICOS
//Variables: son contenedores que almacena datos(valores) para luego ser reutilizados 

//VAR: almacena valores que pueden ser reinicializados y/o modificado. (var ya no se usa)
var pais = "peru";
var pais = "EEUU";//reinicializado
pais = "Chile"; //modificado
console.log(pais); //"Chile"

//LET: almacena valores que no pueden ser reinicializados pero si reasignados, su scope es local con ambito de bloque

let num = 1;
//let num = 3; //error: num ya fue declarado...sale error pq no se puede reinicializar
num = 3; //reasignar un nuevo valor a num
console.log(num) //3

//ejemplo del scope de Let
let x = "hola mundo";     //variable global

function ejemploAlcance() {
    if (true) {
      let x = 10;       //variable local y tiene un ámbito de bloque (solo funcionara dentro de las {})
      console.log(x);   //10
    } }
  console.log(x);       //hola mundo....(este valor corresponde al 'let x' que esta fuera de la funcion, ya que tiene un alcance global
  ejemploAlcance();     

//CONST: almacena un valor unico que no puede ser reinicializado ni modificado
const pi = 3.236
console.log(pi) //3.236 

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

/*COMENTAR CODIGO
Existen 2 formas de comentar codigo en JS:
Primera: Usamos '//' para comentar una sola linea de codigo
*/

//*Segundo: Usamos "/* */" para comentar multiples lineas de codigo