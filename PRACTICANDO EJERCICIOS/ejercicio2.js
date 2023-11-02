/*EJERCICIO 1: Bucle que aumente el valor de 2 en 2 hasta llegar a 20*/
let incrementarNumero = 0;
for(i=0;incrementarNumero<20; i++){
  incrementarNumero = incrementarNumero + 2;//el numero incrementara de 2 en 2
  console.log(incrementarNumero); //2468101214161820
}

/*EJERCICIO 2: Bucle que disminuya el valor de 2 en 2 hasta llegar a 0*/
let decrementoDeNumero = 20;
for(i=0; decrementoDeNumero > 0; i--){
    decrementoDeNumero = decrementoDeNumero - 2; //el numero disminuira de 2 en 2
    console.log(decrementoDeNumero); //181614121086420
}

//EJERCICIO 3: Bucle que aumente el valor en cada iteracion y que asu vez se multiplique por *2 en cada iteracion
let numero = 0;
for(i = 0; i < 10; i++){
    numero = numero + 1;
    console.log("el valor de numero es " + numero); //12345678910
    console.log(`el valor de numero ${numero} x 2 es = ` + (numero * 2)); //2468101214161820
}

/*EJERCICIO 4: hacer un bucle que escriba en una página web los encabezamientos desde <H1> hasta <H6> con un texto 
que ponga "Encabezado de nivel x".*/
let encabezado = 0;
for(i=0; i < 6; i++){
  encabezado = encabezado + 1;
  document.write(`<h${encabezado}>Encabezado de Nivel ${encabezado}</${encabezado}>`);
}
