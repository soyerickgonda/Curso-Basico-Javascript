//ELIMINAR PROPIEDAD DE UN OBJETO

//1)delete: usamos este operador para eliminar una propiedad especifica
const camionetas = {};
camionetas.marcas = ["Lamborgini", "Hammer", "Porshe"];
camionetas.modelos = ["urus", "Modelo 3", "Cayenne"];
console.log(camionetas); //{marcas: [ 'Lamborgini', 'Hammer', 'Porshe' ], modelos: [ 'urus', 'Modelo 3', 'Cayenne' ]}
delete camionetas.marcas; //eliminamos la propiedad(clave:valor) marcas y solo quedara modelos
console.log(camionetas); //{ modelos: [ 'urus', 'Modelo 3', 'Cayenne' ] }

//2)Asignar 'undefined' o 'null': (esto exactamente no elimina una propiedad, pero lo deja sin valor definido)
const autos = {
    marcas : ["Toyota","Nissan","Mitsubishi"],
    modelos : ["Corolla","Versa","Lancer"],
    colores : ["gris","blanco","rojo"]
};
console.log(autos); //imprimira el objeto completo (claves:valores)
autos.modelos = [undefined,null, undefined]
console.log(autos);





