//FUNCION COMO VALOR DE UNA PROPIEDAD EN UN OBJETO
//ejm 1
const miFuncion = {
  mensaje: function () {
    return `Boa tarde homem`;
  },
};
console.log(miFuncion.mensaje());

//ejm 2
const user = {
  name: "Diego",
  lastName: "Bertiz",
  age: 30,
  adress: {
    country: "Chile",
    city: "Santiago",
  },
};
// console.log(user.adress.city);
user.adress.capital = "Santiago";
console.log(user.adress);
delete user.adress.city;
console.log(user);

//ejem 2
let alimentos = {};
const funcionAnonima = function (param1, param2) {
  alimentos[param1] = ["pera", "manzana", "platano", "verduras"];
  alimentos[param2] = ["hamburguesas", "papas fritas", "gaseosas", "piqueos"];
};
funcionAnonima("Saludable", "No Saludable");
console.log(alimentos);

/*lo que hicimo aca fue lo siguiente:
-creamos un objeto vacio
-creamos una funcion anonima que tendra 2 parametros (param1, param2). 
--esos parametros serviran a la vez como propiedades para el objeto
-al momento de asignarle las 2 propiedades al objeto, debemos asegurarnos que estos esten vinculados con los parametros de la funcion
-para este tipo de casos, la unica manera de hacerlo posible es usando el bracket-notation (notacion por corchetes [])
::recuerda:: los parametros que le pasemos al objeto y que estaran viculados con la funcion, van entre [] y sin comillas
*/

//uso del this
const animal = {
  especie: "canina",
  raza: "pastor aleman",
  color: "marron caramelo",
  info: function () {
    return `mi perro es de raza ${this.raza}`;
  },
};
console.log(animal.info());

//ejm distinto
// Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
// En ese caso retornar true. Caso contrario, false.
function tienePropiedad(objeto, propiedad) {
  objeto[propiedad];

  console.log(propiedad); //'propiedad2'
  if(propiedad == 'propiedad'){
    console.log(true);
  } else {
    console.log(false);
  }
}
const objetoRecibido = {
 
};
tienePropiedad(objetoRecibido, 'propiedad');



function tienePropiedad(objeto, propiedad) {
    // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
    // En ese caso retornar true. Caso contrario, false.

}



