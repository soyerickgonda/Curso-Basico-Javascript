/*Parametro en Contexto Booleano
Cuando se utiliza un 'valor en un contexto booleano', Javascript automaticamente convierte ese valor a un booleano (true/false)
La conversion a booleano sigue el principio de:

'truthy':Todos los valores que no este dentro de ´falsy´ se consideran como verdaderos (string, numbers,array, object, ect)
'falsy':Son valores que se consideran como falsos (ejm: false, 0, " "(cadena_vacia),null,undefined, NaN)

Cuando evalúas un parámetro en contexto booleano, estás esencialmente verificando si ese valor es truthy o falsy. 
Esto es útil en lógica de control de flujo para tomar decisiones basadas en condiciones. */
//ejem:

function funcionDeEjemplo(parametro) {
    if(parametro){
        console.log("El parámetro es verdadero (truthy)");
    } else {
        console.log("El parámetro es falso (falsy)");
    }
}

funcionDeEjemplo('');   //El parámetro es falso (falsy)
funcionDeEjemplo(42);   //El parámetro es verdadero (truthy)
funcionDeEjemplo(null); //El parámetro es falso (falsy)
funcionDeEjemplo(false);//El parámetro es falso (falsy)
funcionDeEjemplo('string');//El parámetro es verdadero (truthy)
funcionDeEjemplo(['soy un array',123,true,false]);//El parámetro es verdadero (truthy)
