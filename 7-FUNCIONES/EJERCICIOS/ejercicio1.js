//EJERCICIOS CON FUNCIONES
function tablaDelSeis(numero) {
    let resultadoDeLaMultiplicacionDe6 = [];
    for(i=0; i<=10; i++){
        let resultado = numero * i;
        resultadoDeLaMultiplicacionDe6.push(resultado);
    }
    return resultadoDeLaMultiplicacionDe6;
  }
  let rspta = tablaDelSeis(2);
  console.log(rspta);