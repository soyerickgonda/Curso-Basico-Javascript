/*Los "métodos de cadena" son funciones que aplicamos a objetos de tipo strings, para realizar operaciones y 
manipulaciones comunes en texto. Estos métodos son proporcionados por el objeto String en JavaScript y nos 
permiten realizar tareas como la búsqueda de subcadenas, la modificación de caracteres, la extracción de caracteres específicos, etc.*/
/*Nota: .length es una propiedad de los string que nos devuelve el numero de caracteres que tiene una cadena de texto*/

let ejemplo = "cadena de texto";
let longitud = ejemplo.length;
document.write(longitud + '<br>');  

//METODOS DE STRING
//concat(): se usa para concatenar 2 o mas string y retorna una nueva.
let string = "hola ";
let string2 = "mundo"
let saludo = string.concat(string2);
console.log(saludo);

//startsWith(): si una cadena inicia con los caracteres de otra cadena, esto devolvera 'TRUE', caso contrario devolvera 'FALSE'.
let texto1 = "string de prueba";
let texto2 = "cadena de prueba";
let resultado = texto2.startsWith(texto1);
console.log(resultado);// false 

//endsWith: si una cadena termina con los caracteres de otra cadena, el resultado seria 'TRUE', caso contrario devolvera 'FALSE'.
let texto3 = "string de prueba";
let texto4 = " prueba";
let resultado2 = texto1.endsWith(texto2);
console.log(resultado2);//true...si texto4 tuviese otra letra,palabra o caracter, el resultado seria 'FALSE'

//includes():si un string puede encontrarse dentro de otro string, el resultado sera 'TRUE', de no encontrarse el resultado sera 'FALSE'.
let resultado3 = texto3.includes(texto4); //true... porque el texto3 incluye una palabra que se repite en el texto4. 

//indexOf():devuelve el indice del primer caracter del string. Si no existiera devolvera un -1.
let user = ("aldo gonzales, jesus gonzales, adolph gonzales");
let posicion = user.indexOf("gonzales"); 
console.log(posicion);  // 5...es porque la palabra 'gonzales' inicia en la posicion 5 del string. 
                        //En caso el indice de la palabra que buscamos no existiera, el resultado seria -1.

//lastIndexOf():devuelve el ultimo indice del primer caracter del string. Si no existiera devuelve -1.
let posicion2 = user.lastIndexOf("gonzales"); //38...es la ultima posicion en donde aparece la palabra "gonzales".
let posicion3 = user.lastIndexOf("gonda"); //-1 ...es porque la palabra "gonda" no existe dentro del string "user".

//repeat(): repite el mismo string segun la cantidad que especifiquemos
let cadenaDePrueba = "123";
let repetirCadena = cadenaDePrueba.repeat(2);
console.log(repetirCadena); //'123 123' .. ya que solicitamos que se repita 2 veces

/*split(): Divide un string y lo convierte en un array de substring basado en un separador especificado. Este separador puede ser un carácter, 
una expresión regular o una cadena de texto que se utiliza para determinar dónde se deben realizar las divisiones.*/
    let frase = "hola mundo como estas";
    let result1 = frase.split(" "); //(4) ['hola', 'mundo', 'como', 'estas']..el string se convirtio en array teniendo como separador los espacios vacios " "
    let result2 = frase.split(" ",2); //(2) ['hola', 'mundo']..el string convirtio en array los dos primeros elementos del string teniendo como separador los espacios vacios " "
    console.log(result1);
    console.log(result2);

let frase2 = "Lima,ciudad,de,los,reyes";
let result3 = frase2.split(",");
console.log(result3); //(5) ['Lima', 'ciudad', 'de', 'los', 'reyes']..el string se convirtio en array teniendo como separador la coma ','

//substring():Nos retorna un pedazo del string que seleccionamos
let substring = frase.substring(0,5); //usamos como ejm la frase del metodo anterior (split)
console.log(substring); //'hola '..devuelve los valores que van del indice 0 al (5-1 = 4)

//toLowerCase():Convierte un string en minuscula
let usuario = "ERICK GONDA";
let usuarioMinuscula = usuario.toLowerCase();
console.log(usuarioMinuscula) //erick gonda

//toUpperCase():Convierte un string en mayuscula
let usuario2 = "omar gonda";
let usuario2Mayuscula = usuario2.toUpperCase();
console.log(usuario2Mayuscula) //OMAR GONDA

/*toString(): Convierte tipos de datos como números, objetos, arreglos, etc en cadena de texto para que puedan ser utilizados en operaciones 
de concatenación de cadenas o para mostrar información legible por humanos.*/
let convertirAstring = 28043104;
let conversion = convertirAstring.toString();
document.write(typeof(conversion));  //string
console.log(conversion);            //28043104

//padStart():Agrega caracteres de relleno al PRINCIPIO de un string hasta que la longitud de la cadena alcanza o supera la longitud especificada. 
let cadenaInicial = "123";
let cadenaRelleno = cadenaInicial.padStart(5, "0");
console.log(cadenaRelleno); // "00123"..a la cadena relleno le añadimos dos 0 al inicio del string, de tal forma que cuando le sumemos 
                            //los elementos de la cadena inicial den un total de 5 elementos tal y como se indico en cadena.padStart()

//padEnd():Agrega caracteres de relleno al FINAL de un string hasta que la longitud de la cadena alcanza o supera la longitud especificada
let cadenaFinal= "123";
let cadenaRelleno2 = cadenaFinal.padEnd(7, "A");
console.log(cadenaRelleno2); //"123AAAA"... a la cadena relleno2 le añadimos cuatros A al final del string, de tal forma que cuando le sumemos
                            //los elementos de la cadena inicial de un total de 7 elementos tal y como se indica en cadena.padEnd()

//trim(): Elimina espacios en blanco al principio y al final de una cadena de texto, pero no en el medio de la cadena.
const string1 = "    ¡Hola, mundo!     ";
const stringLimpia1 = string1.trim();
console.log(stringLimpia1); //"¡Hola, mundo!"... se borra el espacio que esta al inicio y al final del "¡Hola mundo!".
console.log(stringLimpia1.length)//13

//trimStart(): Elimina espacios en blanco al principio de una cadena de texto.
const string3 = "    ¡Hola, mundo!     ";
const stringLimpia2 = string3.trimStart();
console.log(stringLimpia2); // "¡Hola, mundo!"...se borra solo el espacio que esta al inicio del "¡Hola mundo!   ".
console.log(stringLimpia2.length) //18

//trimEnd(): Elimina espacios en blanco al final de una cadena de texto. 
const string4 = "    ¡Hola, mundo!     ";
const stringLimpia3 = string4.trimEnd();
console.log(stringLimpia3); // "¡Hola, mundo!"...se borra solo el espacio que esta al final del "   ¡Hola mundo!".
console.log(stringLimpia3.length) //17

//charAt():devuelve el caracter de un string segun la posicion que se haya especificado entre ()
let string5 = "abc";
let primerCaracter = string5.charAt(0);
console.log(primerCaracter); // Devolverá "a"

/*slice():se utiliza para extraer una porcion de un string y devolverla como una cadena. Puedes especificar
la posicion  de inicio y opcionalmente la posicion de finalizacion*/
let string6 = "abcdefgh";
let elRestoDelString = string6.slice(1);
console.log(elRestoDelString); //Devolverá "bcdefgh"

let porcionDelString = string6.slice(1, 4);
console.log(porcionDelString); // Devolverá "bcd"


/*EXPRESIONES REGULARES
Son reglas o descripciones utilizadas para encontrar una determinada combinacion de caracteres dentro de un string. 
Estas 'expresiones regulares' se utilizar principalmente para realizar operaciones de busqueda y manipulacion de string.

HAY 2 FORMAS DE CREAR EXPRESIONES REGULARES: 

1) Usando la funcion constructora del objeto RegExp:
ejm:
let ejemplo = new RegExp('Hola Mundo');

RegExp tiene los siguientes metodos para manipular una expresion regular:*/
/*exec():Obtiene los detalles de la coincidencia
ejm:*/
const cadena1 = 'Hello World';  
const expreReg1 = new RegExp('world','i'); //'i'es un modificador que hace referencia a que es insensible a mayúsculas/minúsculas
console.log(expreReg1.exec(cadena1)); //['World', index: 6, input: 'Hello World', groups: undefined]
console.log(expreReg1.exec(cadena1)[0]); //'World'

/*-test():Verifica la existencia de una coincidencia.
ejm: */
console.log(expreReg1.test(cadena1)); //true...el valor de 'expreReg1' si existe dentro de 'cadena1'.

/*2) Usando notacion literal (//):
ejm:
let ejemplo2 = /'Hola Mundo'/;

La Notacion Literal tiene los siguientes metodos de String para manipular una expresion regular:*/
//-match():Devuelve un array con las coincidencias encontradas o null si no hay coincidencias.
const cadena2 = 'hola Mundo, que bello esta el mundo';
const match = /mundo/gi;
console.log(cadena2.match(match)); //(2) ['Mundo', 'mundo']

//-matchAll():Devuelve un iterador con todas las coincidencias encontradas.
const expreReg3 = 'apple es manzana en ingles, Steve Jobs fundo apple';
const matchAll =  expreReg3.matchAll(/apple/g);
const conversionAArray = Array.from(matchAll, function (element) {
    return element[0];
})
console.log(conversionAArray);

//-replace():Reemplaza la primera coincidencia encontrada.
const cadena3 = 'El gato maulla, maullo el gato';
const replace = cadena3.replace('gato','michi');
console.log(replace); //El michi maulla, maullo el gato

//-replaceAll():Reemplaza todas las coincidencia encontradas.
console.log(cadena3.replaceAll('gato', 'michi'));

//-search():Busca una coincidencia y devuelve la posición en la que inicia dicha coincidencia. En caso de no encontrarse devolvera -1.
const cadena4 = 'hOLA mundo, MUNDO bello';
console.log(cadena4.search(/mundo/i)); //5...es la posicion en la que inicia la palabra mundo (sin importar si esta en mayus/minusc)
console.log(cadena4.search(/MUNDO/));  //12...es la posicion en la que inicia la palabra MUNDO (en mayuscula)

//-split(): Divide un string y lo convierte en un array de substrings basado en un separador especificado.
//>ejm 1:
const cadena5 = 'la-vida-es-bella';
console.log(cadena5.split('-'));

//>ejm 2:
const elementos = 'elemento1  ,elemento2,    elemento3,    elemento4    ';
console.log(elementos.split(/\s*,\s*/).map(element => element.trim()).filter(Boolean));
/*En este código, después de usar split(/\s*,\s*), se aplica map(elemento => elemento.trim())
para eliminar los espacios al principio y al final de cada elemento. Además, se utiliza filter(Boolean)
para eliminar cualquier elemento vacío resultante.*/

/*source(): Te permite obtener el patron de la expresion regular como una cadena de texto. 
Este metodo puede usarse tanto con notacion literal (//) ó mediante el constructor RegExp.

>>Nota:cuando se menciona "patrón de una expresión regular", nos referimos a la combinación específica de caracteres
que estás intentando encontrar mediante esa expresión regular.
ejm: */
const cadena6 = /el abecedario tiene 24 letras, abcisa/
// const source = /abc+/   
console.log(cadena6.source);


/*FLAGS (o modificadores) QUE SE USAN EN LAS EXPRESIONES REGULARES: 

-i (insensible a mayúsculas/minúsculas):
Permite que la expresión regular haga coincidencias sin tener en cuenta las diferencias entre mayúsculas y minúsculas. 
(ejemplo: /patrón/i) coincidiría con "Patrón", "PAtRóN", "pATrÓN", etc. 

-g (coincidencia global):
Busca todas las coincidencias en lugar de detenerse después de encontrar solo la primera. 
(ejemplo: /patrón/g) buscará todas las instancias de "patrón" en el texto.

-m (coincidencia multilineal):
Busca las coincidencias al principio y al final de cada linea. Si no se usara 'm' solo se buscara al principio o final 
de todo el texto.

ejm: */ 

let texto = "Inicio de la línea 1 \nAlgo más en la línea 2 \nInicio de la línea 3 inicio";
let expresionAlInicio = /^Inicio/gm;
console.log(texto.match(expresionAlInicio)); //['Inicio', 'Inicio']
let expresionAlFinal = /Inicio\s*$/gmi;
console.log(texto.match(expresionAlFinal)); //['inicio']
/*Nota: si no usaramos el modificador 'm' solo se mostraria el primer elemento Inicio que se encuentre en todo el texto
(Recuerda: \n se usa para dar saltos de linea)*/
