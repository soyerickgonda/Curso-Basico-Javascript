/*CREAR SOLUCIONES
-Crear un sistema que ayude a Cofla a decidir cual app descargar
-El app debe mostrar la sgte informacion: cantidad de descargas, puntuacion y peso(en mb)
-Las app deben: instalarse, abrirse, cerrarse y desinstalarse.
*/
class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.instalado = false;
    this.iniciado = false;
    this.nroApp = 1;
  }
  instalarDesinstalar() {
    if (this.instalado == false) {
      alert("App instalado");
      this.instalado = true;
    } else {
      alert("App desinstalado");
    }
  }
  abrirCerrar() {
    if (this.instalado == true && this.iniciado == false) {
      alert("Abriendo App");
      this.iniciado = true;
    } else {
      alert("Cerrando App");
    }
  }
  infoApp() {
    return `El app tiene: <br>
        Descargas: <b>${this.descargas}</b> <br>
        Puntuacion: <b>${this.puntuacion}</b> <br>
        Pesa: <b>${this.peso}</b><br>`;
  }
}

appAinstalar1 = new App("5.000", "3.9 estrellas", "50MB");
appAinstalar2 = new App("15.000", "4.3 estrellas", "750MB");
appAinstalar3 = new App("2.990", "3.8 estrellas", "920MB");
appAinstalar4 = new App("25.000", "4.9 estrellas", "550MB");
appAinstalar5 = new App("15", "1.3 estrellas", "50MB");
appAinstalar6 = new App("19.990", "3.8 estrellas", "1GB");
appAinstalar7 = new App("1M", "4.8 estrellas", "520MB");

document.write(`
    ${appAinstalar1.infoApp()} <br>
    ${appAinstalar2.infoApp()} <br>
    ${appAinstalar3.infoApp()} <br>
    ${appAinstalar4.infoApp()} <br>
    ${appAinstalar5.infoApp()} <br>
    ${appAinstalar6.infoApp()} <br>
    ${appAinstalar7.infoApp()} <br>
`)

appAinstalar1.instalarDesinstalar();
appAinstalar1.abrirCerrar();
appAinstalar1.abrirCerrar();
appAinstalar1.instalarDesinstalar();
