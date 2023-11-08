/*Los "métodos de cadena" son funciones que aplicamos a objetos de tipo strings, para realizar operaciones y 
manipulaciones comunes en texto. Estos métodos son proporcionados por el objeto String en JavaScript y nos 
permiten realizar tareas como la búsqueda de subcadenas, la modificación de caracteres, la extracción de caracteres específicos, etc.*/
/*Nota: .length es una propiedad de los string que nos devuelve el numero de caracteres que tiene una cadena de texto*/

let ejemplo = "cadena de texto";
let longitud = ejemplo.length;
document.write(longitud + '<br>');  

//METODOS DE STRING
//concat(): se usa para concatenar 2 o mas string y retorna una nueva.
let cadena = "hola ";
let cadena2 = "mundo"
let saludo = cadena.concat(cadena2);
console.log(saludo);


//startsWith(): si una cadena inicia con los caracteres de otra cadena, esto devolvera 'TRUE', caso contrario devolvera 'FALSE'.
let texto1 = "string de prueba";
let texto2 = "cadena de prueba";
let resultado = cadena.startsWith(cadena2);
console.log(resultado);// false ..si texto2 iniciara con string, el valor seria TRUE

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
console.log(posicion);  // 5...es porque la palabra 'gonzales' inicia en la posicion 5 del string. En caso el indice de la palabra que 
                        //busquemos no existiera, el resultado seria -1.

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
const string2 = "    ¡Hola, mundo!     ";
const stringLimpia2 = string2.trimStart();
console.log(stringLimpia2); // "¡Hola, mundo!"...se borra solo el espacio que esta al inicio del "¡Hola mundo!   ".
console.log(stringLimpia2.length) //18

//trimEnd(): Elimina espacios en blanco al final de una cadena de texto. 
const string3 = "    ¡Hola, mundo!     ";
const stringLimpia3 = string3.trimEnd();
console.log(stringLimpia3); // "¡Hola, mundo!"...se borra solo el espacio que esta al final del "   ¡Hola mundo!".
console.log(stringLimpia3.length) //17


