//eje 4.1
/*convertimos un numero a string para evaluar si la funcion tiene como argumento un numero que inicie con 9, de ser
asi ejecutar algo, caso contrario nada*/

function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    num ;
    let convertirAstring = num.toString();

    if(convertirAstring.startsWith("9")){
    return true
   } else {
    return false
   }

}
console.log(empiezaConNueve(9989)); 


//eje 4.2
/*convertir un numero a string para evaluar si la funcion tiene como argumento un numero especifico, de ser asi 
ejecutar algo, caso contrario nada*/
 function incluyeNumeroCuatro(numero) {
    numero;
    let aString = numero.toString();
    if(aString.includes("4")){
        return "El numero ingresado SI TIENE un 4 incluido"
    } else {
        return `El numero ingresado NO TIENE el 4 incluido`
    }
 }
 console.log(incluyeNumeroCuatro(64));