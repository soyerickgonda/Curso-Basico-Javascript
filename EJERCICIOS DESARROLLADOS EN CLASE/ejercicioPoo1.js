/*CREAR SOLUCIONES:
-crear un sistema que muestre a Cofla las particularidades de los 3 celulares.
-cada celular tiene: color,peso,resolucion de pantalla,resolucion de camara, memoria ram.
-cada celular debe prender,reiniciar, apagar, tomar fotos y grabar
 */


//(1er Solucion del problema, Cofla quiere ver caracteristicas de 3 moviles)
class celulares {
    constructor (color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encenido = false;
    }
    precionarBotonEncendidoApagado () {
        if (this.encenido == false){
            alert("celular encendido");
            this.encenido = true;
        }else {
            alert("celular ya esta apagado");
            this.encenido = false;
        }
    }
    
    reiniciar (){
        if (this.encenido == true) {
            alert("reiniciando celular");
        } else {
            alert("el celular esta apagado");
        }
    }

    tomarFotos (){
        alert(`foto tomada en una resolucion de ${this.resolucionDeCamara}`)
    }
    grabarVideos (){
        alert(`video grabado en una resolucion de ${this.resolucionDeCamara}`)
    }

    mobileInfo (){
        document.write(
        `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        tamaño: <b>${this.tamaño}</b><br>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria RAM: <b>${this.memoriaRam}</b><br>
        ` )
    }
}
/*
const celular1 = new celulares("rojo","150g","5","HD","1GB" + "</br>");
const celular2 = new celulares("negro","155g","5.4","full HD","2GB" + "</br>");
const celular3 = new celulares("blanco","146g","5.9","full HD","2GB" + "</br>");

celular1.mobileInfo();
celular2.mobileInfo();
celular3.mobileInfo(); 
*/
/*
//(2da solucion del problema: prende/apaga el movil, toma foto, graba video, reiniciar)
celular1.precionarBotonEncendidoApagado(); //celular encendido
celular1.tomarFotos(); //foto tomada con....
celular1.grabarVideos(); //video grabado con...
celular1.reiniciar(); //reiniciando celular
celular1.precionarBotonEncendidoApagado(); //celular ya esta apagado
*/

//(3ra solucion del problema: Cofla compara caracteristicas de celulares game media con gama alta)
class celularAltaGama extends celulares { //instancia 'celularAltaGama' de la clase 'celulares'
    constructor(color,peso,tamaño,rdc,ram,rdce){
    super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert(`esta grabando en camara lenta`);
    }
    reconocimientoFacial(){
        alert(`vamos a iniciar un reconocimiento facial`);
    }
    infoAltaGama () {
       return this.mobileInfo() + `Resolucion de la camara extra: ${this.resolucionDeCamaraExtra}`
      
    }    
}

const celular1 = new celularAltaGama("gris","130gr","5.2","3GB","4KHD","FHD" + "<br>");
const celular2 = new celularAltaGama("negro","150gr","5","4GB","4k","HD");

celular1.infoAltaGama();
celular2.infoAltaGama();