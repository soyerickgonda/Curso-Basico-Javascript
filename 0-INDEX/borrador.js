let ingresarNumeros = parseInt(prompt("ingresar numero"));

while(ingresarNumeros < 0){
    let resultado = ingresarNumeros ++;
    console.log(resultado);
}  

if (ingresarNumeros > 0){
    return ingresarNumeros;
}