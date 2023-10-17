//crear caluladora que +,-,*,/,%,raiz cuadrada y cubica, exponente
//usa funciones


class Calculadora {
    constructor (num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    suma (){
        return this.num1 + this.num2;
    }
    resta (){
        return this.num1 - this.num2
    }
    multiplicacion(){
        return this.num1 * this.num2
    }
    division(){
        return this.num1 / this.num2 
    }
}

const resultado = new Calculadora(2,2);
console.log(resultado.suma());
const resultado2 = new Calculadora(1213,43);
console.log(resultado2.resta());
/*
let operaciones = prompt("elija la operacion a realizar: \n1: suma \n2: resta \n3: multiplicacion \n4: division \n5: resto \n6: raiz cuadrada \n7: raiz cubica \n8: potencia");

function ejecutarOperacion(num1,num2){
    if(operaciones == 1){
        num1 = parseInt(prompt("ingrese primer numero"));
        num2 = parseInt(prompt("ingrese segundo valor"));
        resultado = num1 + num2;
        console.log(resultado);
    } else if(operaciones == 2){
        num1 = parseInt(prompt("ingrese primer numero"));
        num2 = parseInt(prompt("ingrese segundo valor"));
        resultado = num1 - num2;
        console.log(resultado);
    } else if(operaciones == 3){
        num1 = parseInt(prompt("ingrese primer numero"));
        num2 = parseInt(prompt("ingrese segundo valor"));
        resultado = num1 * num2;
        console.log(resultado);
    } else if(operaciones == 4){
        num1 = parseInt(prompt("ingrese primer numero"));
        num2 = parseInt(prompt("ingrese segundo valor"));
        resultado = num1 / num2;
        console.log(resultado);
    } 
    // else if(operaciones == 5){
    //     num1 = parseInt(prompt("ingrese primer numero"));
    //     num2 = parseInt(prompt("ingrese segundo valor"));
    //     resultado = num1 % num2;
    //     console.log(resultado);
    // } else if(operaciones == 6){
    //     num1 = parseInt(prompt("ingrese el numero"));
    //     resultado =Math.sqrt(num1);
    //     console.log(resultado);
    // } else if(operaciones == 7){
    //     num1 = parseInt(prompt("ingrese el numero"));
    //     resultado = Math.cbrt(num1)
    //     console.log(resultado);
    // } else if(operaciones == 8){
    //     num1 = parseInt(prompt("ingrese primer numero"));
    //     num2 = parseInt(prompt("ingrese segundo valor"));
    //     resultado = num1 ** num2;
    //     console.log(resultado);
    // }
}
ejecutarOperacion();
*/
