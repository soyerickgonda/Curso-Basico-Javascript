/*'THIS'
Es una palabra clave que se utiliza para hacer referencia al objeto actual en el cual se esta ejecutando el codigo.
-En el contexto global 'this' hace referencia al 'objeto global' (en el navegador es windows)
-En el conexto de un objeto, 'this' hace referencia a ese mismo objeto
-Dentro de una funcion, el valor de 'this' dependera de como se invoque la funcion.
-El 'this' de un arrow function, hereda el valor del 'this' del contexto en el que fue creada dicha funcion flecha.
*/

/*¿Qué es el Binding ó Enlazamiento en Js?
 El binding es el proceso de establecer una relación entre el contexto o alcance de una función y el valor que tendra 'this'.
 En otras palabras, binding determina a que objeto o contexto pertenece 'this' en una funcion especifica.
Existen 5 tipos de Enlazamiento o Binding: */

/*1)Lexical Binding (Enlazamiento Lexico) 
Este enlazamiento ocurre cuando se utiliza una funcion dentro de otra funcion. La funcion interna tiene acceso 
al 'this' de la funcion externa.
Este tipo de enlazamiento se suele dar en los 'arrow function (funciones flechas)'*/

/*. En JavaScript, una función flecha (=>) no tiene su propio this; en su lugar, hereda el this del contexto
en el que fue creada. Si una función flecha está dentro de un objeto y es una propiedad directa de ese objeto, 
su this será el mismo que el this del contexto en el que se definió la función flecha. */

//ejm 1:
const person = {
  name: "Gloria",
  parentesco: "madre",
  info: function () {
    const familia = () => {
      console.log(`${this.name} es mi madre`);
    };

    console.log(`Mi ${this.parentesco} es ${this.name}`);
    familia(); //invocamos la funcion flecha
  },
};
person.info();


//ejm 2: caso donde 'this' de la funcion flecha hace referencia al objeto windows.
const persona = {
  name: "Gloria",
  parentesco: "madre",
  info: () => {
    //metodo
    const familia = () => {
      //definimos una variable cuyo valor es una funcion flecha
      console.log(`${this.name} es mi madre`); //undefined
    };
    familia(); //invoco la funcion flecha

    console.log(`Mi ${this.parentesco} se llama ${this.name}`); //undefined
  },
};
person.info();

//Nota: ambos console.log mostran valor undefined, esto se debe a que el objeto windows no tiene ninguna propiedad 'name' ni 'parentesco'*/

/*2)New-Binding (Enlazamiento por instanciar nuevo objeto ) 
Este enlazamiento se da cuando instanciamos un nuevo objeto con la palabra clave 'new'. En ese caso 'this'
hace referencia al nuevo objeto que se esta creando*/
//ejm 1:
function Usuario(name) {
  this.name = name;
}

//instanciamos un primer objeto
const PrimerUsuario = new Usuario("Alessandro");
console.log(PrimerUsuario); //Usuario { name: 'Alessandro' }
console.log(PrimerUsuario.name); //Alessandro


/*3)Explicit-Binding (Enlazamiento Explicito)
Sirve para que nosotros elijamos exactamente que objeto queremos que sea 'this' cuando se ejecuta la funcion.
El explicit-binding ocurre cuando se utiliza cualquiera de los metodos (call, apply, bind) para establecer el 
valor de 'this' de manera explicita. */

//ejm 1: explicit binding
const aless = {
  //objeto
  nombre: "Alessandro",
  saludar: function (gritando, conDespedida) {
    //metodo saludar
    //console.log(this); //hace referencia al objeto 'aless'
    const saludoNormal = `Hola me llamo ${this.nombre}`;
    const despedidaNormal = `Chau!`;

    //usamos operador ternario
    const saludo = gritando ? saludoNormal.toUpperCase() : saludoNormal;
    const despedida = gritando
      ? despedidaNormal.toUpperCase()
      : despedidaNormal;
    console.log(saludo);

    if (conDespedida) {
      console.log(despedida);
    }
  },
};
// aless.saludar(true, true); //saludo en mayusc y CHAU!
// aless.saludar(true, false);//saludo en mayusc
// aless.saludar(false, false); //saludo en minusc
// aless.saludar(false, true); //saludo en minusc y chau

// ¿Como hacemos para que el metodo 'saludar' del objeto 'aless' tbn pueda ejecutarse dentro del objeto 'omar'?

//soluc 1: enchufando el metodo 'saludar' al objeto que queremos que ejecute dicho metodo
const omar = {
  nombre: "Omar",
  saludar: aless.saludar,
};
omar.saludar(); //'Hola me llamo Omar'

/*sol 2: usando 'call': este es un metodo que nos permite invocar una funcion (o metodo) cambiandole el contexto 
  (de esta manera cambiamos el valor que va a tomar 'this')*/
const omarcito = {
  nombre: "Omar",
};
aless.saludar.call(omarcito, true, true); //HOLA ME LLAMO OMAR
                                          //CHAU!

/*NOTA: Tambien podriamos usar el metodo 'apply', tiene una funcion similar a 'call'; la diferencia radica en que mientras
  a 'call' le pasamos parametros en forma de lista, a 'apply' se lo pasamos en forma de array [ ]
    ejm: 
        const omarcito = {
          nombre: "Omar",
        };
        aless.saludar.apply(omarcito, [true, true]); //HOLA ME LLAMO OMAR
                                                    //CHAU!
  */

/*Conclusión:
  Tanto 'call' como 'apply' son métodos en JavaScript que permiten invocar una función con un valor específico para 'this'
  (el contexto de la función), pasandoles argumentos individualmente separados por una coma en el caso del metodo 'call' 
  ó argumentos en forma de un array en el caso del metodo 'apply'*/


/*4)Implicit-Binding (Enlazamiento Implicito)
Se da este enlazamiento cuando se invoca al metodo de una funcion.
*/
//ejm 1:
const quienSoy = {
  name: "Aless",
  info: function () {
    console.log(`Mi nombre es ${this.name}`); // Mi nombre es Aless.
  },
};
quienSoy.info();

//ejm 2:
const primerObjeto = {
    numero: 4,
    metodo: function () { //creamos un metodo
      console.log(this); //{ numero: 4, metodo: [Function: metodo] }...hace referencia al objeto que contiene al metodo
      console.log(this.numero); //4..hace referencia a la propiedad 'numero' que esta dentro del objeto 'primerObjeto'
    },
  };
  primerObjeto.metodo(); 

//el mismo ejercicio(2) estructurado de otra manera
const segundoObjeto = { numero: 4 }; //definimos un objeto

function metodoFuncion() {
  console.log(this); //{ numero: 4, metodo: [Function: metodoFuncion] }
  console.log(this.numero); //4
}
segundoObjeto["metodo"] = metodoFuncion;
segundoObjeto.metodo();

/*Nota: Un truco para identificar el valor de 'this' es observar al primer objeto que esta a la izquierda
del punto (.) cuando se llama al metodo*/


/*5)Default-Binding (Enlazamiento por Defecto)
Este enlazamiento usa javascript por defecto cuando invocamos una funcion directamente (llamada tambien como funcion suelta), 
ya que no esta asociado a ningun objeto especifico.

Nota: si la funcion usa 'use strict', el valor de 'this' sera undefined*/

//ejm 1:
function funcionSimple() {
  // 'use strict'
  // console.log(this); //undefiend
  console.log(this); //this hace referencia al objeto window
}
funcionSimple();

//ejm 2:
function miFuncion(name) {
  this.name = name;
  console.log(`mi nombre es ${name}`);
  console.log(this); //hace referencia al objeto window
}
miFuncion("Valentino");
