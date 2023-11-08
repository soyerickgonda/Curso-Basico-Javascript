//OBJETOS DENTRO DE OBJETOS
let user = {
    name : "David",
    lastName : "Beckam",
    nationality : "England",
    occupation : {
        job : "Soccer Player",
        club : "Real Madrid",
        country : 'Spain'
    }
};
console.log(user); 

let frase = `El jugador se llama: ${soccerPlayer["name"]} ${soccerPlayer["lastName"]},
su profesion es: ${soccerPlayer["profession"]},
su nacionalidad es: ${soccerPlayer["nationality"]}`

console.log(frase);



/*Recuerda: Se puede acceder a las propiedades de un Objeto de 2 maneras:
    1)Dot-Notation (Notacion con punto.)                2)Bracket-Notation (Notacion con corchetes []) 
        console.log(objeto.propiedad);                      console.log(objeto["propiedad"]); */   