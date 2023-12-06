//METODOS PARA MANIPULAR/ESTABLECER EL VALOR DE 'this' : call(), apply(), bind()
/*call(): Permite llamar a la funcion para indicarle el objeto que actuara como 'this' dentro de la funcion llamada,
asi como los parametros adicionales de la funcion que sean necesarios.
Sintaxis:
        function unaFuncion (par1, par2, …, parN) { // código… }
        unaFuncion.call (objetoQueActuaráComoThis, par1, par2, … parN);
*/
//ejem 1:
function sumar(c, d) {
  console.log(this); //'this' hace referencia al objeto que es llamado por la funcion
  console.log(this.a + this.b + c + d);
}

const numeros = { a: 4, b: 5 }; //creamos un objeto que hara referencia a 'this'
sumar.call(numeros, 6, 7); //22..(4+5+6+7)

//ejm 2:
function registro() {
  return this.name + " " + this.lastName;
}
const user = {
  name: "Alessandro",
  lastName: "Gonda",
};
console.log(registro.call(user));

/*apply(): Permite llamar a la función para indicarle el objeto que actuará como this dentro de la función llamada.
La diferencia de 'apply' con 'call' está en que los parámetros se pasan con un array en vez de separados por comas;
de este modo 'apply' consta exactamente de dos parámetros: el objeto que actuará como this y un array.

sintaxis: 
        function unaFuncion (par1, par2, …, parN) {// código… }
        unaFuncion.apply (objetoQueActuaráComoThis, arrayDeElementos);*/
//ejm 1:
function saludar(parametro1, parametro2) {
  //creamos la funcion
  console.log(this); //'this' hace referencia al objeto que es llamado por la funcion
  console.log(this.saludo + " " + parametro1 + " " + parametro2);
}
const persona = { saludo: "Hola" }; //creamos un objeto que servira como referencia a 'this'
const mascota = { saludo: "Guau" };

saludar.apply(persona, ["amigo", "mío"]); //"Hola amigo mío"...la funcion saludar llama al objeto persona que servira como valor de 'this'
saludar.apply(mascota, ["fiel", "compañero"]); // "Guau fiel compañero"


/*bind(): Es un metodo de Js que se utiliza para crear una nueva funcion que cuando es llamada, tiene el valor
de 'this' predefinido. ('bind' crea la funcion, no la ejecuta)
Nota: Una funcion que fue creada con 'bind' no puede volver a ser enlazado a otro objeto.
 */
//falta ejemplo




