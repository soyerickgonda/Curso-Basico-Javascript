function crearUsuario() {
  // Crea una Clase de ES6 o una función constructora llamada "Usuario".
  // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
  // El valor de cada propiedad la recibirá por parámetro.
  // Además, esta clase debe tener un método llamado "saludar".
  // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
  // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
  // Retornar la clase.
  class Usuario {
    constructor(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }

    saludar() {
      return "Hola, mi nombre es " + this.nombre;
    }
  }
  const Persona1 = new Usuario(
    "usuario1",
    "Alessandro",
    "aless24@email.com",
    280324
  );
  console.log(Persona1.saludar());
  return Usuario;
}
crearUsuario();

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructora llamada "Usuario".
  // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
  // El valor de cada propiedad la recibirá por parámetro.
  // Además, esta clase debe tener un método llamado "saludar".
  // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
  // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
  // Retornar la clase.
  function Usuario(usuario, nombre, email, password) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }
  Usuario.prototype.saludar = function name() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  };

  const Usuario1 = new Usuario(
    "usuario 1",
    "Valentino",
    "Valent24@email.com",
    280324
  );
  Usuario1.saludar();
  return Usuario;
}
crearUsuario();

// ¿Como invertir un string?
//usando metodo string 'split'
let string = "hola mundo";
let conversion = string.split("");

for (i = conversion.length - 1; i >= 0; i--) {
  console.log(`${conversion[i]}`); // 'odnum aloh' ... se va a mostrar pero de manera vertical en la consola
}

//usando bucle for dentro de string
let cadena = "hola";
let cadenaInvertida = "";

for (i = cadena.length - 1; i >= 0; i--) {
  cadenaInvertida = cadenaInvertida + cadena[i];
}
console.log(cadenaInvertida); //aloh ... es hola pero invertido

//ejercicio de practica
// Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
// El método debe llamarse "reverse".
// [PISTA]: necesitarás utilizar el objeto "this".

function agregarStringInvertida() {
  String.prototype.reverse = function () {
    let cadenaInvertida = "";
    for (i = this.length - 1; i >= 0; i--) {
      cadenaInvertida = cadenaInvertida + this[i];
    }
  };
  const cadena1 = "hola";
  cadena1.reverse();
}
agregarStringInvertida();

function agregarStringInvertida() {
  function String(cadena) {
    this.cadena = cadena;
  }

  String.prototype.reverse = function () {
    let cadenaInvertida = "";
    for (i = this.cadena.length - 1; i >= 0; i--) {
      cadenaInvertida = cadenaInvertida + this.cadena[i];
    }
    console.log(cadenaInvertida);
  };
  const cadena1 = new String("hola");
  cadena1.reverse();
}
agregarStringInvertida();

function agregarStringInvertida() {
  String.prototype.reverse = function () {
    // "this" se refiere a la cadena a la que se llama el método
    let stringInvertida = "";
    for (let i = this.length - 1; i >= 0; i--) {
      stringInvertida += this[i];
    }
    console.log(stringInvertida);
  };

  // Ejemplo de uso
  let miString = "hola";
  miString.reverse();
}
agregarStringInvertida();















//EJERCICIO DE CLASE - SOY HENRY
//ejm 05
class Persona {
  constructor(nombre, edad, hobbies, amigos) {
    this.nombre = nombre;     //'string'
    this.edad = edad;         //entero
    this.hobbies = hobbies;   //[' ']
    this.amigos = amigos;     //[{ }]
  }

  addFriend(nombre, edad) {
   this.amigos = [{ nombre:nombre, edad:edad}]
  }

  
  addHobby(hobby){
    this.hobbies = [hobby]
  }

  getFriends(){
    let arrayVacio = [];
    arrayVacio.push(this.amigos[0].nombre)
    return arrayVacio;
  }

  getHobbies () {
    let hobbiesArray = [];
    hobbiesArray.push(this.hobbies)
  }

}

//instanciamos la clase(creamos un nuevo objeto)

const Persona1 = new Persona();
Persona1.addFriend(nombre = 'Aless', edad = 20);
Persona1.addFriend(nombre = 'Vale', edad = 20);

console.log(Persona1);

