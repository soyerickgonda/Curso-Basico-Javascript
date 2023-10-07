//tarea
//registrar nombes de los alumnos
//registrar asistencia de cada alumno durante 30 dias
//el alumno que tenga > 18 dias de inasistencia, queda DESAPROBADO

// let nAlumnos ;
// let asistencia;

/*meti un for dentro de otro for, en el primero quiero que 5 veces ejecute el registro del alumno (alumno #) 
y en el segundo for quiero que registre la asistencia (en este caso solo figura el nro)*/
/*
function registroAsistencia () {
    let contadorP = 0;
    let contadorA = 0;

    for(nAlumnos=1; nAlumnos<=5; nAlumnos++) {
        let nombreDelAlumno = prompt("ingrese su nombre");
        let asistencia = prompt("registre sus asistencia: (P) ó (A)").toUpperCase();

        if(asistencia == "P"){
            contadorP ++;
        }else if (contadorA == "A") {
            contadorA ++;
        }
        console.log(`alumno n°${nAlumnos}: ${nombreDelAlumno} , asistencia: ${asistencia}`);
    }
        console.log(`total asistencias (P): ${contadorP}`);
        console.log(`total asistencia (A): ${contadorA}`);
}

registroAsistencia();
registroAsistencia();
*/

//DESARROLLO DE DALTO
//TAREA
//registrar nombres de los alumnos
//registrar asistencia de cada alumno durante 30 dias
//el alumno que tenga > 18 dias de inasistencia, queda DESAPROBADO

let cantidad = prompt("¿Cuantos alumnos son?");
let alumnosTotales = [];
//console.log(alumnosTotales)

for (i = 0; i < cantidad; i++) {                                // el 0 dentro del Array representa la cantidad de asistencia del alumno
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0]; // array dentro de otro array (matriz bidimencional)
    //console.log(alumnosTotales) //esto esta de prueba, solo para saber el valor de [i]
}

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++; //me da a entender que alumnosTotales valdra el valor de p, que entremos al elemento 1 y que a dicho elemento le sumemos +1
    }
}

for (i = 0; i < 10; i++){ // este bucle for , tendra dentro otro bucle for in
    for (alumno in alumnosTotales){ //este bucle devolvera la funcion de arriba (tomarAsistencia)
        console.log(alumno);
        tomarAsistencia(alumnosTotales[alumno][0],alumno); 
        //llamamos a la funcion y como parametros ponemos el indice 0 del array alumnosTotales (este me dara como valor el nombre) y como segundo parametro ponemos alumno ya que este almacena la posicion (indice) de cada elemento
    }
}

// for (alumno in alumnosTotales){
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     _______Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
//     _______Ausencias: <b>${10 -alumnosTotales[alumno][1]}</b> <br><br>`
//     if (10 -alumnosTotales[alumno][1] > 8){
//         resultado += "Reprobado por inasistencia <br><br>";
//     }else {
//         resultado += "<br><br>"
//     }
//     document.write(resultado)
// }


//BUSCA LA MANERA DE DESARROLLAR DE OTRA MANERA

//TAREA
//registrar nombres de los alumnos
//registrar asistencia de cada alumno durante 30 dias
//el alumno que tenga > 18 dias de inasistencia, queda DESAPROBADO