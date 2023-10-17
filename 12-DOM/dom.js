/*1
:::¿QUÉ ES EL DOM?:::
Es como un mapa que describe todos los elementos de una página web y cómo se relacionan entre sí. Esto permite 
a los programadores y desarrolladores acceder y manipular fácilmente los contenidos de una página web.

Los elementos principales del DOM son:

Documento (Document): Este es el punto de entrada al DOM. Representa toda la página web y todos los elementos dentros.

Nodos (Nodes): Son los componentes básicos que conforman el DOM y se organizan en una jerarquía, ello facilita
la manipulación y modificación de una página web. 

Hay varios tipos de nodos, pero los más comunes son:

-Nodo de Elemento (Element Node): Representa etiquetas HTML como <div>, <p>, o <a>.
-Nodo de Texto (Text Node): Contiene el texto dentro de los elementos, como palabras o frases.
-Nodo de Atributo (Attribute Node): Representa los atributos de un elemento, como "href" o "src".
-Nodo de Comentario (Comment Node): Utilizado para insertar comentarios en el código HTML.
-Nodo Raíz (Root Node): El nodo raíz es el nodo superior en el árbol del DOM y generalmente representa la etiqueta
 <html>. A partir de este nodo, se ramifican todos los demás nodos.
-Nodo Padre (Parent Node) y Nodo Hijo (Child Node): Los nodos pueden tener relaciones jerárquicas. Un nodo padre
 es un nodo que contiene uno o más nodos hijos. Por ejemplo, un <div> puede ser un nodo padre que contiene varios
 nodos hijos, como nodos de texto o incluso otros elementos HTML.
-Nodo Hermano (Sibling Node): Los nodos que comparten el mismo nodo padre se consideran hermanos. Por ejemplo, 
 dos elementos <li> en una lista no ordenada <ul> son nodos hermanos.
 */

 /*2
 :::METODOS DE SELECCION DE ELEMENTOS:::
 Son herramientas que usan los desarrolladores web para acceder a elementos especificos del DOM de una web
 Estos metodos permiten identificar y trabajar con elementos HTML.

Algunos de los métodos de selección más comunes en JavaScript son:*/

/*getElementById(): Selecciona y retorna un elemento por su atributo "id"*/
var elementoPorId = document.getElementById("parrafo1");
console.log(`<br>elementoPorId: ${elementoPorId}`);

/*getElementsByClassName(): Puede seleccionar y retorna varios elementos con la misma "class"*/
var elementosPorClass = document.getElementsByClassName("parrafo");
console.log(`<br>elementosPorClass: ${elementosPorClass}`); //mostrara todos los elementos con la misma clase
var primerParrafo = elementosPorClass[0];//de las los elementos con class"parrafo", mostrara solo la primera
console.log(`<br>elementosPorClass(primer parrafo): ${primerParrafo}`);

/*getElementsByTagName(): Selecciona elementos por su nombre de etiqueta HTML, como "div", "p" o "a". Devuelve una
colección de elementos.*/
var elementForNameTag = document.getElementsByTagName("div");
console.log(`<br>elementForNameTag ${elementForNameTag}`)

/*querySelector(): Utiliza selectores CSS para seleccionar un elemento de HTML. Devuelve el primer elemento que coincide con el selector.*/
var elementoPorClase = document.querySelector(".titulo"); // Selecciona el elemento de html definido por clase
console.log(elementoPorClase);
var elementoPorId = document.querySelector("#parrafo2"); // Selecciona el elemento de html definido por id
console.log(elementoPorId);

/*querySelectorAll(): Similar a querySelector(), pero devuelve todos los elementos que coinciden con el selector,
en forma de una colección. */
var elementos = document.querySelectorAll(".miClase"); // Selecciona todos los elementos con la clase

/*getElementsByName(): Selecciona elementos por su atributo "name". Usualmente se usa con elementos de formularios, como campos de entrada. */
var elementos = document.getElementsByName("miNombre");

/*3
:::METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS:::*/

/*setAttribute(): Se utiliza para asignar o cambiar el valor de un atributo en un elemento HTML. Puedes especificar
el nombre del atributo y el valor que deseas asignar ó cambiar.*/
var elemento = document.getElementById("input1");
elemento.setAttribute("type","range"); //<input id="input" type="range"> .. lo comento por que es solo un ejemplo, no lo defini en html

//getAttribute(): Se utiliza para obtener el valor de un atributo específico en un elemento HTML. Debes proporcionar el nombre del atributo como argumento.
var elemento = document.getElementById("input2");
var valorId = elemento.getAttribute("id"); //lo comento por que es solo un ejemplo, no lo defini en html
console.log(valorId) // "input2"...es el valor del atributo id

/*removeAttribute(): Se utiliza para eliminar un atributo específico de un elemento HTML. Debes proporcionar el 
nombre del atributo que deseas eliminar.*/
var elemento = document.getElementById("input3");
elemento.removeAttribute("id"); // Elimina el valor "input3" que corresponde al atributo "id" ...lo comento por que es solo un ejemplo, no lo defini en html

/*4
ATRIBUTOS GOBLALES
Son atributos HTML que pueden ser aplicados a prácticamente cualquier elemento en una página web. Estos atributos
proporcionan funcionalidad común que se puede utilizar en muchos elementos diferentes.

Recuerda que estos atributos se añaden dentro de la etiqueta hmtl

alguno de los atributos globales son:*/

//contenteditable: Permite que el contenido de un elemento sea editable por el usuario.(se puede editar en linea)
const titulo = document.querySelector(".titulo");

//dir: indica la direccionalidad del texto




