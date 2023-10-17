//CASO COFLA: APRUEBA O DESAPRUEBA MATERIA
//Termino el primer trimestre y cofla no sabe si aprobara las materias, para lograrlo necesitara:
/*-haber tenido 90% de asistencia en cada materia.
  -haber tenido un promedio 7/10 en cada materia.
-haber presentado el 75% de los trabajos por materia*/

//SE REQUIERE:
//solicitar los datos y decir si Cofla aprueba o no

const materias = {
    matematicas: {
      asistencia: 90,
      promedio: 8,
      trabajoPresentado: 75,
    },
    programacion: {
      asistencia: 95,
      promedio: 9,
      trabajoPresentado: 85,
    },
    baseDeDatos: {
      asistencia: 85,
      promedio: 7,
      trabajoPresentado: 80,
    },
    english: {
      asistencia: 75,
      promedio: 5,
      trabajoPresentado: 70,
    },
  };
  
  function resultadoFinal() {
    let cursos = []; //aca se almacenara todos los "info" que mostrara el resultado(asistencia,promedio,trabajoPresentado) de cada curso
    for (curso in materias) { //curso es casi una variable que recorre el array "materias" y retornada los nombres de cada propiedad materias (matematicas, programacion, etc)
      let asistencia = materias[curso].asistencia; //valor de la propiedad asistencia
      let promedio = materias[curso].promedio;    //valor de la propiedad promedio
      let trabajoPresentado = materias[curso].trabajoPresentado;  //valor de la propiedad trabajoPresentado
  
      if (asistencia >= 90 && promedio >= 7 && trabajoPresentado >= 75) { //la condicional muestra los valores minimos para aprobar cada curso
        let info = `Cofla tiene los siguientes resultados en <b>${curso}</b>:<br>
              ${asistencia}% de asistencia <br>
              ${promedio}/10 de promedio ponderado <br>
              ${trabajoPresentado}% de los trabajos presentado <br>
              por lo tanto <b style="color:green">Aprobo</b> el curso <br><br>`;
  
             cursos.push(info); //el valor de la variable info lo insertamos dentro del array vacio "cursos[]"
      } else {
        let info =`Cofla tiene los siguientes resultados en <b>${curso}:</b><br>
              ${asistencia}% de asistencia<br>
              ${promedio} de promedio ponderadoss<br>
              ${trabajoPresentado}% de los trabajos presentado<br>
              por lo tanto <b style="color:red">Desaprobo</b> el curso<br><br>`;
  
        cursos.push(info); //el valor de la variable info lo insertamos dentro del array vacio "cursos[]"
      }
    }
    return (cursos);
  }
  
  let resultado = resultadoFinal();
  document.write(resultado);
  
  
  //SEGUNDA MANERA DE DESARROLLAR CASO COFLA: APRUEBA O DESAPRUEBA MATERIA
  
  //SE REQUIERE:
  //solicitar los datos y decir si Cofla aprueba o no
  //mostrar el resultado en consola con colores representativos (Desaprobado en rojo)
  //todo debera estar estructurado en tabla
  
  const courses = {
    //propiedad(clave) : valorDePropiedad ---> (matematicas : {})
    Math: {
      //propiedad(clave) : valorDePropiedad ---> (asistencia : 90)
      assistance: 90, //se requiere 90/100% min. para aprobar
      gradeAverage: 7, //se requiere 7/10 min. para aprobar
      worksPresented: 70, //se requiere 70/100% min. para aprobar
    },
    Programing: {
      assistance: 95,
      gradeAverage: 8,
      worksPresented: 80,
    },
    Language: {
      assistance: 55,
      gradeAverage: 5,
      worksPresented: 45,
    },
    English: {
      assistance: 75,
      gradeAverage: 8,
      worksPresented: 70,
    },
    Bbdd: {
      assistance: 85,
      gradeAverage: 8,
      worksPresented: 70,
    },
  };
  
  function ratings() {
    for (course in courses) {
      let asistencia = courses[course].assistance;
      let promedio = courses[course].gradeAverage;
      let trabajos = courses[course].worksPresented;
  
      console.log(`%c Curso de ${course}`,`color: skyblue`);
      if (asistencia >= 90) {
        console.log(`Assistance: ${asistencia} ... %cApproved`,`color: green`);
      } else {
        console.log(`Assistance: ${asistencia} ... %cDisaproved`,`color: red`);
      }
      if (promedio >= 7) {
        console.log(`Grade Average: ${promedio} ... %cApproved`,`color: green`);
      } else {
        console.log(`Grade Average: ${promedio} ... %cDisaproved`,`color: red`);
      }
      if (trabajos >= 70) {
        console.log(`Works Presented: ${trabajos} ... %cApproved`,`color: green`);
      } else {
        console.log(`Work Presented: ${trabajos} ... %cDisaproved`,`color: red`);
      }
    }
  }
  ratings();
  