//2DA FORMA DE DESARROLLAR EL CASO DE COFLA Y SUS AMIGOS COMPRAN HELADOS (SE BUSCA USAR OTROS METODOS CON MENOS LINEAS DE CODIGO)
//NOTA: MOSTRAR SOLO LOS HELADOS MAS CAROS SEGUN EL MONTO QUE TENGA CADA USUARIO
/*
CLIENTES:
Roberto tiene $1.5
Pedro tiene $1.7
Cofla tiene $3
*/

// let dineroCofla = prompt("Cuanto dinero tienes Cofla?"); //COFLA

// if(dineroCofla >= 0.6 && dineroCofla <= 1) {
//     console.log("Cofla puedes comprarte el helado de agua o de crema");
//     console.log("Si compras el helado de agua, tu vuelto seria: " + (dineroCofla - 0.6) + " y si compras el helado de crema, tu vuelto seria: " + (dineroCofla - 1))
// } else if(dineroCofla >= 1 && dineroCofla <= 1.6) {
//     console.log("Cofla puedes comprarte el helado de crema o heladix");
//     console.log("Si compras el helado de crema, tu vuelto seria: " + (dineroCofla - 1) + " y si compras el heladix, tu vuelto seria: " + (dineroCofla - 1.6))
// } else if(dineroCofla >= 1.6 && dineroCofla <= 1.7) {
//     console.log("Cofla puedes comprarte el heladix o heladovich");
//     console.log("Si compras el heladix, tu vuelto seria: " + (dineroCofla - 1.6) + " y si compras el heladovich, tu vuelto seria: " + (dineroCofla - 1.7))
// } else if(dineroCofla >= 1.7 && dineroCofla <= 1.8) {
//     console.log("Cofla puedes comprarte el heladovich o helardo");
//     console.log("Si compras el heladovich, tu vuelto seria: " + (dineroCofla - 1.7) + " y si compras el helardo, tu vuelto seria: " + (dineroCofla - 1.8))
// } else if(dineroCofla >= 1.8 && dineroCofla <= 2.9) {
//     console.log("Cofla puedes comprarte el helardo o confites");
//     console.log("Si compras el helardo, tu vuelto seria: " + (dineroCofla - 1.8) + " y si compras confites, tu vuelto seria: " + (dineroCofla - 2.9))
// } else if(dineroCofla > 2.9) {
//     console.log("Cofla puedes comprarte el pote de helado");
//     console.log("Si compras el pote de helado, tu vuelto seria: " + (dineroCofla - 2.9))
// } else {
//     console.log("Cofla eres pobreton, tu dinero no alcanza para ningun helado")
// }

// let dineroRoberto = prompt("Cuanto dinero tienes Roberto?"); //ROBERTO

// if(dineroRoberto >= 0.6 && dineroRoberto <= 1) {
//     console.log("Roberto puedes comprarte el helado de agua o de crema");
//     console.log("Si compras el helado de agua, tu vuelto seria: " + (dineroRoberto - 0.6) + " y si compras el helado de crema, tu vuelto seria: " + (dineroRoberto - 1))
// } else if(dineroRoberto >= 1 && dineroRoberto <= 1.6) {
//     console.log("Roberto puedes comprarte el helado de crema o heladix");
//     console.log("Si compras el helado de crema, tu vuelto seria: " + (dineroRoberto - 1) + " y si compras el heladix, tu vuelto seria: " + (dineroRoberto - 1.6))
// } else if(dineroRoberto >= 1.6 && dineroRoberto <= 1.7) {
//     console.log("Roberto puedes comprarte el heladix o heladovich");
//     console.log("Si compras el heladix, tu vuelto seria: " + (dineroRoberto - 1.6) + " y si compras el heladovich, tu vuelto seria: " + (dineroRoberto - 1.7))
// } else if(dineroRoberto >= 1.7 && dineroRoberto <= 1.8) {
//     console.log("Roberto puedes comprarte el heladovich o helardo");
//     console.log("Si compras el heladovich, tu vuelto seria: " + (dineroRoberto - 1.7) + " y si compras el helardo, tu vuelto seria: " + (dineroRoberto - 1.8))
// } else if(dineroRoberto >= 1.8 && dineroRoberto <= 2.9) {
//     console.log("Roberto puedes comprarte el helardo o confites");
//     console.log("Si compras el helardo, tu vuelto seria: " + (dineroRoberto - 1.8) + " y si compras confites, tu vuelto seria: " + (dineroRoberto - 2.9))
// } else if(dineroRoberto > 2.9) {
//     console.log("Roberto puedes comprarte el pote de helado");
//     console.log("Si compras el pote de helado, tu vuelto seria: " + (dineroRoberto - 2.9))
// } else {
//     console.log("Roberto eres pobreton, tu dinero no alcanza para ningun helado")
// }

// let dineroPedro = prompt("Cuanto dinero tienes Pedro?"); //PEDRO

// if(dineroPedro >= 0.6 && dineroPedro <= 1) {
//     console.log("Pedro puedes comprarte el helado de agua o de crema");
//     console.log("Si compras el helado de agua, tu vuelto seria: " + (dineroPedro - 0.6) + " y si compras el helado de crema, tu vuelto seria: " + (dineroPedro - 1))
// } else if(dineroPedro >= 1 && dineroPedro <= 1.6) {
//     console.log("Pedro puedes comprarte el helado de crema o heladix");
//     console.log("Si compras el helado de crema, tu vuelto seria: " + (dineroPedro - 1) + " y si compras el heladix, tu vuelto seria: " + (dineroPedro - 1.6))
// } else if(dineroPedro >= 1.6 && dineroPedro <= 1.7) {
//     console.log("Pedro puedes comprarte el heladix o heladovich");
//     console.log("Si compras el heladix, tu vuelto seria: " + (dineroPedro - 1.6) + " y si compras el heladovich, tu vuelto seria: " + (dineroPedro - 1.7))
// } else if(dineroPedro >= 1.7 && dineroPedro <= 1.8) {
//     console.log("Pedro puedes comprarte el heladovich o helardo");
//     console.log("Si compras el heladovich, tu vuelto seria: " + (dineroPedro - 1.7) + " y si compras el helardo, tu vuelto seria: " + (dineroPedro - 1.8))
// } else if(dineroPedro >= 1.8 && dineroPedro <= 2.9) {
//     console.log("Pedro puedes comprarte el helardo o confites");
//     console.log("Si compras el helardo, tu vuelto seria: " + (dineroPedro - 1.8) + " y si compras confites, tu vuelto seria: " + (dineroPedro - 2.9))
// } else if(dineroPedro > 2.9) {
//     console.log("Pedro puedes comprarte el pote de helado");
//     console.log("Si compras el pote de helado, tu vuelto seria: " + (dineroPedro - 2.9))
// } else {
//     console.log("Roberto eres pobreton, tu dinero no alcanza para ningun helado")
// }


//3ERA FORMA DE DESARROLLAR EL MISMO CASO DE COFLA Y SUS AMIGOS


//4TA FORMA DE COMO DESARROLLAR EL CASO DE COFLA (DESARROLLADO POR CHAT GPT)
const preciosHelados = {
    agua: 0.6,
    crema: 1,
    heladix: 1.6,
    heladovich: 1.7,
    helardo: 1.8,
    confites: 2.9,
    poteHelado: 3,
  };
  
  const personas = {
    roberto: 1.5,
    pedro: 1.7,
    cofla: 3,
  };
  
  for (const persona in personas) {
    console.log(persona + " tiene $" + personas[persona]);
    const montoDisponible = personas[persona];
    const heladosPosibles = [];
  
    for (const helado in preciosHelados) {
      if (preciosHelados[helado] <= montoDisponible) {
        heladosPosibles.push(helado);
      }
    }
  
    console.log(persona + " puede comprar: " + heladosPosibles.join(", "));
  
    const heladosCaros = heladosPosibles.filter((helado) =>
      preciosHelados[helado] === Math.max(...heladosPosibles.map((h) => preciosHelados[h]))
    );
  
    console.log(persona + " puede comprar el helado más caro dentro de su rango: " + heladosCaros.join(", "));
  
    const totalGastado = heladosCaros.reduce((total, helado) => total + preciosHelados[helado], 0);
    const vuelto = montoDisponible - totalGastado;
  
    console.log("Vuelto de " + persona + ": $" + vuelto + "\n");
  }
  






