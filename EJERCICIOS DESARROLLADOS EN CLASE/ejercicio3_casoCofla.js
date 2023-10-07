//CASO PRACTICO: ENTRADA A FIESTA (DESARROLLARLO EN LOS METODOS QUE TE SEAN POSIBLE)
/*
mendigo elabora fiesta y compra maquina para filtrar el ingreso:
- mayore de 18 ingresan, menores no ingresan
-la primera persona que ingrese despues de las 2am ingresa gratis
*/

//alert("Bienvenido a la fiesta del Sin Techo XD");

//PRIMER METODO: DESARROLLO USANDO CONDICIONALES 
//(ojo: falta validar que solo el primero que pase despues de las 2am no paga entrada, el resto si)

/*let entradaGratis = false;
let edad = prompt("Cual es tu edad?");

if(edad >= 18){
       let time = prompt("Que horas son?");
       if (time > 2 && time <= 7 && entradaGratis == false) {
        alert("eres mayor de edad y eres la primera persona en pasar despues de las 2am, asi que el ingreso es free")
        entradaGratis = true;
        }else {
           alert("puede ingresar a la fiesta, la entrada es de $10")
       }
} else {
    alert("Eres menor de edad, no puedes ingresar a la fiesta")
}*/

//SEGUNDO METODO: DESARROLLO USANDO FUNCIONES Y CONDICIONALES
                            //Se declara una variable free y se inicializa con el valor false. Esta variable se 
                            //utiliza para llevar un registro de si la primera persona que llega después de las 
                            //2 AM ha ingresado gratis o no. 
                            //Inicialmente, nadie ha ingresado gratis, por lo que free se establece en false.
let ingresoLibre = false; 

function ingreso (edad, hIngreso) {
   if (edad >= 18){
 
    if(hIngreso > 2 && hIngreso < 7 && ingresoLibre == false){
        console.log(`Son las ${hIngreso}:00 hrs:Tienes ${edad} años y eres el primero en ingresar despues de las 2:00am, tu ingreso es Free`);
        ingresoLibre = true; //lo ponemos para que actualice el valor de la variable ingresoLibre y asi ya no tenga efecto sobre las siguientes usuarios
    } else {
        console.log(`Son las ${hIngreso}:00 hrs:Tienes ${edad} años, puedes ingresar pero deberas pagar la entrada`)
    }
   }else {
    console.log("eres menor de edad, no puedes pasar")
   }
}

ingreso(17,10);
ingreso(19,10);
ingreso(22,2.3);
ingreso(29,4.2);

//DESARROLLO DE DALTO
/*let free = false;

const validarCliente = (time)=> {
    let edad = prompt("¿cual es tu edad?");
    if(edad > 18){  
        if(time > 2 && time < 7 && free == false) {
            alert("puedes ingresar gratis porque eres la primera persona despues de las 2am");
            free = true;
        } else {
            alert("puedes ingresar pero debes pagar la entrada")
        }
    } else {
        alert("eres menor de edad, por ende no puedes pasar a la fiesta")
    }
}

validarCliente(10);
validarCliente(1);
validarCliente(2.5);
validarCliente(4);*/

