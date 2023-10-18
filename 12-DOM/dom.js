/*1:::¿QUÉ ES EL DOM?:::
Es como un mapa que describe todos los elementos de una página web y cómo se relacionan entre sí. Esto permite a los programadores y 
desarrolladores acceder y manipular fácilmente los elementos HTML de una página web.

:::LOS ELEMENTOS PRINCIPALES DEL DOM SON:::
-Document(Documento): Este es el punto de entrada al DOM. Representa todos los elementos de una pagina web.
-Nodes(Nodos): Son los componentes básicos que conforman el DOM, estos son cualquier etiqueta de html y se organizan 
jerárquicamente. 
Nota::Los nodos facilita la manipulación y modificación de una página web. 

:::LOS NODOS MAS COMUNES EN EL DOM SON:::
-Root Node(Nodo Raíz): El nodo raíz es el 'nodo superior' en el árbol del DOM y generalmente representa la etiqueta
                      <html>. A partir de este nodo, se ramifican todos los demás nodos.
-Element Node(Nodo de Elemento): Representa etiquetas HTML como <div>, <p>, <a>, etc.
-Parent Node(Nodo Padre) y Child Node(Nodo Hijo): Los nodos pueden tener relaciones jerárquicas. Un 'nodo padre'
 es un nodo que contiene uno o más 'nodos hijos'. Por ejemplo, un <div> puede ser un nodo padre que contiene varios
 nodos hijos como nodos de texto <p>, u otros elementos HTML.
-Sibling Node(Nodo Hermano): Los nodos que comparten el mismo nodo padre se consideran hermanos. Por ejemplo, 
 dos elementos 'lista' <li> dentro de una 'lista no ordenada' <ul> son nodos hermanos.
-Text Node(Nodo de Texto): Contiene el texto dentro de los elementos, como palabras o frases.
-Attribute Node(Nodo de Atributo): Representa los atributos que acompañan a una etiqueta HTML(ejm:"href","src","type", etc.
-Comment Node(Nodo de Comentario): Se usa para insertar comentarios en el código HTML.
 */

/*2:::METODOS DE SELECCION DE ELEMENTOS:::
 Son herramientas que usan los desarrolladores para acceder y trabajar elementos especificos del DOM de una web

METODOS DE SELECCION MAS COMUNES EN JAVASCRIPT SON:*/

/*2.1
getElementById(): Busca y retorna 1 elemento HTML definido por su atributo "id"*/
let elementoPorId = document.getElementById("parrafo1");
console.log(elementoPorId) // p#parrafo1  ||  <p id="parrafo1">soy un id con parrafo 1</p>

let elementoPorId2 = document.getElementById("parrafo");//no existe el ID con el nombre 'parrafo'
console.log(elementoPorId2) // null
//Nota: en el caso de no encontrar el elemento indicado devolverá null

/*2.2
getElementsByClassName(): Busca y retorna varios elementos definidos con la misma clase*/
let elementosPorClases = document.getElementsByClassName("parrafo");
console.log(elementosPorClases); //HTMLCollection(2) [p.parrafo, p.parrafo]
console.log(elementosPorClases[0]); //p.parrafo || <p class="parrafo">soy una clase con parrafo 1</p>
/*Nota 1: si el nombre de la clase que buscamos no existiera en HTML, simplemente arrojara un array vacio: HTMLCollection []
Nota 2: si tenemos varios elementos HTML con el mismo nombre de la clase y queremos acceder a uno de ellos especificamente, deberemos acceder mediante su indice..[0],[1]...
Ojo: si el indice al que quisieramos acceder no existiera, su valor sera undefined */


/*2.3
getElementsByTagName(value): Busca elementos HTML por el nombre de la etiqueta y devuelve una coleccion de todos los elementos que coicidan con ese nombre de etiqueta*/
let nombreDeEtiqueta = document.getElementsByTagName("div");
console.log(nombreDeEtiqueta); //HTMLCollection(2) [div, div]

let nombreDeEtiqueta2 = document.getElementsByTagName("label");
console.log(nombreDeEtiqueta2); //HTMLCollection []...mostrara un array vacio ya que la etiqueta que se busca no existe en el DOM
/*Nota 1: si el nombre de la etiqueta que buscamos no existiera en HTML, simplemente arrojara un array vacio: HTMLCollection []
Nota 2: si tenemos varias etiquetas HTML con el mismo nombre y queremos acceder a uno de ellos especificamente, deberemos acceder mediante su indice..[0],[1]...
Ojo: si el indice al que quisieramos acceder no existiera, su valor sera undefined */


/*2.4
getElementsByName(value): Busca y retorna todo los elementos con el mismo "valor del atributo 'name'". 
Usualmente se usa con elementos de formularios, ya que se vuelve util para identificar elementos relacionados como
campos de entrada de texto, botones de radio o casillas de verificación.*/
let elementos1 = document.getElementsByName("primerNombre");
console.log(elementos1); //NodeList [input]
var elementos2 = document.getElementsByName("apodo");
console.log(elementos2); //NodeList []
/*Nota 1: si el 'nombre del atributo name' que buscamos no existiera en HTML, simplemente arrojara una lista de nodos vacio: NodeList []
Nota 2: si tenemos varios atributos 'name' con el mismo valor(nombre) y queremos acceder a uno de ellos especificamente, deberemos acceder mediante su indice..[0],[1]...
Ojo: si el indice al que quisieramos acceder no existiera, su valor sera undefined */


/*2.5
querySelector(): Busca y retorna el primer elemento que coincida con el selector CSS (. , # , )*/
let querySelectorPorId = document.querySelector("#paragraphId"); // Selecciona el elemento de html definido por Id
console.log(querySelectorPorId); //<p id="paragraphId">soy un id con parrafo 1</p>  ||  p#paragraphId

var querySelectorPorNameTag = document.querySelector(".parrafo4"); // Selecciona el elemento de html definido por class
console.log(querySelectorPorNameTag); //<p class="parrafo4">soy un id con parrafo 2</p> || p.parrafo4

var querySelectorPorNameTag = document.querySelector(".cualquiercosa");
console.log(querySelectorPorNameTag); //null
/*Nota 1: si el 'nombre del elemento que acompaña al selector CSS' que buscamos no existiera, simplemente arrojara null
Nota 2: si tenemos varios elementos con el mismo nombre que acompañan al selector CSS, querySelector solo devolvera al primero que encuentre.*/


/*2.6
querySelectorAll(): Busca y retorna todos los elementos que coinciden con el selector CSS */
var querySelectorAllPorClase = document.querySelectorAll(".lista"); // Selecciona todos los elementos con la clase"lista"
console.log(querySelectorAllPorClase); //NodeList(3) [li.lista, li.lista, li.lista]
/*Nota 1: si el 'nombre del elemento que acompaña al selector CSS' que buscamos no existiera, arrojara una lista de nodos vacio : NodeList []
Nota 2: si tenemos varios elementos con el mismo nombre que acompañan al selector CSS y queremos acceder solo a uno de ellos, deberemos usar los indice..[0],[1],[2]...etc
Ojo: si el indice al que quisieramos acceder no existiera, su valor sera undefined */


/*3:::METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS:::*/

/*3.1
setAttribute(): Se utiliza para asignar o cambiar el valor de un atributo en un elemento HTML. Para ello deberás especificar
el nombre de la etiqueta de HTML y el valor que deseas asignar ó cambiar.*/
var modificarValor = document.getElementById("input1"); //invocamos al Id cuyo valor tiene a 'input1'
modificarValor.setAttribute("type","range"); //especificamos el atributo que esta/estará dentro de la etiqueta HTML, seguido del valor que se va añadir o modificar a dicho atributo.
                                        //<input id="input1" placeholder="asigno el valor al atributo type" type="range"></input>

/*3.2
getAttribute(): Se utiliza para obtener el valor de un atributo específico de un elemento HTML*/
let input = document.querySelector(".input3"); //invocamos al id cuyo valor es 'input1'
let traerValorDelAtributoInput = input.getAttribute("alt"); //de la misma etiqueta donde esta el Id, extraemos el valor del atributo alt
console.log(traerValorDelAtributoInput);//soy-un-input

/*Nota 1: si el atributo que buscamos dentro de la misma etiqueta en la que esta el Id(para este ejemplo) no existiera, su valor sera null
Nota 2: El getAttribute no funcionaria si lo aplicamos directamente al metodo de seleccion 'getElementsByClassName', esto se debe a que getElementsByClassName devuelve una coleccion de elementos
y getAttribute solo puede acceder a un elemento especifico como si lo proporcionan los otros metodos de seleccion (getElementById,querySelector)*/


/*3.3
removeAttribute(): Se utiliza para eliminar un atributo específico de un elemento HTML. Debes proporcionar el nombre del atributo que deseas eliminar.*/
let eliminarAtributoPorId = document.getElementById("input2");
eliminarAtributoPorId.removeAttribute("id"); //Se eliminó el atributo 'id' y su valor.
                                             //<input alt="soy-un-input" placeholder="obtengo el valor del atributo de la propiedad id">

/*4
ATRIBUTOS GOBLALES
Son atributos HTML que pueden ser aplicados a prácticamente cualquier elemento en una página web. Estos atributos
proporcionan funcionalidad común que se puede utilizar en muchos elementos diferentes.

Recuerda que estos atributos se añaden dentro de la etiqueta hmtl

alguno de los atributos globales son:*/

//contenteditable: Permite que el contenido de un elemento sea editable por el usuario.(se puede editar en linea)
const titulo = document.querySelector(".titulo");

//dir: indica la direccionalidad del texto





