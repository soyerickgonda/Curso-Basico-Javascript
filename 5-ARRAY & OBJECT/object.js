//OBJECT{}
/*Definicion: Es una estructura de datos que permite almacenar pares clave-valor. Cada valor se asocia con una 
clave única dentro del objeto.
A diferencia de los arrays, los objetos no tienen un orden específico para sus elementos y no se accede a ellos
mediante un índice numérico, sino a través de sus claves.

Sintaxis:
*Sin comillas: Puedes usar nombres de propiedades sin comillas si el nombre es un identificador válido en JavaScript.
 Un identificador válido consiste en letras, dígitos y guiones bajos, pero no puede comenzar con un número.
        
        const miObjeto = {
            propiedad1 : valor1  //esta es una propiedad del objeto, compuesta de (clave:valor)
        }

*Con comillas: Debes usar comillas si el nombre de la propiedad no cumple con las reglas de un identificador válido,
 como si contiene espacios, caracteres especiales o comienza con un número. 

        const persona = {
        "nombre completo": "John Doe",
        "número-identificador": 12345,
        "2doNombre": "Jane",
        };

Nota:Un objeto en JS es conocido en otro lenguaje de programacion como Array asociativo (en PHP se le conoce asi)
*/

//Ejemplo Beckam en Object
console.log("Ejemplo Beckam en Object")
let user = {
    name : "David",
    lastName : "Beckam",
    profession : "Football player",
    nationality : "England",
};

console.log(user); //{name: 'David', lastName: 'Beckam', profession: 'Football player', nationality: 'England'}

let frase = `El jugador se llama: ${user["name"]} ${user["lastName"]},
su profesion es: ${user["profession"]},
su nacionalidad es: ${user["nationality"]}`

console.log(frase);

/*Recuerda:
Se puede acceder a las propiedades de un Objeto de 2 maneras:

-Notacion con punto (.)....es preferible usar esto
    console.log(player.name);     
    console.log(player.lastName);

-Notacion con corchetes []
    console.log(player["name"]); 
    console.log(player["lastName"]);
*/

//Ejemplo 2: Recorremos un Objeto con For..in
const usuario = {
    name : "Freddy",
    lastName : "Krugger",
    nationality : "American",
}

//una de las tantas formas de acceder al valor de la propiedad el objeto es usando el bucle For..in
for(persona in usuario){ //persona recorre el objeto "usuario" y retorna los nombres de las propiedades(nombreDePropiedad:valorDePropiedad)
    console.log(persona); // name,lastName,nationality
    if(persona === "name"){
    console.log(`${persona} : ${usuario[persona]}`) //name:"Freddy"
    }
}