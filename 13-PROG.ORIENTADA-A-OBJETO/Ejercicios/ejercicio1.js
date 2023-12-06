//this hace referencia al array que ejecutara el metodo 'mayoresAtres'
Array.prototype.mayoresAtres = function (){
    var arrayModificado = [];

    for(let i=0; i < arrayNumero.length; i++){
        if (arrayNumero[i]>3){
            arrayModificado.push(false);
        } else {
            arrayModificado.push(arrayNumero[i]);
        }
    }
    return arrayModificado;
}
const arrayNumero = [1,2,3,4,5,7,9];
const arrayModificado = arrayNumero.mayoresAtres();
console.log(arrayModificado);


//ejemplo 2: expresion de clase
class Continentes {
    constructor (){
        this.paises = [];
    }
    agregarPais (pais){
        this.paises.push(pais)
    }
}
const PrimerPais = new Continentes();
PrimerPais.agregarPais('Chile');
PrimerPais.agregarPais('Peru');
PrimerPais.agregarPais('Brasil');
PrimerPais.agregarPais('Canada');
console.log(PrimerPais.paises);

//ejemplo 3 - Expresion de clase: creamos metodo con prototype
class CincoContinentes {
    constructor (){
        this.paises = [];
    }
}
CincoContinentes.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
    return this.paises;
}
const pais1 = new CincoContinentes();
pais1.agregarPais('Cuba');
console.log(pais1.paises);


//ejemplo 4: Expresion de Clase: creamos una nueva clase que hereda propiedades de otra clase
class Persona {
    constructor (name, age){
        this.name = name,
        this.age = age;
    }

    //creamos un metodo
    saludar (){
        console.log(`Mi nombre es ${this.name}, tengo ${this.age} años`)
    }

};
class Programador extends Persona {
    constructor (name, age, añosDeExperiencia){
        super(name, age);
        this.añosDeExperiencia = añosDeExperiencia;
    }

    saludo (){
        console.log(`Mi nombre es ${this.name}, tengo ${this.añosDeExperiencia} años como programador`)
    }
}

// const Persona1 = new Persona('Franccesco',5);
// Persona1.saludar();
const Programador1 = new Programador('Sebastian',30,2);
Programador1.saludar();
Programador1.saludo();
