/*Definicion:
La POO en JS es una forma de escribir codigo que se basa en la idea de que los objetos son la unidad central de la programacion.

Conceptos Básicos de POO:

1) Objetos: Es un contenedor que puede almecenar 'Propiedades'(datos) y 'Metodos'(funciones).
2) Clases (class): Son como plantillas que se usan para crear Objetos. Estos definen como deben ser los objetos, que propiedades y metodos deben tener.
3) Propiedades: Son variables que pertenecen al objeto y almacenan informacion especifica.
    ejm: Un 'carro' seria un Objeto y sus Propiedades serian: 'color', 'marca', 'modelo'.

4) Constructor(): Sirve para inicializar y configurar objetos cuando se crean a partir de una clase. (instancia). 
                  Permite establecer los valores iniciales de las propiedades de un objeto.
                  Nota: El constructor es esencial para configurar objetos correctamente cuando se crean. 

5) Metodos: Son funciones que estan asociados a un Objeto y pueden realizar acciones especificas relacionadas a ese Objeto.
    ejm: objeto: 'carro' ; metodo: 'arrancar'

6) Instancias: Se le llama 'instanciar' cuando creas un Objeto a partir de una Clase 'class'. Cada instancia es un Objeto independiente con sus propias 'propiedades' y 'métodos'.
7) Encapsulamiento: En POO, puedes encapsular los datos (propiedades y métodos) para que no sean accesibles desde fuera 
                    del objeto. Esto se hace para proteger la integridad de los datos y controlar el acceso.
8) Polimorfismo: Es la capacidad que tienen los objetos de comportarse de una manera diferente si le ponemos el mismo metodo o funcion.
9)Abstraccion: Es simplificar(reducir) los componente basicos(importantes) del objeto para que sean más fáciles de usar.
10)Modularidad: Nos ayuda a dividir un codigo grande en partes pequeñas y manejables, como piezas de un rompecabezas, para poder construir programas más grandes de manera ordenada y eficiente.
*/

//recuerda: los metodos se crean dentro de la clase "class" , pero si lo creamos fuera seria una funcion.
//cuando creamos metodos,la forma de acceder al objeto es mediante el this.
class vehiculo {
    // se crea un metodo constructor de la 'clase vehiculo'
    constructor(vehiculo, color, marca, modelo) { //estas son las propiedades del objeto
      this.vehiculo = vehiculo;
      this.color = color;   
      this.marca = marca;   
      this.modelo = modelo;  
      this.info = `El vehiculo es un ${this.vehiculo}, la marca es ${this.marca}
el modelo es ${this.modelo} y su color es ${this.color}` 
    }
    verInfo(){                                  //se crea otro metodo llamado verInfo que no tiene parametros
        document.write(this.info + "</br></br>")     //imprimira en el navegador el mensaje que esta dentro del this.info
    }
}

//objetos
let carro = new vehiculo("carro","rojo", "Toyota", "Camry"); //instanciamos carro de la clase vehiculo
let moto = new vehiculo("moto","negro","kawasaki","pistera"); //instanciamos moto de la clase vehiculo

carro.verInfo();
moto.verInfo();

// document.write(carro.info + "</br>");
// document.write(moto.info + "</br>");

/*
OTROS CONCEPTOS DE LA POO

11) Herencia (extends): Las clases pueden heredar propiedades y métodos de otras clases; esto permite reutilizar código y crear nuevas clases.
12) Metodos Estaticos(static):
13) Metodos Accesores (Getters, Setters)
    get:
    set:
*/

class animal {
    constructor (especie, raza, color) {
        this.especie = especie;
        this.raza = raza;
        this.color = color;
        this.info = `El animal es de la especie ${this.especie},
        su raza es ${this.raza} y su color es ${this.color}` + "</br></br>"
    }
    
    verInfo (){
        document.write(this.info + "</br>")
    }
    
    //ejemplo de Polimorfismo
    ladrar () {                     //creamos el metodo ladrar que luego lo pasaremos a gato y loro.
        if(this.especie == "canina"){
            document.write("¡Wau-wau!<br><br>")
        } else {
            document.write(`No puede ladrar porque el animal es un ${this.especie}`+ "<br><br>")
        }
    }
}

//ejemplo de Herencia: la clase Leon hereda las propiedades de la clase animal y añade un nueva propieda llamada 'edad'
class Leon extends animal {
    constructor(especie,raza,color,edad){
        super(especie,raza,color);
        this.edad = edad;
        this.info = `El animal es de la especie ${this.especie},
        su raza es ${this.raza} y su color es ${this.color} su edad es ${this.edad} años` + "</br></br>"
    }
}


//objetos
let perro = new animal("canina","siberiano","crema");
let gato = new animal("felino","garfield","blanco");
let loro = new animal("ave","loro","verde");

let leon = new Leon("carnivoro","Leon","mostaza",2); //esto es una Herencia de la clase animal 

//Dos maneras diferente de mostrar las propiedades de la clase 'perro' teniendo como plantilla a la clase animal. 
document.write(perro.info); //manera convencional de mostrar el valor mediante el document.write
perro.verInfo();    //a la clase perro le unimos el metodo 'verInfo' ya que ahi se guarda la informacion completa del 'this.info'

//ejm de Polimorfismo
perro.ladrar() //¡Wau-wau!
gato.ladrar() //No puede ladrar porque el animal es un felino
loro.ladrar() //No puede ladrar porque el animal es un ave

//ejm de Herencia
leon.verInfo();