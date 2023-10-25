/*ESTRUCTURA DE CONTROL - SENTENCIA CONDICIONALES
Una condicional o estructura de control nos permite validar un expresion y si esta es TRUE/FALSE
ejecutara un fragmento de codigo diferente dependiendo el resultado de la expresion */

/*
-IF: ejecutara un bloque de codigo si la condicion es TRUE
-ELSE IF: ejecutara un bloque de codigo si la condicion anterior (if) no fuese verdadera
-ELSE: ejecutara lo que este dentro de { } o mostrara simplemente un mensaje si no se cumpliesen ninguna de las 
       condiciones anteriores.
-SWITCH: : Se utiliza para realizar una selección múltiple basada en el valor de una expresión. Cada caso en un 
switch representa un valor posible de la expresión y el bloque de código que se ejecutará si la expresión coincide con ese valor.
*/

//EJEMPLOS CON IF
//ejemplo 1
let num1 = "false";
let num2 = 2000;

if (num1 > num2) {
    console.log('el valor numerico de la izquierda es mayor que el de la derecha')
} else if (num1 < num2){
    console.log('el valor numerico de la derecha es mayor que el de la izquierda')
}else if (num1 === num2){
    console.log('los valores numericos ingresados son iguales')
}
else {
    console.log('ingresaste valores no numericos')
}

//ejemplo 2
let helado = "chocolate";
if (helado === "chocolate") {
  console.log("¡Sí, amo el helado de chocolate!");
} else {
  console.log("Awwww, pero mi favorito es el de chocolate...");
}

//Nota: podemos aplicar el operador ternario para casos sencillos de if

/*EJEMPLOS CON SWITCH
::Recuerda::
Esta expresión se utiliza cuando tenemos múltiples posibilidades como resultado de la evaluación de una sentencia.*/

let diaDeSemana = 3;

switch (diaDeSemana) {
  case 1:
    console.log("hoy es Lunes");    
    break;
  case 2:
    console.log("hoy es Martes");    
    break;
  case 3:
    console.log("hoy es Miercoles");    
    break;
  case 4:
    console.log("hoy es Jueves");    
    break;
  case 5:
    console.log("hoy es Viernes");    
    break;
  case 6:
    console.log("hoy es Sábado");    
    break;
  case 7:
    console.log("hoy es Domingo");    
    break;
  default:
    console.log("el numero que ingreso no coincide con ninguno de los 7 dias de la semana")
    break;
}
/*Recuerda poner siempre el 'break' al final de cada caso, esto hara que solo se ejecute el codigo del 
caso que coincide con la expresion(condicion). De no ponerlo se ejecutaran todas las sentencias(cases)*/