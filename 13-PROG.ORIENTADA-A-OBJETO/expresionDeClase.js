/*
EXPRESION DE CLASE (ECMAScript6 en el 2015)
Es la forma actual de como crear Clases en Js.
-Se crea usando la palabra 'class' seguido del nombre que quieras ponerle a la clase.(Este debe iniciar con mayuscula)
-Dentro de la clase se usa el metodo 'constructor' para inicializar las 'propiedades' y configurar el objeto cuando se crea 
 una nueva instancia de la clase.
 -Se usa el 'this' para acceder a las propiedades de la instancia de la clase.
-Los metodos se crean fuera del constructor y su sintaxis es como si fuese una funcion.
-'Intanciar una clase' es lo mismo que 'crear un objeto de la clase'. (se hace fuera de las {} de la clase creada)*/

//ejemplo 1
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

//ejemplo 2:
class Animal {
   constructor (especie,raza,color,patas){
       this.especie = especie;
       this.raza = raza;
       this.color = color;
       this.patas = patas;
       this.info = `la especie es ${this.especie}, la raza es ${raza}
                    el color es ${this.color} y tiene ${this.patas} patas`
   }

   info (){
       this.info
   }
}

const Gato = new Animal('felino','garfiel','crema',4)
console.log(Gato.info);


 //hacer mas ejemplos y cada vez mas complejos