//ARRAYS []
/* Definicion:Es una estructura de datos que permite almacenar un conjunto ordenado de elementos. 
Estos pueden ser (string, numeros, boleanos, etc) y para acceder a cada uno de ellos se hace mediante un índice numérico (0, 1, 2, etc.).*/

let frutas = ["pera","platano","piña"];
console.log(frutas); //pera,platano,piña
document.write(frutas[2] + "<br>"); //piña...NOTA:usamos [] para acceder a la posicion(indice) de un elementos en especifico.
frutas[1] = "toronja"; //cabiamos el valor del indice 1 por toronja
document.write(frutas);//pera,toronja,piña
document.write(frutas[5] + "<br>"); //undefined...Recuerda que las posiciones dentro de un array ya estan 
                                    //definidas sin importar si esta escrita dentro del array o no.

/*RECUERDA:
-Que para cambiar el valor de un elemento dentro de un Array, solo debemos acceder a dicho elemento y 
asignarle el nuevo valor.*/

let verduras = ["papa","limon","tomate","piña"];
console.log(`El array inicial es ${verduras}`);
verduras[3] = "kion";   //(Aca estamos cambiando el valor del indice 3 por la palabra 'kion'
console.log(`El array modificado es ${verduras}`);  //["papa","limon","tomate","kion"]
let ultimaVerdura = verduras[verduras.length -1]; 
console.log(ultimaVerdura);     //'kion'

/*RECUERDA:Para acceder al ultimo elemento de un array usamos la sgte sintaxis: 
   nuevaVariable = nombreDelArray[nombreDelArray.length -1] */


//ejemplo 2:
let user1 = ["David","Beckam","Football player","England"];
console.log(user1);//['David', 'Beckam', 'Football player', 'England']

let frase = `El jugador se llama ${user1[0]} ${user1[1]}
su profesion es ${user1[2]}
su nacionalidad es ${user1[3]}`

console.log(frase);


//MATRIZ BIDIMENCIONAL(ARRAY DENTRO DE UN ARRAY)
/*Definicion: Un array bidimensional en JavaScript es un array que contiene otros arrays como elementos. Cada 
elemento es un array adicional, lo que permite crear una estructura de datos en forma de matriz.

Por ejemplo, una matriz de 2 filas y 3 columnas se puede crear de la siguiente manera:*/
let matriz = [[1, 2, 3], [4, 5, 6]];
let elemento = matriz[1][2];  // 6...estamos accediendo al elemento en la segunda fila y tercera columna

/*Los arrays bidimensionales se pueden usar para representar y manipular datos en una variedad de aplicaciones, 
como juegos de mesa, hojas de cálculo y bases de datos.*/

