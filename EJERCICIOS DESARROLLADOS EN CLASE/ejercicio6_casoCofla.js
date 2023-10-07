function matriculaCofla(curso) {     //el argumento 'curso'  dentro de la funcion 'matriculaCofla' representa el nombre de cada uno de los cursos que esta dentro del objeto
   let cursos = {    
    javascript: ["Dalto", "Richard", "Dinesh", "Giltfoy", "Erick", "Gustavo"],
    python: ["Fazt", "Gustavo", "Giltfoy", "Cofla", "Sebasian"],
    react: ["Sebastian", "Richard", "Giltfoy", "Cofla", "Gustavo"],
    java: ["Richard", "Dinesh", "Giltfoy", "Cofla", "Omar"],
  };

    if (cursos[curso] !== undefined){ //si el nombre del curso esta definido correctamente, returnara cada elemento completo del objeto (nombreDelCurso:[alumnos])
        return [cursos[curso],curso]; //[cursos[curso]:retorna nombres de los alumnos
                                      //,curso]: retorna nombre del curso
                                      //cursos[curso],curso: retornara solo el nombre del curso
    } else {        //si el curso no existe , imprime lo de abajo
        document.write("el curso ingresado no existe")
    }
}

function mostrarInformacion (curso){ //el argumento 'curso' dentro de la funcion 'mostrarInformacion' representa al curso que nosotros pasemos como parametro al llamar a dicha funcion
                                     //ejm: si como parametro ponemos el curso de 'java', la funcion 'matriculaCofla' trabajara con los valores de dicho curso.
    let nombreDelCurso = matriculaCofla(curso)[1]; //[1] con el accedemos al nombre del curso
    let profesor = matriculaCofla(curso)[0][0]; //[0][0] con el accedemos solo al primer nombre del alumno de un grupo de alumnos de un curso determinado 
    let alumnos = matriculaCofla(curso)[0]; //[0] con el accedemos a todo los nombre de los alumnos de un curso en especifico
    alumnos.shift();
    document.write(`El profesor del curso ${nombreDelCurso} es: ${profesor}<br> y los alumnos son: ${alumnos}<br><br>`);

}

function clasesTotalesCofla (){
    //mañana ver el video 6h:40min
}

mostrarInformacion("javascript");
mostrarInformacion("react");
mostrarInformacion("java");



/*DUDA PARA MAS TARDE:
Me doy cuenta que dentro de la funcion 'mostrarInformacion' invocamos a la funcion 'matriculaCofla', la pregunta es:
como es que la condicional if que esta dentro de 'matriculaCofla' puede afectar a la funcion 'mostrarInformacion' ??

*/












//'curso' recorrera cada 'curso del objeto cursos' y devolvera los valores de cada array del curso que se llame al declarar la funcion.
//   for (curso of cursos[curso]) {
//     if (curso) {
//       for (curso in cursos[curso]) {
//         if (curso == "0") {
//           continue;
//         } 
//       }
//       console.log(`El profesor del curso es: ${curso}`);
//       return curso;
//     }  
//   }
// }

// matriculaCofla("java");
// matriculaCofla("javascript");

