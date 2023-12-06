//eje 5.1
function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  /* Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
       la ejecución y retornar el string: "Se interrumpió la ejecución".*/
  // [PISTA]: utiliza el statement 'break'.
  let arrayAcumulador = [];
  for (i = 0; i < 10; i++) {
    num = num + 2;
    if (num === 10) {
      return("Se interrumpió la ejecución"); //el ejercicio nos pide usar break, pero creo esta mal por eso uso return
    } else {
      arrayAcumulador.push(num); 
    }
  }
  return arrayAcumulador;
}
console.log(breakStatement(-4));


//ejer 5.2
function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  let arrayAcumulador = [];
  for(i=0; i<10; i++){
     if(i === 5){
        continue;
      }
      num = num + 2;
      arrayAcumulador.push(num);
}
   return arrayAcumulador;
}
console.log(continueStatement(50));


