/*OBJECT{ }
Es una estructura de datos que permite almacenar propiedades de pares (clave-valor). Cada valor se asocia con una clave única
dentro del objeto. 

/*::RECUERDA:: 
-Se considera un "método" a una función que está asociada a un objeto. Cuando defines una función dentro de un objeto, y esa función es una 
 propiedad del objeto, generalmente se la llama un "método" del objeto.
-La propiedad de un objeto nunca debe estar vacio, siempre debe tener un valor asignado
 (Nota:Un objeto en JS es conocido en otro lenguaje de programacion como Array asociativo (en PHP se le conoce asi))*/

//FORMAS DE CREAR OBJETOS (existen 2)
/*1)Usando el constructor Object(): Declaramos una variable cuyo valor sera un new Object; debajo de este empiezas a asignar 
las propiedades(clave:valor)*/
let car = new Object(); //objeto 'car'
car.make = "ford";
car.model = "mustang";
car.year = 1989;

console.log(car);

//2)Usando el objeto literal: Declaramos un objeto con todas sus propiedades (clave:valor)
let carro = {
    marca : 'ford',
    'modelo1' : 'mustang',
    año : 1989
}
console.log(carro.modelo1); 

/*FORMAS DE DECLARAR PROPIEDADES EN UN OBJETO (existen 2)
1) Sin comillas: No usamos comillas cuando el nombre de la propedad es un identificador válido en JavaScript.
 Un identificador válido consiste en letras, dígitos y guiones bajos, pero NO PUEDE comenzar con un número.*/

const objeto1 = {
  propiedad : "soy el valor de la propiedad",
};
console.log(objeto1.propiedad);

/*2) Con comillas: Usamos comillas cuando el nombre de la propiedad no cumple con las reglas de un identificador válido en Js.
 Un identificador no es valido si el nombre contiene espacios, caracteres especiales o comienza con algun número.*/

const objetoDos = {
  "nombre completo": "John Doe",
  '2doNombre': "Jane",
};
console.log(objetoDos["2doNombre"]);
//Nota: Para acceder a este tipo de propiedades se usa la 'Notacion Corchetes[]', la notacion punto(.) no sera valido

//FORMAS DE ACCEDER A LAS PROPIEDADES DE UN OBJETO (existen 3)
const persona = {
  nombre: "Sergio",
  apellido: "Martinez",
  edad: 32,
  residencia: {
    pais: "Peru",
    provincia: "Lima",
    distrito: "Lima Cercado",
  },
};

//1)Dot-Notation (Notacion con punto .)
console.log(persona.nombre); //Sergio
console.log(persona.residencia.distrito); //Lima Cercado

//2)Bracket Notation (Notacion con corchetes [])
console.log(persona["apellido"]); //Martinez
console.log(persona["residencia"]["pais"]); //Peru

//Nota: Tanto con el dot-notation como con el bracket-notation, podemos crear propiedades a un objeto.

//3)Almacenando el nombre de la propiedad como string dentro de una variable
let nombreDeLaPropiedad = 'residencia' ;
let propiedadDeseada = "distrito"
console.log(persona[nombreDeLaPropiedad][propiedadDeseada]); //Lima Cercado ... combinamos 2 variables para acceder al valor deseado




//RECORRER LAS PROPIEDADES DE UN OBJETO CON EL BUCLE FOR IN
const usuario = {
  name: "Freddy",
  lastName: "Krugger",
  nationality: "American",
};

for (persona in usuario) {
  //persona recorre el objeto "usuario" y retorna los nombres de las propiedades(nombreDePropiedad:valorDePropiedad)
  console.log(persona); // name,lastName,nationality
  if (persona === "name") {
    console.log(`${persona} : ${usuario[persona]}`); //name:"Freddy"
  }
}