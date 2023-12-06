/*DOCUMENT OBJECT MODEL (DOM)
Tambien llamado 'árbol del DOM' o simplemente 'DOM' representa a toda la estructura del documento HTML (todos los elementos de una web) 
Estos elementos se relacionan entre sí y permiten a los programadores acceder y manipular fácilmente estos elementos HTML.

::::I)ELEMENTOS PRINCIPALES DEL DOM:::::
-Document: Representa el 'arbol del DOM' de la pagina web (o pestaña del navegador donde nos encontramos navegando).
-Element: representa una etiqueta HTML (<html>, <head>, <body>, <h1>,<p>, etc)
-Node: Son los componentes básicos que conforman el DOM, estos pueden ser elementos, atributos, texto, comentarios y otros tipos de contenido en el DOM.
        Los nodos pueden tener relaciones entre sí, formando una jerarquía que refleja la estructura del documento.

LOS NODOS MAS COMUNES EN EL DOM SON:
-Root Node(Nodo Raíz): Es el 'nodo superior' en el árbol del DOM y generalmente representa la etiqueta <html>. A partir de este nodo, se ramifican todos los demás nodos.
-Element Node(Nodo de Elemento): Representa las diferentes etiquetas HTML como: <div>, <p>, <a>, etc.
-Parent Node(Nodo Padre) y Child Node(Nodo Hijo): Los nodos pueden tener relaciones jerárquicas. Un 'nodo padre'
                      es un nodo que contiene uno o más 'nodos hijos'. 
                      Por ejemplo, un <div> puede ser un nodo padre que contiene varios nodos hijos como nodos de texto <p>, u otros elementos HTML.
-Sibling Nodes(Nodo Hermano):Los nodos que comparten el mismo nodo padre se consideran nodos hermanos.
                             En otras palabras, son nodos hermanos si estan ubicados en el mismo nivel de la jerarquia del DOM. 
                             ejm:<ul><li><li><ul> --> 'li' son nodos hermanos
-Descendant Node (Nodo descendiente):Nodo contenido dentro de otro nodo en la jerarquia del DOM (directa o indirectamente)
                                    (serian como los nietos o bisnietos dentro de un árbol genealógico)
-Text Node(Nodo de Texto): Representa el texto dentro de un elemento.
-Attribute Node(Nodo de Atributo): Representa los atributos que acompañan a una etiqueta HTML(ejm:"href","src","type", etc.
-Comment Node (Nodo de comentario): Representa los comentarios que se realizan en el DOM
 */

/*::::II) METODOS Y PROPIEDADES DE JAVASCRIPT PARA MANIPULAR EL DOM::::
Estos son herramientas que usan los desarrolladores para acceder y trabajar los elementos especificos del DOM(Web)

2.1) METODOS DE SELECCION: nos permite buscar en el DOM de la página y encontrar ciertos elementos.*/

console.log("⬇️aplicando getElementById");
/*getElementById(): Busca y retorna 1 elemento HTML definido por su atributo "Id"*/
//ejm 1:
const titulo1 = document.getElementById("title1");
console.log(titulo1); //<h1 class="title title_1" id="title1">Titulo 1</h1>
/*Nota: 
-Los ID deben ser unicos, pero en el caso de haber 2 o mas elementos con el mismo ID, este metodo devolvera el primero que encuentre.
-En el caso de no encontrar el elemento indicado devolverá 'null'
*/

console.log("⬇️aplicando getElementsByClassName");
/*getElementsByClassName(): Busca y retorna un NodeList con todos los elementos que tengan la misma clase*/
//ejm 1:
const titulos = document.getElementsByClassName("title");
console.log(titulos); //NodeList(5)[h1#title1.title.title_1, h2#title2.title.title_2, h3#title3.title.title_3, h4#title4.title.title_4, h5#title5.title.title_5]

console.log("⬇️aplicando getElementsByTagName");
/*getElementsByTagName(value): Busca y retorna un NodeList con todos los elementos HTML que tengan la misma etiqueta*/
//ejm 1:
const p = document.getElementsByTagName("p");
console.log(p); //HTMLCollection(3) [p#p1.p.p_1, p#p2.p.p_2, p#p3.p.p_3]
console.log(`Hay ` + p.length + ` etiquetas <p> en el DOM`);

/*getElementsByName(): Busca y retorna un NodeList con todos los elementos que tengan el mismo valor del atributo 'name'.*/
console.log("⬇️aplicando getElementsByName");
//ejm 1:
const parrafo = document.getElementsByName("parrafo");
console.log(parrafo); //NodeList(3) [p#p1.p.p_1, p#p2.p.p_2, p#p3.p.p_3]

/*Nota: 
-El 'getElementsByName' usualmente se usa con elementos de formularios, esto permite identificar elementos relacionados 
como campos de entrada de texto, botones de radio o casillas de verificación.*/

/*::RECUERDA::
-Los metodos 'getElementsByClassName', 'getElementsByTagName','getElementsByName' siempre devuelven un NodeList con todos los 
elementos que encajen con el criterio que buscamos. 
-Si el/los elemento(s) que buscamos no existiera, el metodo devolverá un NodeList vacío: []
-Si queremos acceder a un elemento especifico de uno de los metodos, deberemos hacerlo mediante su indice..[0],[1]...
(Ojo: si el indice al que quisieramos acceder no existiera, su valor sera undefined) */

console.log("⬇️aplicando querySelector");
/*querySelector(): Busca y retorna el primer elemento que coincida con el selector CSS ('.' , #) */
//ejm 1:
const selectorXid = document.querySelector("#p2");
console.log(selectorXid); //p#p2.p.p_2

const selectorXclass = document.querySelector(".p_3");
console.log(selectorXclass); //p#p3.p.p_3
/*RECUERDA:: Si el elemento que buscamos no existiera, simplemente arrojara null*/

console.log("⬇️aplicando querySelectorAll");
/*querySelectorAll(): Busca y retorna un NodeList con todos los elementos que coinciden con el selector CSS*/
//ejm 1:
const listaDesordenada = document.querySelectorAll(".li");
console.log(listaDesordenada); //NodeList(3) [li#li1.li.li_1, li#li2.li.li_2, li#li3.li.li_3]

//ejm 2:mide la longitud de los elementos
console.log(listaDesordenada.length); // 3
/*RECUERDA:
-si el elemento que estamos buscando no existiera, este nos mostrara un NodeList vacio []
-Si el indice al que quisieramos acceder no existiera, su valor sera 'undefined' */

/*::::III) METODOS PARA CREAR ELEMENTOS EN EL DOM DESDE JAVASCRIPT::::
(Nota: por ahora solo crearemos elementos, luego lo insertaremos al DOM con los metodos que se vera mas adelante)*/
console.log("⬇️aplicando createElement");
/*createElement: crea y devuelve el elemento HTML que fue definido por el nombre de la etiqueta a utilizar*/
const crearTitulo6 = document.createElement("h6");
const crearSpanNuevo = document.createElement("span");
const crearDiv = document.createElement("div");

console.log("⬇️aplicando createComment");
/*createComment: crea comentarios en HTML */
//ejm 1:
const crearComentario = document.createComment("soy un comentario"); // <!--Comentario-->

console.log("⬇️aplicando createTextNode");
/*createTextNode: crea fragmentos de texto sin usar etiquetas HTML*/
//ejm 1:
const crearTextoAlternativo = document.createTextNode("texto alternativo"); // Nodo de texto: 'hola'
//Nota: 'createComment' y 'createTextNode' devuelven un nodo que podrian utilizarse para insertarlo en el DOM.
//Recuerda: Con estos metodos, solo se crean elementos html en memoria(de momento no son añadidos al DOM)

/*::::IV) METODOS PARA CLONAR ELEMENTOS EN EL DOM::::*/
console.log("⬇️aplicando cloneNode");
/*cloneNode: se usa para clonar un nodo dentro del DOM. Este toma un argumento booleano opcional que indica si debe clonar también
los descendientes de ese nodo. 
-Si es true, clonará también elementos hijos. Se conoce como clonación profunda (Deep Clone).
-Si es false, no clonará elementos hijos. Se conoce como clonación superficial (Shallow Clone).*/

//ejm 1: clonando un elemento del DOM
const divs = document.querySelector("ul");
const clon = divs.cloneNode(true); //true hara que se clone tanto el nodo padre como sus descendientes hijos
console.log(clon); // <ul id="lista_desordenada">...</ul>

/*ejm 2: clonacion de un nuevo elemento*/
const div1 = document.createElement("div");
div1.textContent = "Elemento 1";

const div3 = div1.cloneNode();
div3.innerText = "Elemento 3";
console.log(div1); //<div>Elemento 1</div>
console.log(div3); //<div>Elemento 3</div>

/*
::::V) METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS::::
Las etiquetas HTML tienen ciertos atributos que definen el comportamiento de la etiqueta. 

>>DEFINIR ATRIBUTOS<<

*Añadiendo la propiedad directa:
sintaxis: elemento.id = 'nameID'
Nota: Se puede añadir atributo directamente a las propiedades estándar del DOM, como id, className, innerHTML, entre otros.*/

//ejm 1:
const titulo_1 = document.getElementById("title1");
titulo_1.style.color = "blue"; //añadimos estilo en linea mediante el atributo 'style'
titulo_1.style.color = 'darkRed'; //modificamos el valor del atributo 'style', de 'blue' a 'darkRed'

//ejm 2:
const titulo_5 = document.querySelector('#title5');
titulo_5.style.color = 'purple';

/*2)setAttribute(): Se utiliza para asignar o modificar el valor de un atributo en un elemento HTML.
sintaxis:  (element.setAttribute('nameAttribute', 'valueAttribute'))*/
//ejm 1: 
const span = document.getElementById("sp1");
span.setAttribute("alt", "soySpan"); //creamo el atributo 'alt' cuyo valor es 'soyspan'
span.setAttribute("alt", ""); //eliminamos el valor del atributo 'alt'. (quedara el atributo vacio)

//ejm 2:
console.log("⬇️aplicando setAttribute");
const spans = document.getElementsByTagName('span');
for(let i=0; i < spans.length; i++){
        spans[i].setAttribute('name','soy_span')
}
/*
Recuerda: Los métodos 'getElementsByClassName, getElementsByTagName, y getElementsByName', retornan colecciones de elementos   
similar a un array pero en realidad se llama 'NodeList'. Estos Nodelist al no ser un array(objeto) en si, no pueden recibir 
métodos de array directamente, como si lo hace el getElementById.
Por ende, si deseas realizar operaciones en cada elemento de estas colecciones (como agregar un atributo), se necesitara recorrer
la colección usando algun bucle (como el for) y recien ahi poder aplicar la operación a cada elemento individualmente.*/

//<<OBTENER ATRIBUTOS>>
console.log("⬇️aplicando hasAttributes");
/*hasAttributes():indica si el elemento posee atributos HTML; de ser cierto retornara TRUE, caso contrario FALSE*/
console.log("⬇️aplicando hasAttribute");
/*hasAttribute(nameAttribute):indica si el elemento tiene el atributo HTML pasado por parentesis (nameAttribute). De ser cierto
retornara TRUE, caso contrario FALSE */
console.log("⬇️aplicando getAttributeNames");
/*getAttributeNames():devuelve un array con los atributos del elemento HTML */
console.log("⬇️aplicando getAttribute");
/*getAttribute(): Se utiliza para obtener el valor de un atributo específico de un elemento HTML*/
const atributoH3 = document.getElementsByTagName('h3');
console.log(atributoH3.getAttribute);

//ejms :
const element = document.getElementById('title1')
console.log(element.hasAttributes());           //true
console.log(element.hasAttribute('style'));     //true
console.log(element.getAttributeNames());       //(3) ['class', 'id', 'style']
console.log(element.getAttribute('class'));     //title title_1

//ejm 2:
const elementos = document.getElementsByClassName('title');
for(let i=0; i<elementos.length; i++){
       console.log(elementos[i].getAttributeNames()); //me mostrara todo los elementos con la clase 'title' y los atributos de cada uno 
}
/*Recuerda:
-Si queremos acceder a los atributos de los metodos que retornan un NodeList (que son similares a un array pero no lo son), debemos
usar un bucle para poder recorrer cada uno de esos elementos y asi extraer los atributos
-Si el atributo que buscamos dentro de la etiqueta en la que esta definido el className o ID no existiera, su valor sera null*/

/*<<ELIMINAR ATRIBUTOS>>*/

console.log("⬇️aplicando removeAttribute");
/*removeAttribute(nameAttribute): Se utiliza para eliminar el atributo de un elemento HTML; este atributo se especifica en el () */
//ejm 1:
const eliminarId = document.getElementById('btn1');
eliminarId.removeAttribute('id'); //eliminamos el id del boton 1

//ejm 2:
const eliminarIds = document.getElementsByClassName('cajas');
for(let i=0; i<eliminarIds.length; i++){            //eliminamos los atributos ID de los elementos que tienen la clase 'cajas'
        eliminarIds[i].removeAttribute('id');
}


/*::::VI) LA API CLASSLIST ::::
Proporciona un conjunto de metodos para manipular las clases de un elemento en el DOM. La API 'classList' permite añadir, quitar 
y verificar clases de manera mas conveniente y permite manipular directamente la cadena de clases a traves de la propiedad 'className'.*/

/*Métodos principales de la API 'classList':  
add(): Añade una o más clases al elemento. Si la clase ya existe, no se duplicará.*/

//ejm 1:
const sp1 = document.querySelector('#sp1');
sp1.classList.add('creandoClase');      //se crea una nueva clase

/*remove(): Elimina una o más clases del elemento. Si la clase no existe, no se produce ningún error. */
//ejm 1:
const removeSp1 = document.querySelector('#sp1');
removeSp1.classList.remove('creandoClase'); //se elimina el valor de la nueva clase

/*toggle(): Crea la clase si esta no existe, pero la elimina si esta ya existiera. También puedes usar el segundo parámetro 'force' para forzar la adición o eliminación de la clase. */
const botton = document.querySelector('.btn');
botton.classList.toggle('btn'); //elimina la clase 'btn' que si existe dentro del elemento 
botton.classList.toggle('boton'); //como el nombre de esta clase 'boton' no existe en el elemento, esta sera añadida

/*contains():Comprueba si en el elemento HTML existe una clase específica. Devuelve true (si existe) o false (si no existe). */
const validarClase = document.querySelector('.li');
console.log(validarClase.classList.contains('li'));                     //true, si existe la clase 'li' dentro del elemento

const validarClase1 = document.getElementsByClassName('title')
for(let i=0; i<validarClase1.length; i++){
        console.log(validarClase1[i].classList.contains('title'));      //(5)true, si existe la clase 'title' dentro del elemento
}

const validarClase2 = document.getElementsByTagName('h1');
for (let i=0; i<validarClase2.length; i++){
        console.log(validarClase2[i].classList.contains('subtitle'));   //false, no existe la clase 'subtitle' dentro del elemento
}
//Nota: Puedes usar la condicional 'if' para ejecutar algun funcion segun sea el resultado (true/false)

/*item(index):Este metodo devuelve el nombre de la clase en la posición indicada dentro () de la lista de clases de un elemento. 
Si el índice especificado está fuera de rango, el método retornará null."*/
//ejm 1:
const indexClass = document.querySelector('#p1'); //>>este elemento tiene una clase con 2 nombres: "p p_1" 
console.log(indexClass.classList.item(1)); // "p_1" ..accedo al 2do nombre de la clase

/*replace(oldClass, newClass): Este metodo reemplaza una clase existente con una nueva. */
//ejm 1:
const replaceClass = document.getElementsByTagName('li');
for(i=0; i<replaceClass.length; i++){
        replaceClass[i].classList.replace('li','list'); //se reemplazo el nombre de la clase 'li' por 'list'
}



/*::::xxxxxxxxxx) AÑADIR ESTILO EN EL DOM CON JAVASCRIPT::::
Una de las formas de poder añadir estilos a los elementos html es usando notacion de punto (Dot-notation) seguido de 'style'
y seguido de la 'propiedad' a añadir/modificar seguido del 'valor'.
La sintaxis es similar a cuando añadimos estilos en linea dentro de HTML: (elementoHTML.style.color = 'white')
Nota: Para acceder a todas las propiedades de CSS, digitamos:  'nombreDelElementoHTML.style'*/




/*::::xxxxxxxxx) ATRIBUTOS PARA MANIPULAR EL TEXTO DE LOS ELEMENTOS EN EL DOM (TEXTO)::::

-innerText: obtiene/cambia el contenido de texto de un elemento, excluyendo las etiquetas HTML.*/
console.log("⬇️aplicando innerText");
//ejm 1:

/*textContent: se utiliza para obtener/establecer el contenido de texto de un elemento (similiar al innerText).
Pero hay una diferencia clave: 'textContent' devuelve todos los nodos de texto, incluidos los que están ocultos mediante CSS, 
mientras que innerText no lo hace.*/
console.log("⬇️aplicando textContent");
//ejm 1:

/*innerHTML: se utiliza para obtener o establecer el contenido HTML de un elemento, incluyendo 
todas las etiquetas HTML que contiene.*/
console.log("⬇️aplicando innerHTML");
//ejm 1:



































//>>TEMAS POR ESTUDIAR

/*USANDO FRAGMENTOS 
Los fragmentos son una especie de documento paralelo, aislado de la página con la que estamos trabajando, que tiene varias características:

No tiene elemento padre. Está aislado de la página o documento.
Es mucho más simple y ligero (mejor rendimiento).
Si necesitamos hacer cambios consecutivos, no afecta al reflow (repintado de un documento).
De esta forma, es una estrategia muy útil para usarlo de documento temporal y no realizar cambios consecutivos, con su impacto de rendimiento.

sintaxis: document.createDocumentFragment()

nota: estudiar mas este tema */

/*
ATRIBUTOS GOBLALES
Son atributos HTML que pueden ser aplicados a prácticamente cualquier elemento en una página web. Estos atributos
proporcionan funcionalidad común que se puede utilizar en muchos elementos diferentes.

Recuerda que estos atributos se añaden dentro de la etiqueta hmtl

alguno de los atributos globales son:*/

//contenteditable: Permite que el contenido de un elemento sea editable por el usuario.(se puede editar en linea)

//dir: indica la direccionalidad del texto

/*RECUERDA: 
Aprender sobrel el DOM es importante por su:
-Interactividad: Permite crear páginas web interactivas y dinámicas.
-Manipulación de Contenido: Facilita la manipulación del contenido y la estructura de una página web en tiempo real.
-Actualizaciones Dinámicas: Posibilita actualizar la interfaz de usuario sin necesidad de recargar la página.
-Integración con JavaScript: Es fundamental para trabajar con JavaScript y realizar operaciones en la interfaz de usuario.
*/


/*busca entender bien la diferencia:atributo HTML no es lo mismo que propiedad Javascript, aunque muchos frameworks o 
librerías Javascript simplifican para que parezcan que son la misma cosa.*/