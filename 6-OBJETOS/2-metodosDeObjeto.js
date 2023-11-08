/*Metodo constructor
Object(): crea un nuevo objeto y se usa jutno con la palabra clave 'new'*/
const objeto = new Object();
objeto["propiedad1"] = "primer valor del objeto";
console.log(objeto); //{ propiedad1: 'primer valor del objeto' }

/*Métodos estaticos
Object.assign():Copia los valores de todas las propiedades de uno o más objetos fuente(origen) y lo pasan a un objeto asignado(destino).*/
const objeto1 = { a: 1, b: 2, c: 3 };
const nuevoObjeto = Object.assign(objeto1);
console.log(nuevoObjeto); //{ a: 1, b: 2, c: 3 }

/*Object.entries(): Convierte un objeto en array, devolviendo todos los pares [clave:valor] en formato string.*/
const objeto2 = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" };
const nuevObjeto2 = Object.entries(objeto2);
console.log(nuevObjeto2); //[['1','a'],['2','b'],['3','c'],['4','d'],['5','e']]

//Object.fromEntries(): Convierte un array en objeto, devolviendo todos los pares [clave:valor] ingresados en el array.
const arrayUsuario = [
  ["nombre", "Juan"],
  ["edad", 30],
  ["ciudad", "Madrid"],
];
const deArrayAobjeto = Object.fromEntries(arrayUsuario);
console.log(deArrayAobjeto); //{nombre:'Juan', edad: 30, ciudad: 'Madrid'}

/*NOTA: con 'fromEntries()' tambien podemos realizar operaciones mas complejas como: 
adulterar los valores de las propiedades de un objeto*/
const object1 = {a: 1, b: 2, c: 3};
const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]) //convertimos en array el object1 y lo iteramos con el metodo map
);                                                  //map() ejecutara una funcion con 2 parametros; el segundo parametro se x 2
console.log(object2);                               //el array final lo convertimos a objeto: {a:2,b:4,c:6}




//Object.freeze():Congela un objeto, impidiendo que otro código pueda modificar/eliminar las propiedades y valores del objeto original.
const colores = { 1: "rojo", 2: "azul", 3: "verde" };
Object.freeze(colores); //el metodo freeze no permite que el objeto original se modifique
colores[3] = "morado";
console.log(colores); //{'1':'rojo','2':'azul','3':'verde'}
//{ '1': 'rojo', '2': 'azul', '3': 'morado' }..este seria el nuevo objeto sin el método Object.freeze




//link para seguir revisando los metodos de objetos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
