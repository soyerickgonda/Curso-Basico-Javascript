//Concatenar es unir 2 o mas string
const name = "Erick ";
const pregunta = "¿como estas?"

alert("hola " + name + pregunta)

let num1 = 19;
let num2 = 92;
let concatenar = num1 + num2;
document.write("la suma da " + concatenar + "</br>")
let concatenar2 = "" + num1 + num2;
document.write("la suma da " + concatenar2);
//en concatenar2 la suma nos da 1992 debido a que muy aparte de los numeros
//estamos sumandole un string  "". Recuerda: si sumas string a numeros, tedras como resultado un nuevo string

//concatenar usando Backticks ``(parece ser una tilde invertida)...Alt + 96} 
let persona = "mamá";
let preguntA = "¿Como estas?";
let frase = `Hola ${persona}, ${preguntA}`;
console.log(frase)