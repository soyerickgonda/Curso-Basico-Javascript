//practica ejercicios que recorran array de objetos
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
      const precioFinal = objetoProducto.precioDelProducto - (objetoProducto.precioDelProducto * objetoProducto.porcentajeDeDescuento);
      return precioFinal;
    }
  }
//creamos el objeto con los valores
const producto = {
  precioDelProducto : 100,
  porcentajeDeDescuento : 0.20,
}
agregarMetodoCalculoDescuento(producto);

//llamamos a la funcion calcularPrecioDescuento para que nos muestre el resultado de precioFinal
const precioFinal = producto.calcularPrecioDescuento();
console.log(precioFinal);




 














//ejemp xx
function miFuncion (parametro) {
    parametro = {
        nombre : 'pedro',
        apellido : 'gonda',
        age : 30,
        info : function (){
            return `su nombre es ${this.nombre} y tiene ${this.age} años`
        }
    }
    return parametro.info()
}
const parametro = {}
console.log(miFuncion(parametro))