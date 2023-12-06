/*ARRAYS []
Es una estructura de datos que permite almacenar un conjunto ordenado de elementos que pueden ser: (string, numeros, boleanos,etc).
Para acceder a los elementos del array se hace mediante su índice numérico (0, 1, 2, etc.).*/
//ejm 1
const frutas = ["pera","platano","piña"];
console.log(frutas);    //[pera,platano,piña]
console.log(frutas[2]); //piña...NOTA:usamos [] para acceder al indice de un elementos en especifico.
frutas[1] = "toronja";  //CAMBIAMOS el valor de un indice (cambiamos el valor del indice 1 'platano' por 'toronja')
console.log(frutas);    //[pera,toronja,piña]
console.log(frutas[5]); //mostrara 'undefined' porque el indice 5 si existe, pero no tiene un valor asignado
frutas[5] = "melon";    //asignaremos un valor al indice 5 ('melon')
console.log(frutas);    //[ 'pera', 'toronja', 'piña', <2 empty items>, 'melon' ]..en el indice 5 se muestra la fruta 'melon'

//ejm 2
const verduras = ["papa","limon","tomate","piña"];
console.log(`El array inicial es ${verduras}`); //El array inicial es papa,limon,tomate,piña
verduras[3] = "kion";   //CAMBIAMOS el valor del indice 3 'piña' por 'kion'
console.log(`El array modificado es ${verduras}`);  //["papa","limon","tomate","kion"]
let ultimaVerdura = verduras[verduras.length -1]; //usamos el -1 para acceder al ultimo elemento del array
console.log(ultimaVerdura);     //'kion'

/*RECUERDA:Para acceder al ultimo elemento de un array usamos la sintaxis: [nombreDelArray.length -1]*/

//ejm 3:
let user1 = ["David","Beckam","Football player","England"];
console.log(user1);//['David', 'Beckam', 'Football player', 'England']

let frase = `El jugador se llama ${user1[0]} ${user1[1]}
            su profesion es ${user1[2]},su nacionalidad es ${user1[3]}`
console.log(frase); //El jugador se llama David Beckam, su profesion es Football player,su nacionalidad es England


/*MATRIZ BIDIMENCIONAL(ARRAY DENTRO DE UN ARRAY)
Un array bidimensional en JavaScript es un array que contiene otros arrays como elementos. Cada elemento es un array adicional,
lo que permite crear una estructura de datos en forma de matriz.*/

//ejm: creamos una matriz de 2 filas y 3 columnas
let matriz = [[1, 2, 3], [4, 5, 6]];
let elemento = matriz[1][2];  //accedemos al indice 1, subindice 2 
console.log(elemento); //6

/*Los arrays bidimensionales se pueden usar para representar y manipular datos en una variedad de aplicaciones, 
como juegos de mesa, hojas de cálculo y bases de datos.*/

//PROFUNDIZAR MAS ESTE TEMA