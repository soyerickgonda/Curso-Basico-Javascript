/*Definicion:
La POO es un estilo de programación que utiliza los principios del paradigma orientado a objetos para organizar y estructurar 
el código (variables, constantes y funciones) para que sea sencillo entender, modificar y ampliar.

::NOTA::
Las 'propiedades' son variables y constantes incluidas en una 'clase', estas guardan informacion relacionada a la 'clase'.
Por otro lado las 'funciones' incluidas en una 'clase' se denominan 'Metodos' y estas realizan una accion relacionada a la 
'clase' */

//EXISTEN 2 MANERAS DE DECLARAR UNA CLASE

/*1) FUNCIÓN CONSTRUCTORA (metodo antiguo)
-Se declara una funcion cuyo nombre inicia con Mayuscula, seguido de los () en donde iran las parametros de la funcion que 
 luego serviran como propiedades de la clase. 
-Se utiliza la palabra clave 'this' para hacer referencia a las propiedades y métodos específicos de la instancia que se está creando.
-Los 'metodos' se crean dentro de la funcion y tambien se definen con la palabra 'this'. Estos métodos estarán disponibles 
 en todas las instancias de la clase.
-Los objetos (instancias) se crean utilizando la palabra clave 'new' seguida del nombre de la función constructora. 
 Los objetos creados de esta manera se almacenan en variables o constantes según sea necesario.
 ::Recuerda::Los objetos se crean fuera de la funcion constructora*/

function Auto(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
    this.info = function name() { //esto es un metodo dentro de la funcion constructora
        return `El auto es ${this.marca} del año ${this.año}, tiene ${this.puertas} puertas
        es de color ${this.color} y tiene ${this.ruedas} ruedas`
    }
 }
 let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
 console.log(miPrimerAuto.info());

/*2) EXPRESION DE CLASE (metodo actual)
-Se crea usando la palabra 'class' seguido del nombre que quieras ponerle a la clase.(Este debe iniciar con mayuscula)
-Dentro de la clase se usa el metodo 'constructor' para inicializar las 'propiedades' y configurar el objeto cuando se crea 
 una nueva instancia de la clase.
 -Se usa el 'this' para acceder a las propiedades de la instancia de la clase.
-Los metodos se crean fuera del constructor y su sintaxis es como si fuese una funcion.
-'Intanciar una clase' es lo mismo que 'crear un objeto de la clase'. (se hace fuera de las {} de la clase creada)*/

class Auto {
   constructor(puertas, color, marca, año, ruedas) {
      this.puertas = puertas;
      this.color = color;
      this.marca = marca;
      this.año = año;
      this.ruedas = ruedas;
      this.info = `El auto es ${this.marca} del año ${this.año}, tiene ${this.puertas} puertas
      es de color ${this.color} y tiene ${this.ruedas} ruedas`
   }

   info (){
    return this.info
   }
}
let miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2015, 4);
console.log(miSegundoAuto.info);

/*
:::CONCEPTOS BASICOS DE LA POO:::

1) Class: Es una forma de organizar codigo con la finalidad de simplificar el funcionamiento de nuestro programa. Una 'clase' es 
          como una plantilla que sirven para crear nuevos objetos. 

2) Constructor(): Sirve para inicializar y configurar las propiedades de un objeto.(cuando se instancia una clase). 

2.1) this.: Esta palabra clave se utiliza dentro de la 'Clase' para referenciar al 'objeto instanciado'(para ser
    ,       mas preciso, a la variable que usamos al instanciar)
        ejem:
            class Animal {
                constructor(name,raza,edad) {
                this.name = name;   
            }}                      //el this. hace referencia a perro (es como si dijese this.perro)
            ......
            const perro = new Animal(nombreDelPerro,raza,edad)

3) Propiedades: Son variables que se definen a traves del constructor mediante la palabra clave this.
    ejm: 
    class Auto {
        constructor (){             //el metodo constructor se ejecuta cuando se instancia.
            this.marca;
            this.modelo;
            this.año;
        }
    }

4) Metodos: Son funciones que estan asociados a un Objeto o una clase; estos pueden realizar acciones especificas relacionadas
            a ese Objeto.
    ejm: 
    objeto: 'carro'  - metodo: 'arrancar'
    NOTA: Recuerda que las 'Propiedades' y 'Metodos' van dentro de Class.

5) Instanciar: Significa crear un Objeto a partir de una 'clase'. Esto se hace usando la palabra clave 'new' seguida del nombre
               de la clase.
               La instancia resultante es un objeto que hereda propiedades y métodos de la clase.
6) Objetos: Es la instancia de una clase, este puede almecenar 'Propiedades'(variables) y 'Metodos'(funciones).

ejem:
// Declaración de una clase
    class Animal {
        constructor (nombre){
            this.nombre = nombre,
        }
    }

    const pato = new Animal('Lucas'); //instanciamos la clase Animal (creamos un nuevo objeto)
    console.log(pato.nombre); //Lucas

7) Encapsulamiento: En POO, puedes encapsular los datos (propiedades y métodos) para que no sean accesibles desde fuera 
                    del objeto. Esto se hace para proteger la integridad de los datos y controlar el acceso.
8) Polimorfismo: Es la capacidad que tienen los objetos de comportarse de una manera diferente si le ponemos el mismo metodo 
                 o funcion.
9)Abstraccion: Es simplificar(reducir) los componente basicos(importantes) del objeto para que sean más fáciles de usar.
10)Modularidad: Es la capacidad de dividir un codigo grande en partes pequeñas y manejables, como piezas de un rompecabezas, 
para poder construir programas más grandes de manera ordenada y eficiente.
Cada módulo debe tener una función o responsabilidad específica.

:::Recuerda::: Los metodos se crean dentro de la clase "class" , pero si lo creamos fuera seria una funcion.

OTROS CONCEPTOS DE LA POO

11) Herencia (extends): Las clases pueden heredar propiedades y métodos de otras clases; esto permite reutilizar código y 
                        crear nuevas clases.
12) Metodos Estaticos(static):
13) Metodos Accesores (Getters, Setters)
    get:
    set:


*/

//ejemplo 1:
class vehiculo {
    constructor(vehiculo, color, marca, modelo) { //estas son las propiedades del objeto
      this.vehiculo = vehiculo;
      this.color = color;   
      this.marca = marca;   
      this.modelo = modelo;  
      this.info = `El vehiculo es un ${this.vehiculo}, la marca es ${this.marca}
                  el modelo es ${this.modelo} y su color es ${this.color}` 
    }

    verInfo(){                          //creamos un metodo asociado a la clase vehiculo
        console.log(this.info)          //imprimira el mensaje que esta dentro del this.info
    }
}

//instanciamos la clase vehiculo (creamos 2 objetos: carro y moto)
let carro = new vehiculo("carro","rojo", "Toyota", "Camry"); 
let moto = new vehiculo("moto","negro","kawasaki","pistera"); 

carro.verInfo(); //El vehiculo es un carro, la marca es Toyota el modelo es Camry y su color es rojo
moto.verInfo(); //El vehiculo es un moto, la marca es kawasaki el modelo es pistera y su color es negro


//ejemplo 2: ejemplo de polimorfismo
class Animal {
    constructor (especie, raza, color) {
        this.especie = especie;
        this.raza = raza;
        this.color = color;
    }
    
    //creamos un primer metodo
    verInfo (){
        console.log(`El animal es de la especie ${this.especie},
        su raza es ${this.raza} y su color es ${this.color} su edad es ${this.edad} años`)
    }
    
    //creamos un segundo metodo
    ladrar () {                     //ejemplo de polimorfismo: este metodo lo pasaremos al objeto gato y loro.
        if(this.especie === "canina"){
            console.log("¡Guau-guau!")
        } else {
            console.log(`No puede ladrar porque el animal es un ${this.especie}`)
        }
    }
}

//Se crea la clase Leon que tendra como Herencia las propiedades de la clase Animal(añadimos la propiedad 'edad')
class Leon extends Animal {
    constructor(especie,raza,color,edad){
        super(especie,raza,color); //señalamos las propiedades que se van a heredar de la clase padre
        this.edad = edad;
        this.info = `El animal es de la especie ${this.especie}, su raza es ${this.raza} 
                    y su color es ${this.color} su edad es ${this.edad} años`
    }
}

//instanciamos la clase Animal (creamos 3 objetos)
let perro = new Animal("canina","siberiano","crema");
let gato = new Animal("felino","garfield","blanco");
let loro = new Animal("ave","loro","verde");
//intanciamos la clase Leon (creamos 1 objeto)
let leon = new Leon("carnivoro","Leon","mostaza",2); 

perro.verInfo();   //El animal es de la especie canina, su raza es siberiano y su color es crema
leon.verInfo(); //El animal es de la especie carnivoro, su raza es Leon, su color es mostaza y su edad es 2 años

//ejm de Polimorfismo
perro.ladrar() //¡Wau-wau!
gato.ladrar() //No puede ladrar porque el animal es un felino
loro.ladrar() //No puede ladrar porque el animal es un ave