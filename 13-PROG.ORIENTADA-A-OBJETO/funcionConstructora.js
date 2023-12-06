/*
FUNCIÓN CONSTRUCTORA (metodo antiguo)
-Se declara una funcion cuyo nombre inicia con Mayuscula, seguido de los () en donde iran las parametros de la funcion que 
 luego serviran como propiedades de la clase. 
-Se utiliza la palabra clave 'this' para hacer referencia a las propiedades y métodos específicos de la instancia que se está creando.
-Los 'metodos' se crean dentro de la funcion y tambien se definen con la palabra 'this'. Estos métodos estarán disponibles 
 en todas las instancias de la clase.
-Los objetos (instancias) se crean utilizando la palabra clave 'new' seguida del nombre de la función constructora. 
 Los objetos creados de esta manera se almacenan en variables o constantes según sea necesario.
 
 ::Recuerda::Los objetos se crean fuera de la funcion constructora
 */

 //ejemplo 1
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


//ejemplo 2:
function Animal(especie,raza,color,patas) {
    this.especie = especie;
    this.raza = raza;
    this.color = color;
    this.patas = patas;
    this.info = function () {
        return `El animal es de la especie ${this.especie}
        es de la raza ${this.raza}, es de color ${this.color}
        y tiene ${this.patas} patas`
    }
}
const Perro = new Animal('canina','Doberman','negro',4)
console.log(Perro.info());

 //hacer mas ejemplos y cada vez mas complejos