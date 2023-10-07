//OPERADORES DE ASIGNACION
//asignacion(=)
let a = 10;

//asignacion de adicion(+=)
let b = 5;
b += 3; // b vale 8....(5+3)

//asignacion de sustraccion(-=)
let c = 12;
c -= 8; // c vale 4...(12-8)

//asignacion de multiplicacion(*=)
let x = 4;
x *= 2; //8...(4*2)

//asignacion de division(/=)
let y = 20;
y /= 4; //5...(20/4)

//OPERADORES ARITMETICOS
//suma(+)
let suma = 2 + 2; //4

//resta(-)
let resta = 4 - 2; //2

//multiplicacion(*)
let multiplicacion = 4*4; //16

//division (/)
let division = 12 / 3; //4

//modulo(resto)
let resto = 20 % 3; //2

//exponente(**)
let exponente = 12**2; //144

//OPERADORES LOGICOS
  
//OPERADORES DE COMPARACION
//igualdad (==): compara el valor de 2 variables sin importar el tipo de dato que este sea. Si ambas variables tienen el mismo valor este sera TRUE, caso contrario sera FALSE
let num1 = "2";
let num2 = 2;
document.write(num1 == num2)//true
document.write("</br>")

//identidad ó estrictamente iguales (===): compara el valor y el tipo de dato de 2 variables, si estos coinciden devolvera TRUE, caso contrario sera FALSE.
let num3 = "1992";
let num4 = 1992;
document.write(num3 === num4)//false
document.write("</br>")

//diferencia (!= (son diferentes) , !== (son extremadamente diferente))
let num5 = "4";
let num6 = 4;
document.write(num5 != num6)//false...compara el valor de las variables mas no el tipo de dato
document.write("</br>")
document.write(num5 !== num6)//true...compara el valor y el tipo de dato de las variables
document.write("</br>")
//Nota: '!' tbn se usa para convertir en negacion el valor de una variable

//mayor o mayor-igual (>,>=)
let erick = 30;
let gustavo = 32;
document.write(erick >= gustavo)//false
document.write("</br>")

//menor o menor-igual (<,<=)
let adolph = 1990;
let omar = 1992;
document.write(adolph <= omar)//true