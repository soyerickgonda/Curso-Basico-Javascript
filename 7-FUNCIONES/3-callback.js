/*¿Que es un callback?
Los 'callbacks' son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que se 
haya completado alguna operacion.*/

//ejem 1: cuando pasamos una funcion como parametro al metodo forEach, eso es un 'callback'
const list = ["A", "B", "C"];
list.forEach((elemento, index) => {
  console.log(index + elemento);
});

//ejm 2: otra manera de aplicar forEach
const lista = ["A", "B", "C"];
function funcionForEach(elemento, indice) {
  console.log("indice " + indice + " elemento " + elemento);
}
lista.forEach(funcionForEach);

/*
1) Funciones de Orden Superior
En JS las funciones son concideradas 'ciudadanos de primera clase' que puedes ser tratadas como cualquier
otro objeto. Cuando nos referimos a 'las Funciones de Orden Superior', nos referimos a aquellas funciones
que pueden aceptar funciones como parametros y/o devolver funciones como resultados
(los 'callback son un ejemplo de orden superior')
*/
//ejm
function primeraFuncion(callback) {
  //esta funcion primero retornara el mensaje y luego el valor del parametro callback 'segundaFuncion'
  return `la primera funcion contiene ` + callback;
}

function segundaFuncion() {
  //esta funcion se pasara como argumento a la 'primeraFuncion'
  return `elemento de la 2da funcion`;
}
console.log(primeraFuncion(segundaFuncion()));

/*
2)Callbacks en Operaciones Asincronas
Los callbacks son especialmente útiles en operaciones asíncronas, como las llamadas a API, la lectura de 
archivos o las animaciones. En lugar de esperar que la operación se complete, se pasa una función callback
que se ejecutará una vez que la operación asíncrona haya terminado.*/
//ejm
function hacerAlgoAsincrono(callback) {
  //aplicamos el metodo global 'setTimeOut'
  setTimeout(function () {
    console.log(`operacion asincrona completada`);
    callback();
  }, 2000);
  console.log(
    `este mensaje se muestra mientras carga el settimeout, esto es un ejemplo de asincronia`
  );
}

function funcionCallback() {
  //esta funcion se lo pasaremos como parametro a la funcion 'hacerAlgoAsincrono'
  console.log(`la 'funcionCallback' ha sido ejecutado`);
}

hacerAlgoAsincrono(funcionCallback);

/*
3)Manejo de errores con Callbacks
Los callback tambien se utilizan para manejar errores en operaciones asincronas*/
//ejm
function operacionAsincronaConError(callback) {
  setTimeout(() => {
    const error = true;
    if (error) {
      //esta condicion sera siempre true
      callback("hubo un error");
    } else {
      callback(null, "no existe errores, operacion exitosa");
    }
  }, 2000);
}

function miCallback(error, resultado) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Resultado:", resultado);
  }
}
operacionAsincronaConError(miCallback);

// setTimeout(()=> {
//   const error = true;
//   if(error){
//     callback('hubo un error');
//   } else {
//     callback(null, 'no existe errores, operacion exitosa')
//   }
// },2000);
function operacionAsincronaConError(callback) {
  let error = false; //el valor de esta variable va afectar al valor de 'error' de las 2 funciones
  if (error) {
    callback(`se detecto un error`); //si 'error' es true se imprime este mensaje despues del mensaje que traiga el callback
  } else {
    callback(`operacion exitosa`); //si 'error' es false se imprime este mensaje despues del mensaje que traiga el callback
  }
}

function miCallback(error) {
  //el valor de 'error' se evaluá en un 'contexto booleano'
  if (error === "operacion exitosa") {
    console.log("No hubo error: " + error);
  } else {
    console.log("Error: " + error); //se imprime este mensaje si 'error' = (false, 0, "",null,undefined, NaN)
  }
}
operacionAsincronaConError(miCallback);




// Recibes un arreglo de números y un callback
// Suma todos los números del arreglo.
// Este resultado debes pasárselo como argumento al callback recibido.
// [NOTA]: no debes reotrnar nada.
function sumarArray(arrayOfNumbers, cb) {
  let suma = 0;
  arrayOfNumbers.forEach(function (elemento) {
    suma = suma + elemento;
  });
  cb(suma);
}

function miCallback(resultado) {
  console.log(`${resultado}`);
}
const numbers = [1, 2, 3, 4, 5];
sumarArray(numbers,miCallback);



















//desarollo de chat GPT
function sumarArray(arrayOfNumbers, cb) {
  // Utiliza el método reduce para sumar todos los números del arreglo
  const suma = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

  // Llama al callback con el resultado de la suma como argumento
  cb(suma);
}
// Ejemplo de uso:
const miCallback = (resultado) => {
  console.log(`El resultado de la suma es: ${resultado}`);
};
const numeros = [1, 2, 3, 4, 5];
sumarArray(numeros, miCallback);
