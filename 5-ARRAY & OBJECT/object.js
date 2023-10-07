//OBJECT{}
/*Definicion: Es una estructura de datos que permite almacenar pares clave-valor. Cada valor se asocia con una clave única dentro del objeto.
A diferencia de los arrays, los objetos no tienen un orden específico para sus elementos y no se accede a ellos mediante un índice numérico, sino a través de sus claves.
Nota:Un objeto en JS es conocido en otro lenguaje de programacion como Array asociativo (en PHP se le conoce asi)
*/

//Ejemplo Beckam en Object
console.log("Ejemplo Beckam en Object")
let user = {
    name : "David",
    lastName : "Beckam",
    profession : "Football player",
    nationality : "England",
};

console.log(user); //{name: 'David', lastName: 'Beckam', profession: 'Football player', nationality: 'England'}

let frase = `El jugador se llama: ${user["name"]} ${user["lastName"]},
su profesion es: ${user["profession"]},
su nacionalidad es: ${user["nationality"]}`

console.log(frase);


