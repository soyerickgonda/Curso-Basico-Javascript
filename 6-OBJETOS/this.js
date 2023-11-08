/*'this' es una palabra clave que se utiliza para hacer referencia al contexto en el que se ejecuta una
función; puede cambiar dependiendo de como se llama a la funcion*/

/*1)this en funciones normales:
Hace referencia al objeto que llama la función, esto significa que el valor de 'this' depende de 
cómo se invoca la función.
En el contexto global (fuera de cualquier función), 'this' hace referencia al objeto global, que en un
navegador es window. */
//ejm 1:
const obj = {
  name: "Objeto",
  greet: function () {
    console.log("Hola, soy " + this.name);
  },
};
obj.greet(); // "Hola, soy Objeto"

//ejm 2:'this' toma el valor de la propiedad 'name' del objeto 'persona'.
function persona() {
    let info = `El nombre de la persona es ${this.name}`
    console.log(info)
}
const objetoPersona = {
    name : 'Henrry',
    funcion : persona, //el valor de propiedad es la funcion 'persona'
}
objetoPersona.funcion();//El nombre de la persona es Henrry

/*2)'this' en eventos y callbacks 
En eventos de HTML y callbacks, this a menudo hace referencia al elemento que desencadenó el evento.

<button id="myButton">Haz clic</button>
<script>
  const button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    console.log("Elemento que hizo clic: " + this.id);
  });
</script>   */

/*3) Uso de 'call()'
Estos métodos te permiten especificar el valor de this. Primero declaramos la funcion, segundo creamos 
el objeto que luego pasaremos como argumento cuando llamemos a la funcion.*/

function saludar() {
  console.log("Hola, soy " + this.name);
}

const persona1 = { name: "Persona1" };
const persona2 = { name: "Persona2" };

saludar.call(persona1); // "Hola, soy Persona1"
saludar.call(persona2); // "Hola, soy Persona2"

/*3) Uso de 'apply()' 
Se utiliza para asignar el valor de this en una función y ejecutar la función con un conjunto de argumentos
que se pasan como un array

sintaxis: 
        funcion.apply(thisArg, [argsArray])

-funcion: El nombre de la función en la que deseas asignar el valor de this.
-thisArg: Es el valor de la propiedad del objeto creado que utilizara this dentro de la función.
-argsArray: Un array o objeto similar a un array que contiene los argumentos que se pasarán a la función.*/

function saludar(parametro1, parametro2) {
  console.log(this.saludo + " " + parametro1 + " " + parametro2);
}

const persona = { saludo: "Hola" };
const mascota = { saludo: "Guau" };

saludar.apply(persona, ["amigo", "mío"]); //son los argumentos que pasaremos a la funcion
                                          //"Hola amigo mío"
saludar.apply(mascota, ["fiel", "compañero"]); // "Guau fiel compañero"
