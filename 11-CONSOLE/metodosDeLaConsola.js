//Metodos de la consola

/*Recuerda anteponer la palabra: console.*/
//-asserts():aparece un mensaje de error en la consola si la afirmacion es 'false'; si la afirmacion es 'true' no muestra nada. 
//-clear(): sirve para limpiar la consola.
//-warn(): sirve para imprimir mensaje de advertencia.
console.warn("Advertencia: este mensaje es de prueba");

//-error(): sirve para mostrar un mensaje de error.
console.error("Error en el codigo");

//-info(): sirve para mostrar algun mensaje informativo.
//-log(): sirve para mostrar mensaje de depuracion.

//-table():muestra datos en formato de Tabla. Esta funcion toma argumentos obligatorios (pueden ser Array u Object) y un parametro adicional 
console.table(["pera","platano","fresa","sandia"]);
// (índice)    Valor
//     0	    'pera'
//     1	    'platano'
//     2	    'fresa'
//     3	    'sandia'

//-count():Registra el número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.
//-countReset():Resetea el conteo usado con con 'console.count()'.
//ejm 1: 
    let i;
    for(i=0;i<5;i++){
    console.count()     //mostrara (default: 1,default: 2....default: 5)
                    }

//ejm 2:
function suma(a,b){
    console.count();
    return a + b;
}
suma(2,4);              // default: 1
suma(2,4);              // default: 2
suma(2,4);              // default: 3
console.countReset();   //reiniciamos el conteo a 0
suma(2,4);              // default: 1
suma(2,4);              // default: 2

//-group(): se utiliza para agrupar otras lineas en el registro de la consola web.
ejm:
console.group("frutas");    //creamos el Grupo que almacenara otros consoles
    console.log("piña");        //estos consoles (que son frutas)estaran dentro del grupo "frutas"
    console.log("naranja");
    console.log("melon");

//-time(): Inicia un temporizador que puede usarse para realizar un seguimiento a la duración de una operación.

//Nota: Añadir '%c' al texto de nuestro console.log(), nos permitira añadir estilo al texto.
//ejm:
console.log("%cHello world","color:red;border:3px solid green"); //Hello world

//Para mas info: https://developer.mozilla.org/es/docs/Web/API/console#temporizadores



