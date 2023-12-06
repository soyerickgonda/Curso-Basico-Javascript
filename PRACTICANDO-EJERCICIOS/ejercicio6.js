//ejercicio 1:
function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  let total = 0;
  for (valor in objetoUsuario.post) {
    total = total + objetoUsuario.post[valor].like;
  }
  return total;
}
const objetoUsuario = {
  post: [{ like: 10 }, { like: 11 }, { like: 100 }],
};
console.log(sumarLikesDeUsuario(objetoUsuario));

//ejercicio 2
function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  objetoProducto.calcularPrecioDescuento = function () {
    const precioFinal =
      objetoProducto.precioDelProducto -
      objetoProducto.precioDelProducto * objetoProducto.porcentajeDeDescuento;
    return precioFinal;
  };
}
//creamos el objeto con los valores
const producto = {
  precioDelProducto: 100,
  porcentajeDeDescuento: 0.2,
};
agregarMetodoCalculoDescuento(producto);

//llamamos a la funcion calcularPrecioDescuento para que nos muestre el resultado de precioFinal
const precioFinal = producto.calcularPrecioDescuento();
console.log(precioFinal);

/*ejercicio 3
-Crea una Clase de ES6 o una función constructora llamada "Usuario".
-El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
-El valor de cada propiedad la recibirá por parámetro.
-Además, esta clase debe tener un método llamado "saludar".
// Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
-El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
-Retornar la clase.*/
function crearUsuario() {
  class Usuario {
    constructor(usuario, nombre, email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }

    Saludar() {
      return `Hola, mi nombre es ${this.nombre}`;
    }
  }

  const Usuario1 = new Usuario(
    "usuario1",
    "Alessandro",
    "aless@email.com",
    1234
  );
  console.log(Usuario1.Saludar());
}
crearUsuario();

//el mismo ejercicio de arriba, pero usando 'funcion constructora' y prototype para crear metodo
function crearUsuario() {
function Usuario (usuario, nombre, email="aless@email.com", password=2803){
  this.usuario = usuario;
  this.nombre = nombre;
  this.email = email;
  this.password = password;
}

Usuario.prototype.saludar = function () {
  return `Hola, mi nombre es ${this.nombre}`
}

const PrimerUsuario = new Usuario ('aless','Alessandro');
console.log(PrimerUsuario.saludar())
}

crearUsuario();


/*ejercicio 4
-Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
-El método debe llamarse "reverse".
-[PISTA]: necesitarás utilizar el objeto "this". este hara referencia al objeto que invoque al metodo reverse*/
function agregarStringInvertida() {

  String.prototype.reverse = function () {
    let palabraInvertida = '';
    for(i=this.length -1; i>=0; i--){
      // console.log(this[i]);
      palabraInvertida = palabraInvertida + this[i]
    }
    console.log(palabraInvertida);
  }

  const PrimeraPalabra = new String('HOLA');
  const SegundaPalabra = new String('MAMA');
  PrimeraPalabra.reverse();
  SegundaPalabra.reverse();
}
agregarStringInvertida();


