//ASIGNAR PROPIEDADES A UN OBJETO (clave:valor)
//1) Inicialización de propiedades en la creación del objeto:(es mas simple)
const moto = {
    marca : "Honda",
    modelo : "Pistera"
}
console.log(moto); //{ marca: 'Honda', modelo: 'Pistera' }

//2) Usando el Dot-Notation (notacion por punto .) para asignar propiedades(clave:valor)
const auto = { };
auto.marcas = ["Lamborgini","Ferrari","Porshe"];
// console.log(auto); // { marcas: [ 'Lamborgini', 'Ferrari', 'Porshe' ] }
auto.año = "2000";
auto['precio']=("dolares");
auto.año = "soy un string";
console.log(auto); // { marcas: [ 'Lamborgini', 'Ferrari', 'Porshe' ], 'año': '2000' }


//3) Usando el Bracket Notation (notacion por corchetes[]) para asignar propiedades(clave:valor)
let miObjeto = {};
//Declaramos 3 variables que luego lo usaremos para insertarlo en el objeto atraves de una propiedad 
let str = "myString";
let random = Math.random();
let obj = new Object();

//asignamos propiedades(clave:valor) al objeto creado 
miObjeto.type = "sintaxis de punto";
miObjeto["@fecha de creacion"] = "simbolo y espacios vacios entre el property name";
miObjeto[str] = "valor de cadena"; //[str] hace referencia al valor de la variabe str... myString : 'valor de cadena',
miObjeto.str = "valor de cadena"; //str es el nombre de una propiedad mas... str :'valor de cadena'
miObjeto[random] = "Numero aleatorio"; //[ramdon] hace referencia al valor de la variabe random
miObjeto[obj] = "soy un nuevo objeto", //[obj] hace referencia al valor de la variabe obj
miObjeto[""] = "Mira, tbn puedo ser una cadena vacia como nombre de propiedad"
console.log(miObjeto); // mostrara el objeto con todas las propiedades creadas junto con su valor

//accedemos al valor de una propiedad por medio de una variable (entre '' va el nombre de la propiedad)
let propertyName = "str";
console.log(miObjeto[propertyName]); //'valor de cadena'

/*::Recuerda:: 
La notación de corchetes se utiliza cuando el 'nombre de la propiedad' es dinámico o contiene caracteres especiales, espacios 
o inicia con un número.
*Nota*:
Ten en cuenta que los nombres de las propíedades(claves) con notacion en corchetes [] se convierten en string*/

//4)Object.assign():Se utiliza para agregar propiedades de un objeto fuente(origen) a un objeto destino.
const objetoDestino = {};
const objetoFuente = {propiedad : "valor de la propiedad"};
Object.assign(objetoDestino, objetoFuente);
console.log(objetoDestino); //{ propiedad: 'valor de la propiedad' }

const primeraLista = { a:'Richard', b:'Gilfoy', c:'Dinesh', d:'Backman', e:'Lori'};
const listaFinal = Object.assign(primeraLista);
delete listaFinal.e; // Elimina la propiedad 'e' del nuevo objeto
console.log(listaFinal); //{ a: 'Richard', b: 'Gilfoy', c: 'Dinesh', d: 'Backman' }

/*5)Spread Operator: Podemos usar el operador de propagacion para copiar todas las propiedades de un objeto fuente(origen) a un objeto destino; incluso 
podemos modificar los valores de esas propiedades */
const objetoDeOrigen = {nombre : "Ronaldo", club : "Manchester United", pais : "England"}; //copiamos las propiedades de objetoDeOrigen a objetoDeDestino y 
const objetoDeDestino = {...objetoDeOrigen, club : "Real Madrid", pais : "España"};        //en el proceso hemos sobreescrito las propiedades 'club' y 'pais'
console.log(objetoDeDestino); //{ nombre: 'Ronaldo', club: 'Real Madrid', pais: 'España' }





