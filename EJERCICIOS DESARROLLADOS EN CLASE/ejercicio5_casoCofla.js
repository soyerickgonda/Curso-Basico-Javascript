//CREAMOS CALCULADORA QUE HAGA: SUMA,RESTA,MULTIPLICACION,DIVISION,POTENCIA,RAIZ CUADRADA,RAIZ CUBICA

class Calculadora {     //creamos la clase calculadora
    constructor (){     //este metodo se ejecuta cuando se crea un objeto de la clase
        this.num1 = 0;  //se inicializa las 2 propiedades con valor 0 dentro del objeto Calculadora
        this.num2 = 0;
    }

    operacionMatematica(){     //creamos el metodo operacionMatematica(){} que guardara dentro de la variable 'opcion' el valor elegida por el usuario  
        let opcion; 
        while (true) {     // Inicia un bucle infinito (se detendrá con "break" más adelante)
            opcion = prompt("Qué operación desea realizar: \n1)Suma \n2)Resta \n3)Multiplicacion \n4)Division \n5)Potencia \n6)Raiz Cuadrada \n7)Raiz Cúbica");
            if (opcion === '1' || opcion === '2' || opcion === '3' || opcion === '4' || opcion === '5' || opcion === '6' || opcion === '7') {
                // Solicita al usuario que ingrese una opción y almacena la respuesta en "opcion"
                break;  // Si la opción es válida (1-7), sale del bucle while
            } else {
                alert("Opción inválida");  // Si la opción no es válida, muestra un mensaje de alerta y vuelve a pedir la opción
            }
        }
        return parseInt(opcion);    // Convierte la opción a un número entero y lo devuelve
    }

    ingresarValores (){
        if (this.opcion === 6 || this.opcion === 7) {       // Comprueba si la opción elegida es 6 o 7 (Raiz Cuadrada o Raiz Cúbica)
            this.num1 = parseFloat(prompt("Ingrese el valor")); // Solicita al usuario que ingrese un valor y lo almacena en num1
        } else {
            this.num1 = parseFloat(prompt("Ingrese el primer valor"));  // Solicita al usuario que ingrese un valor y lo almacena en num1
            this.num2 = parseFloat(prompt("Ingrese el segundo valor")); // Solicita al usuario que ingrese un valor y lo almacena en num2
        }   
    }

    ejecutarOperacion (){
        this.opcion = this.operacionMatematica();
        this.ingresarValores();

        if(this.opcion == 1){
            let resultado = this.num1 + this.num2;
            return alert(resultado);
        } else if (this.opcion == 2){
            let resultado = this.num1 - this.num2;
            return alert(resultado);
        } else if (this.opcion == 3){
            let resultado = this.num1 * this.num2;
            return alert(resultado);
        } else if (this.opcion == 4){
            let resultado = this.num1 / this.num2;
            return alert(resultado);
        }else if (this.opcion == 5){
            let resultado = this.num1 ** this.num2;
            return alert(resultado);
        } else if (this.opcion == 6){
            let resultado = Math.sqrt(this.num1);
            return alert(resultado);
        } else if (this.opcion == 7){
            let resultado = Math.cbrt(this.num1);
            return alert(resultado);
        } else {
            return alert("opcion invalida")
        }
    }
}

const calculadora = new Calculadora();
calculadora.ejecutarOperacion();

//BUSCA DESARROLLAR EL MISMO EJERCICIO DE OTRA MANERA PARA QUE PRACTIQUES TU LOGICA DE PROGRAMACION