//ejercicio 1
function hacerAlgoAsync(callback) {
  setTimeout(function () {
    console.log("Operación asíncrona completada"); //este mensaje se mostrara despues de 1 segundo
    callback();
  }, 1000);
}

function miCallback() {
  console.log("¡Callback ejecutado!"); //este mensaje se muestra de inmediato una vez que la funcion sea invocada
}

hacerAlgoAsync(miCallback); //invocamos la funcion y le pasamos otra funcion como argumento (eso es 'callback')

//ejercicio 2
function operacionAsyncConError(callback) {
    setTimeout(() => {
        const error = false;
        if (error) {
            callback('Hubo un error')
        } else {
            callback('Operacion exitosa')
        }
    }, 2000);
}

function miCallback(error, resultado) {
    if(error){
        console.log("Error:", error);
    } else {
        console.log("Resultado:", resultado);
    }
}
operacionAsyncConError(miCallback )