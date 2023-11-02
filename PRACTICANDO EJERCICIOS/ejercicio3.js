//EJERCICIO DE SOY HENRY
// El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
// "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
// Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".

// function mesesDelAño(meses){
//     let tresMeses = [];
//     for(i=0; i<meses.length; i++){
//         if (meses[i] === "Enero" || meses[i] === "Marzo" || meses[i] === "Noviembre") {
//            tresMeses.push(meses[i]);
//         }
//     }
//     // console.log(tresMeses);
//     // return tresMeses; //el ejercicio me pide returnar los valores en el nuevo array, pero cuando acitvo el return me corta la funcion y ya no se ejecuta el 'if' de abajo

//     if(tresMeses.length === 3){
//         return tresMeses;
//     } else {
//         return "No se encontraron los meses pedidos";
//     }
// }
// let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
// let resultado = mesesDelAño(meses);     
// console.log(resultado); 
 

//OTRA MANERA DE COMO DESARROLLE EL MISMO EJERCICIO
function mesesDelAño(array) {
    //el array que habla el ejercicio es el que se pasara como argumento a la funcion, por lo tanto no es necesario crear un array con los meses
    let mesesEncontrados = [];

    for (i=0; i<array.length; i++) { //recorreremos los elementos del array que pasaremos como argumento a la funcion
        if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){ //si el array cumple con esto, metera los valores a un nuevo array vacio
            mesesEncontrados.push(array[i]);
        }
    }
    if(mesesEncontrados.length === 3){ //evaluamos los valores del nuevo array con valores que el array original(argumento de la funcion)le paso
        return mesesEncontrados;
    } else {
        return "No se encontro los meses que se requieren"
    }
}
console.log(mesesDelAño(["Marzo","Noviembre","Enero"])); //llamamos a la funcion y pasamos como parametros el array con los meses que se requiere


/* 
//METODO DESARROLLADO POR UN ALUMNO DE SOY HENRY
function mesesDelAño(array) {
    let mesesEncontrados = [];
    let meses = ["Marzo","Noviembre","Enero"];

    for(i=0; i<meses.length; i++){
        if(array.includes(meses[i])){
            mesesEncontrados.push(meses[i]);
        }
    }
    if(mesesEncontrados.length === meses.length){
        return mesesEncontrados;
    } else {
        return "No se encontraron los meses pedidos"
    }
}
let mensaje = mesesDelAño(["Marzo","Noviembre","Enero"]);
console.log(mensaje);
*/










