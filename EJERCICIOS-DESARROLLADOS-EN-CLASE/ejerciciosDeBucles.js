//EJERCICIO POCO COMPLEJO (BUCLE RECORRE OTRO BUCLE)
let array1 = ["erick","omar","gustavo jr."];
let array2 = ["gloria","antenor",array1];

for (nuevoArray in array2){     //nuevoArray recorre los elementos del array2
    if(nuevoArray == 2){        //cuando nuevoArray llegue al indice 2, ejecutara el 'For Of' usando como nueva variable al 'nuevoSegundoArray'
        for(nuevoSegundoArray of array1){  
            console.log(nuevoSegundoArray) //nuevoSegundoArray mostrara los valores del array1 (erick,omar,gustavo jr)
        }
    } else {
        console.log(nuevoArray) //0 1..
    }
} 
//Al ejecutar el bucle, la consola mostrara el sgte resultado: 0 1 erick,omar,gustavo jr

/*El 'for in' mostrara los indices del nuevoArray que seran los mismos valores del array2 (0 1); pero hay una
condicion: cuando el 'for in' llegue al indice 2, este mostrara los valores del array1 (erick,omar,gustavo jr)*/

//Nota: sin importar el indice al que llegue el nuevoArray, el desarrollo seria el mismo.