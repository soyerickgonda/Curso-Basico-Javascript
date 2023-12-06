//CASO 1: COFLA Y SUS AMIGOS COMPRAN HELADOS
/*
CLIENTES:
Roberto tiene $1.5
Pedro tiene $1.7
Cofla tiene $3
*/

let user = prompt("ingresa tu nombre");
var monto = parseFloat(prompt("cual es su monto"));
//LISTA DE HELADOS
let op1 = "de agua";
let op2 = "de crema";
let op3 = "heladix";
let op4 = "heladovich";
let op5 = "helardo";
let op6 = "confites";
let op7 = "pote de helado";

//PRECIO DE LOS HELADOS en $:
let priceOp1 = 0.6;
let priceOp2 = 1;
let priceOp3 = 1.6;
let priceOp4 = 1.7;
let priceOp5 = 1.8;
let priceOp6 = 2.9;
let priceOp7 = 3;


let elegirHelado; //esta variable almacenara los valores que el usuario ingrese en el prompt "elegirHelado" que esta dentro de la condicional if

if (monto >= 0.6 && monto <= 1) { //1
  let elegirHelado = parseFloat(
    prompt(
      "Elija una de las siguientes opciones:\n op1:helado de agua \n op2:helado de crema."
    )
  );
  if (elegirHelado === 1) {
    console.log("eligio el helado " + op1);
    console.log("su vuelto seria $" + (monto - priceOp1))
  } else {
    console.log("eligio el helado " + op2);
    console.log("su vuelto seria $" + (monto - priceOp2))
  }
} else if (monto >= 1 && monto <= 1.6) { //2
  let elegirHelado = parseFloat(
    prompt(
      "Elija una de las siguientes opciones:\n op1:helado de agua \n op2:helado de crema \n op3:heladix"
    )
  );
  if (elegirHelado === 1) {
    console.log("eligio el helado " + op1);
    console.log("su vuelto seria $" + (monto - priceOp1))
  } else if (elegirHelado === 2) {
    console.log("eligio el helado " + op2);
    console.log("su vuelto seria $" + (monto - priceOp2))
  } else {
    console.log("eligio el helado " + op3);
    console.log("su vuelto seria $" + (monto - priceOp3))
  }
} else if (monto >= 1.6 && monto <= 1.7) { //3
  let elegirHelado = parseFloat(
    prompt(
      "Elija una de las siguientes opciones:\n op1:helado de agua \n op2:helado de crema \n op3:heladix \n op4:heladovich"
    )
  );
  if (elegirHelado === 1) {
    console.log("eligio el helado " + op1);
    console.log("su vuelto seria $" + (monto - priceOp1))
  } else if (elegirHelado === 2) {
    console.log("eligio el helado " + op2);
    console.log("su vuelto seria $" + (monto - priceOp2))
  } else if (elegirHelado === 3){
    console.log("eligio el helado " + op3);
    console.log("su vuelto seria $" + (monto - priceOp3))
 }    else {
    console.log("eligio el helado " + op4);
    console.log("su vuelto seria $" + (monto - priceOp4))
  }
} else if (monto >= 1.7 && monto <= 1.8) { //4
    let elegirHelado = parseFloat(
      prompt(
        "Elija una de las siguientes opciones:\n op1:helado de agua \n op2:helado de crema \n op3:heladix \n op4:heladovich \n op5:helardo"
      )
    );
    if (elegirHelado === 1) {
      console.log("eligio el helado " + op1);
      console.log("su vuelto seria $" + (monto - priceOp1))
    } else if (elegirHelado === 2) {
      console.log("eligio el helado " + op2);
      console.log("su vuelto seria $" + (monto - priceOp2))
    } else if (elegirHelado === 3){
      console.log("eligio el helado " + op3);
      console.log("su vuelto seria $" + (monto - priceOp3))
   }  else if (elegirHelado === 4){
    console.log("eligio el helado " + op4);
    console.log("su vuelto seria $" + (monto - priceOp4))
 }  
   else {
      console.log("eligio el helado " + op5);
      console.log("su vuelto seria " + (monto - priceOp5))
    }
  } else if (monto >= 1.8 && monto <= 2.9) { //5
    let elegirHelado = parseFloat(
      prompt(
        "Elija una de las siguientes opciones:\n op1:helado de agua \n op2:helado de crema \n op3:heladix \n op4:heladovich \n op5:helardo \n op6:confites"
      )
    );
    if (elegirHelado === 1) {
      console.log("eligio el helado " + op1);
      console.log("su vuelto seria $" + (monto - priceOp1))
    } else if (elegirHelado === 2) {
      console.log("eligio el helado " + op2);
      console.log("su vuelto seria $" + (monto - priceOp2))
    } else if (elegirHelado === 3){
      console.log("eligio el helado " + op3);
      console.log("su vuelto seria $" + (monto - priceOp3))
   }  else if (elegirHelado === 4){
    console.log("eligio el helado " + op4);
    console.log("su vuelto seria $" + (monto - priceOp4))
 }  else if (elegirHelado === 5){
    console.log("eligio el helado " + op5);
    console.log("su vuelto seria $" + (monto - priceOp5))
 }
   else {
      console.log("eligio el helado " + op6);
      console.log("su vuelto seria $" + (monto - priceOp6))
    }
  } else if (monto > 2.9) { //6
    let elegirHelado = parseFloat(
      prompt(
        "Elija una de las siguientes opciones:\n op1:helado de agua \n op2:helado de crema \n op3:heladix \n op4:heladovich \n op5:helardo \n op6:confites \n op7:poteHelado"
      )
    );
    if (elegirHelado === 1) {
      console.log("eligio el helado " + op1);
      console.log("su vuelto seria $" + (monto - priceOp1))
    } else if (elegirHelado === 2) {
      console.log("eligio el helado $" + op2);
      console.log("su vuelto seria " + (monto - priceOp2))
    } else if (elegirHelado === 3){
      console.log("eligio el helado " + op3);
      console.log("su vuelto seria $" + (monto - priceOp3))
   }  else if (elegirHelado === 4){
    console.log("eligio el helado " + op4);
    console.log("su vuelto seria $" + (monto - priceOp4))
 }  else if (elegirHelado === 5){
    console.log("eligio el helado " + op5);
    console.log("su vuelto seria $" + (monto - priceOp5))
 } else if (elegirHelado === 6){
    console.log("eligio el helado " + op6);
    console.log("su vuelto seria $" + (monto - priceOp6))
 }
   else {
      console.log("eligio el helado " + op7);
      console.log("su vuelto seria $" + (monto - priceOp7))
    }
  } else {
    console.log("Lo siento pobre de miercoles, tu dinero no alcanza para ningun helado")
  }
