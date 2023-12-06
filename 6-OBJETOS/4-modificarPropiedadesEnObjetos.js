//MODIFICAR VALORES DE UNA PROPIEDAD DE UN OBJETO
//ejm 1:
const persona = {
    nombre: "Pedro",
    apellido: "Perez",
    edad: 30
}
persona.nombre = "Gilfoy";
console.log(persona.nombre); // Gilfoy
console.log(persona.apellido); //Perez
console.log(persona.edad); // 30

//ejm 2:usamos el spread operator para copiar las propiedades de un objeto origen a un objeto destino
//aprovechamos y modificamos algunos valores de la propiedad del objeto destino
const objetoDeOrigen = {nombre : "Ronaldo", club : "Manchester United", pais : "England"}; //copiamos las propiedades de objetoDeOrigen a objetoDeDestino y 
const objetoDeDestino = {...objetoDeOrigen, club : "Real Madrid", pais : "España"};        //en el proceso hemos sobreescrito las propiedades 'club' y 'pais'
console.log(objetoDeDestino); 



//practicar con varios ejemplos usando los diferentes metodos que hay para declarar, modificar y eliminar propiedades de objetos
