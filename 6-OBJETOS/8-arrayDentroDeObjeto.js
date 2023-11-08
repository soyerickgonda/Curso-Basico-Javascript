//TRABAJAREMOS CON ARRAY DENTRO DE OBJETOS (usaremos tbn funciones)

/*Ejercicio 1:
-El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
-Debes agregar el "nuevoAmigo" al final de este arreglo y retornar el objeto final.*/
function agregarAmigo(objetoUsuario, nuevoAmigo) {
  objetoUsuario.amigos = [...objetoUsuario['amigos'], nuevoAmigo]; //usamos el spread operator para conservar los valores de 
                                                                   //la propiedad y luego le añadimos un nuevo valor
  return objetoUsuario;
  }
  const nombresDeAmigos = {amigos : ["pepe","pedro"]};
  console.log(agregarAmigo(nombresDeAmigos, 'marlon')); //{ amigos: [ 'pepe', 'pedro', 'marlon' ] }

  /*::Para conocimiento:: Si ejecutaras los 2 codigos de abajo , tendrias un resultado diferente al de arriba 
    *objetoUsuario['amigos'] = []; //{ amigos: [] }...lo que hacemos es asignar a la propiedad 'amigos' un array vacio
    *objetoUsuario.amigos = [...objetoUsuario['amigos'], nuevoAmigo]; //{ amigos: [ 'marlon' ] } ... ¿por que?
    Usamos el spread operator(...) para copiar el valor de 'objetoUsuario.amigos' que es un [] vacio y le añadimos el valor
    de tenga 'nuevoAmigo' como argumento de la funcion
 */

//objetos dentro de arrays
//cambiamos el valor de la propiedad de cada objeto de 'false' a 'true'
let usuarios = [{esPremium : false},{esPremium : true},{esPremium : false}];
//tendria que recorrer el array , acceder al valor del objeto y cambiar el valor
for(i=0; i<usuarios.length; i++){
  // console.log(usuarios[i]) //{esPremium : false}, {esPremium : true},{esPremium : false}
  usuarios[i].esPremium = true;
}
console.log(usuarios); //[ { esPremium: true }, { esPremium: true }, { esPremium: true } ]



//otro ejercicio
//debp acceder a los valores de la propiedad y sumar los 3 valores y mostrar el resultado final
objetoUsuario = {
  posts : [{likes : 10},{likes : 5},{likes : 12}]
}
let total = 0;
for(i=0; i<objetoUsuario.length; i++){
}
total = total + (objetoUsuario.posts[i].likes)
console.log(total);

//sumar elementos de un array
//sol. 1:
let sumatotal = 0;
let numbers = [2,4,5,6,7,8];
for(i=0;i<numbers.length;i++){
  sumatotal = sumatotal + numbers[i];
}
console.log(sumatotal); //32 es la suma de todos los numeros del array

//sol.2:
let numeros = [1,2,3,4,5,6,9,7,8];
let sumaTotal = 0;
let result = numeros.map(function (elementos) {
  sumaTotal = elementos + sumaTotal;
  return sumaTotal;
})
console.log(sumaTotal); //45 es la suma de todos los numeros del array

//sumar elementos de un objeto
//sol 1:
let miObjeto = {a : 1, b : 2, c : 3};

let totalsuma = 0;
for(e in miObjeto){
  totalsuma = totalsuma + miObjeto[e];
}
console.log(totalsuma)

//sol 2:
let miobjeto = {a : 11, b : 22, c : 33};
let resultado = miobjeto.foreach(function (e) {
  console.log(e); 
})
console.log(resultado)
