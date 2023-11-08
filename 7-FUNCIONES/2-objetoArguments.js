document.write("<h2>Objeto de Funciones</h2>")
/* Objeto Arguments
'arguments' es una estrutura especial de Javascript que contiene todo los valores de los argumentos pasados a una funcion.
Para acceder a los valores de los argumentos de la funcion lo haremos a traves de 'arguments[index]', donde 'index' es.
el indice del argumento que se desea acceder. 

¿Para qué sirve el objeto "arguments" en JavaScript?
Se utiliza para acceder a los argumentos que se pasaron a una función, incluso si no conoces de antemano cuántos 
argumentos se pasarán o cuáles serán sus nombres. Esto es útil cuando quieres hacer que una función sea flexible y 
pueda manejar diferentes cantidades de argumentos

Mostramos algunos ejemplos de como usar 'arguments'*/

//Para sumar todo los valores de los argumentos
function suma() {
    let total = 0;
    for(i = 0; i < arguments.length; i++){
        total = total + arguments[i];
    }
    return total;
}
console.log(suma(1,2,3,4,10));

//Para restas todo los valores de los argumentos
function resta() {
    let total = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        total = total - arguments[i];
    }
    return total;
}

console.log(resta(10,6,4));


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. 
    // Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    //arguments.length***
    let acumuladorMulti = 1; //ponemos 1 porque si ponemos 0 eso hara que el resultado sea 0 (todo # x 0 = 0)
    if(arguments.length > 1){
        for(i=0;i<arguments.length; i++){
            acumuladorMulti = acumuladorMulti * arguments[i]
        }
        return acumuladorMulti;
    } else if (arguments.length == 1) {
        return arguments[0];
    } else {
        return 0;
    }
}
console.log(multiplicarArgumentos(5)); //120