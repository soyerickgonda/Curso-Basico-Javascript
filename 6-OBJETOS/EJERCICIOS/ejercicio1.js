/*ejercicio 1 (sencillo):
'This'en un metodo de objeto hace referencia al objeto padre*/
let metodo = function () {
  console.log(this); //this hace referencia objeto windows
};
metodo();

//ejercicio 2: this dentro de metodos y funciones
const objeto = {
  nombre: "pepe",
  apellido: "perez",
  imprimirNombre: function () {
    //metodo imprimirNombre
    console.log(this); //hace referencia a todo el objeto
    console.log(this.nombre); //hace referencia a la propiedad 'nombre'
  },
  direccion: {
    pais: "Peru",
    capital: "Lima",
    obtenerDireccion: function () {
      //metodo obtenerDireccion
      console.log(this); //hace referencia al objeto 'direccion'

      let nuevaDireccion = () => {
        console.log(this.capital); //hace referencia a la propiedad 'capital' del objeto 'direccion'
        console.log(this); //hace referencia al objeto 'direccion'
      };
      nuevaDireccion();
    },
  },
};
objeto.imprimirNombre();
objeto.direccion.obtenerDireccion();
//Nota: objeto.imprimirNombre() mostrara lo mismo que console.log(objeto);

//ejercicio 3:
const objetoPrueba = {        //objeto padre
  pais: "Peru", //2 propiedades directos del objeto raiz
  primerMetodo: function () {       //
    console.log(this); //hace referencia a objetoPrueba y sus propiedades directas (pais,metodo, segundoMetodo)
  },
  segundoMetodo: function () {
    let pais = 'Chile';
    console.log(this); //hace referencia a objetoPrueba y sus propiedades directas (pais,metodo, segundoMetodo)
    let ultimoMetodo = function () {
      console.log(this.pais); //Chile
    }.bind(this);
    ultimoMetodo(); //imprime la variable ultimoMetodo y su funcion por completo
    console.log(pais); //Peru
  },
};
objetoPrueba.primerMetodo(); //{pais: 'Peru', primerMetodo: ƒ, segundoMetodo: ƒ}
objetoPrueba.segundoMetodo(); //{pais: 'Peru', primerMetodo: ƒ, segundoMetodo: ƒ}
                              // ƒ () {
                              //   console.log(this.pais);
                              //   console.log("ajhadad");
                              // }
