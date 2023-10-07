/*Una condicional es una estructura de codigo que nos permite validar un expresion y si esta es TRUE/FALSE
ejecutara un fragmento de codigo diferente dependiendo el resultado de la expresion */

/*
-IF: ejecutara el bucle si la condicion es TRUE
-ELSE IF: ejecutara el bucle si la condicion anterior (if) no fuese verdadera
-ELSE: ejecutara lo que este dentro de {} o mostrara simplemente un mensaje si no se cumpliesen ninguna de las 
       condiciones anteriores.
*/

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
  alert("¡Sí, amo el helado de chocolate!");
} else {
  alert("Awwww, pero mi favorito es el de chocolate...");
}