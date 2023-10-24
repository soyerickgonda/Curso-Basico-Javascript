/*Los métodos de array son funciones predefinidas que puedes utilizar para realizar diversas operaciones en arrays.
Estos métodos simplifican la manipulación y transformación de datos en arrays, lo que hace que trabajar con ellos sea más eficiente y conveniente. 
Algunos de estos metodos son:
*/
//TRANSFORMADORES

//pop(): Elimina el último elemento de un array y lo devuelve.
const miArray2 = [1, 2, 3];
const elementoEliminado = miArray2.pop(); //el elementoEliminado es el #3
console.log(`El array original quedaria asi: ` + miArray2); //[1, 2]..este seria el nuevo array

//shift(): Elimina el primer elemento de un array y lo devuelve.
const miArray3 = [1, 2, 3];
const elementoEliminado3 = miArray3.shift(); //el elementoEliminado es el #1
console.log(`El array original quedaria asi: ` + miArray3);//[2, 3]..este seria el nuevo array

//push(): Este método agrega uno o más elementos al final de un array.
const miArray = [1, 2, 3];
miArray.push(4); //se añade el nro 4 al array original
console.log(`El array original quedaria asi: ` + miArray)    //[1, 2, 3, 4]

const usuarios = ["Pedro","Maria","Carlos"];
usuarios.push("Richard", "Jesus"); 
console.log(`El array original quedaria con los sgtes nombres: ` + usuarios); //(5) ['Pedro', 'Maria', 'Carlos', 'Richard', 'Jesus']

//unshift(): Agrega uno o más elementos al principio de un array.
const miArray4 = [4,5,6];
miArray4.unshift(1,2,3); //se agregaron estos elementos al array original
console.log(`El array original quedaria asi: ` + miArray4); //[1, 2, 3, 4, 5, 6]..este seria el nuevo array

const alumnos = ["Carlos","Carla","Clotilde"];
const añadirAlumnos = alumnos.unshift("Michael","Freddy","Jason");
console.log(`El array original quedaria con los sgtes alumnos: ` + alumnos); //["Michael","Freddy","Jason","Michael","Freddy","Jason"]

//reverse():Invierte el orden de los elementos de un array.
let resultadoMiArray = miArray.reverse();
console.log(`El array original invertido quedaria asi: ` + resultadoMiArray); //[4, 3, 2, 1]

//sort(): Ordena los elementos de un array localmente y lo devuelve ordenado. (esto se basa en el orden lexicografico)
let numbers = [5,4,2,1,6,8,9,0,3,7];
numbers.sort();
console.log(numbers); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]..ordenado de menor a mayor

let animals = ["perro","gato","loro","raton","conejo","tigre"];
animals.sort();
console.log(animals); //['conejo', 'gato', 'loro', 'perro', 'raton', 'tigre']..ordenado alfabeticamente

//splice(): Cambia el contenido de un array pudiendo 'eliminar elementos' existentes y/o 'agregar' unos nuevos.
let frutas2 = ["manzana","papaya","papa","brocoli","lechuga"];
console.log(`El array de frutas era asi: ` + frutas2)
frutas2.splice(2,4,"mandarina","fresa","arandanos");//arrancamos desde la posicion 2 y borramos hasta la posicion 4 
                                                    //y añadimos 3 elementos nuevos
console.log(`El array de frutas modificaco quedaria asi: ` + frutas2); //['manzana', 'papaya', 'mandarina', 'fresa', 'arandanos']
/*Recuerda: 
-No es necesario eliminar elementos cuando uses splice().
-Los elementos que se añadan iran segun la posicion que indiquemos.*/

//every():Sirve para evaluar si todos los elementos de un array cumplen una misma condición. Si se cumpliera retornara TRUE, caso contrario FALSE
//falta ejm

/*reduce(): es un método de array que se utiliza para reducir (acumular) todos los elementos del array a un solo valor.
Toma una funcion como argumento que se ejecuta en cada elemento del array. Esta funcion toma 2 argumentos: el acumulador(donde se almacena el resultado parcial)
y el elemento actual que se esta procesando. El resultado final se obtiene despues de aplicar la funcion a todo los elementos del array 
::Nota::Este método es ideal para sumar, restar, multiplicar, dividir, etc los elementos numericos de un array.
ejm:*/
const arrayDeNumeros = [1,2,3,4,5];
const sumarElementos = arrayDeNumeros.reduce((acumulador,elemento) => acumulador + elemento, 0);
console.log(acumulador);
console.log(elemento);
console.log(sumarElementos); //15...es la sumatoria de todo los numeros dentro del array

//ACCESORES

//split(): Convierte un String en Array. Deberas especificar entre parentesis el caracter separador entre cada elemento("," ";" "/", etc)
let string = "hola mundo";
let convertirAarray = string.split("/");
console.log(convertirAarray);

//join(): Convierte los elementos de un array en un string, separados por el separador que querramos.
const miArray5 = [1, 2, 3];
const cadena = miArray5.join('-');
console.log(cadena);    //1-2-3

const miArray6 = ["pera","piña","platano","manzana"]
const cadena2 = miArray6.join('/');
console.log(cadena2);   //pera/piña/platano/manzana


/*slice(): Devuelve una copia superficial de una porción de un array, especificada por un rango de índices.
-Si ponemos slice(posicionInicial,posicionFinal), se mostraran los elementos desde la posicionInicial hasta una posicion antes de la posicionFinal.
-Si no conocemos el total de elementos de un array y queremos acceder a todos los elementos de este, colocamos 
unicamente el 0 en posicion inicial; y si queremos acceder solo hasta el penultimo elemento del array, colocamos -1 como posicion final*/

const miArray7 = [1, 2, 3, 4, 5];
const subArray7 = miArray7.slice(0,3);//[1, 2, 3].. se muestran los elementos desde el indice 0 hasta un indice antes del 3
console.log(subArray7);
//const subArray7 = miArray7.slice(0,-1); //[1,2,3,4]

//toString():convierte un array en una cadena de caracteres y devuelve esa cadena (string)

//includes():verifica si un array contiene un valor específico y devuelve true si lo encuentra, o false si no.
const array = ["pera","platano","piña","papaya","pera"];
array.includes("piña"); // true ... xq si existe dentro del array
array.includes("papa"); // false... xq no existe dentro del array 

//indexOf():devuelve el primer índice en el que se encuentra un valor en un array, o -1 si el valor no se encuentra en el array.
array.indexOf("piña") //2 ...xq el elemento 'piña' esta en el indice '2' del array
array.indexOf("papa") //'-1' ...el elemento 'papa' no esta en el array

//lastIndexOf():devuelve el último índice en el que se encuentra un valor en un array, o -1 si el valor no se encuentra en el array.
array.lastIndexOf("pera")//4 ...el elemento 'pera' esta en el indice 1 y 4, pero lastIndexOf mostrara el ultimo


//DE REPETICION
//filter(): Crea un nuevo array con todos los elementos que cumplen una condición especificada en una función de retorno (callback).
//ejm 1:
let numeros = [1, 2, 3, 4, 5, 6]; //extraere los nros pares
let resultado = numeros.filter(extraerNumero => extraerNumero % 2 === 0);
console.log(resultado) //2 4 6 

//ejm 2:
const numerosEnArray = [1, 2, 3, 4, 5];

const newArray = numerosEnArray.filter(function(elemento) { //aplicamos funcion normal dentro del filter
  console.log(elemento % 2 === 0); // false,true,false,true,false
});

//ejm3:
const numbersArray = [1, 2, 3, 4, 5];
const nuevoArray = numbersArray.filter(elemento => { //aplicamos funcion flecha dentro del filter
  if (elemento % 2 === 0 ) {
    console.log(`Los numeros pares son: ` + elemento) // Los numeros pares son: 2
  }                                                   // Los numeros pares son: 4
})


/*forEach():Se utiliza para recorrer los elementos de un Array y ejecuta una funcion para cada uno de esos elementos. 
ojo: No crea un nuevo array, simplemente itera sobre el array original y aplica la funcion a cada elemento.*/

//ejemplo 1:
const frutas = ["Manzana", "Banana", "Cereza"]; //primero se declara la variable (array)

frutas.forEach(function(fruta, indice) { //recorrera el valor y el indice de cada elemento del array.

  console.log(`Índice ${indice}: ${fruta}`);  //Índice 0: Manzana
                                              //Índice 1: Banana
                                              //Índice 2: Cereza
});

//ejemplo 2: forEach realiza modificacion y calculo con los valores del Array
let arr  = [1,2,3,4,5]; //array original
let resultadoFinal = []; //array vacio que almacenara los valores modificados del Array original

numeros.forEach(function(valores){
  nuevoValor = valores + 1;
  resultadoFinal.push(nuevoValor)
})
console.log(resultadoFinal); //[2, 3, 4, 5, 6]


//ejm 3:
let numeros2 = [1, 2, 3, 4, 5, 6];
numeros2.forEach(numero => console.log(`usando forEach ` +numero));//imprime todos los valores del array

let numeros3 = [1, 2, 3, 4, 5, 6];
for(numeroPar of numeros3){
    if(numeroPar % 2 === 0){
        console.log(numeroPar)
    }
 }
//console.log(numeros3); 

/*map():Se usa para recorrer los elementos de un array y realiza una accion en cada uno de los elementos. Este metodo 
crea un nuevo array con los elementos modificados sin alterar el array original.

sintaxis:
        const nuevoArray = array.map(function(elemento, indice, arreglo) {
            // Devuelve el nuevo valor para el elemento
        });         */

//ejm 1:
const arreglo = [1, 2, 3, 4, 5];

const nuevoArreglo = arreglo.map(function(elemento) {
  return elemento * 2; //cada elemento se multiplicara por 2
});
console.log(nuevoArreglo); //[2, 4, 6, 8, 10]

















/* fuentes a revisar mañana:
https://oregoom.com/javascript/array/
*/