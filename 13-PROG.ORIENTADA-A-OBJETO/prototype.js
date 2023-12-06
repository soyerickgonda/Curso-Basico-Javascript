/*:::NOTA:::
Los Prototipos siempre estuvieron presentes en Javascript, sin embargo apartir de ECMAScript 2015 se incorpora la sintaxis de 
'clases', este proporciona una forma más clara y orientada a objetos de trabajar con prototipos, facilitando la creación, 
el manejo de objetos y la implementación de herencia.
----------------------------------------------------------------------------------------------------------------------------*/

/*Los 'prototype'(prototipos en español), son un objeto que sirven como plantillas para la creacion de nuevos objetos, estos
nuevos objetos heredaran propiedades y metodos del prototipo.
(Nota: Crear un objeto 'prototype', seria como crear una nueva clase que herede las propiedades y metodos de la clase padre)
*/

//ejemplo 1
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
Persona.prototype.saludar = function () {
  console.log(`hello, my name es ${this.nombre}, i am ${this.edad} years old`);
};

const Persona1 = new Persona("Franccesco", 10);
const Persona2 = new Persona("Alessandro", 12);
Persona1.saludar();
Persona2.saludar();

//ejemplo 2
Array.prototype.mayorQueTres = function () {
    let arregloModificado = [];
  for (i = 0; i < this.length; i++) {
    console.log(this[i]);
  }
    return arregloModificado;
};

let arreglo = [1, 2, 3, 4, 5];
let nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo);

console.log(this);

//el this guarda relacion con el objeto 'usuario'.
const usuario = {
  metodo: function () {
    console.log(this);
  },
};
console.log(usuario); //te devuelve el metodo 'usuario' completo : { metodo: [Function: metodo] }
usuario.metodo(); //

//creamos nuevo metodo que multiplique cada uno de los numeros *2 
const arrayNumber = [1,3,5,7,9];

arrayNumber.prototype.multiplicar = function () {
  for(i=0; i<arrayNumber.length; i++){
    console.log(arrayNumber[i]);
  }
}