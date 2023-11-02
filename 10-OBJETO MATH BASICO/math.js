 //METODOS
/*Los objetos Math son objetos incorporados que proporcionan un conjunto de 
funciones y constantes matemáticas para realizar operaciones matemáticas comunes. 
Estas funciones y constantes son útiles cuando necesitas realizar cálculos matemáticos
en tu código JavaScript. Los objetos Math no se pueden instanciar como otros 
objetos en JavaScript, ya que son estáticos y se accede a sus métodos y propiedades
directamente a través del objeto Math.*/

//Math.sqrt(): Esta función calcula la raíz cuadrada de un número.
let numero1 = Math.sqrt(16); 
console.log(numero1); //4

//Math.cbrt(): Esta funcion calcula la raiz cubica de un numero.
let numero2 = Math.cbrt(125); 
console.log(numero2); //5



//explicar como se hallarian el max y min usando spread operato y apply()
//Math.max():Este método toma uno o más argumentos numéricos y devuelve el valor más grande entre ellos. 
let maxNumero = Math.max(5, 6, 10, 2, 8);
console.log(maxNumero); //10

//Math.min():Este método también toma uno o más argumentos numéricos y devuelve el valor más pequeño entre ellos.
let minNumero = Math.min(5, 6, 10, 2, 8);
console.log(minNumero); //2

//Math.max y Math.min en arrays
let numeros =[4,8,12,29,456,97,0]
let maximo = Math.max(...numeros);
console.log(maximo);

const numbers = [2,3,5,6,9,8,10];
console.log(Math.max.apply(null,numbers));





/*Math.random(): Esta función devuelve un número decimal pseudoaleatorio en el rango de 0 a 1.*/
let numero3 = parseInt(Math.random() * 100); //*100 para que el resultado sea entre 0 y 100 enteros
document.write(numero3); //el nro sera aleatorio entre 0 y 100

/*Math.round(): Esta función redondea un número 'x' al número entero más cercano.
Utiliza el redondeo estándar, por lo que los números que están justo a medio
camino entre dos enteros se redondearán al número par más cercano.*/
let numero4 = Math.round(4.5);
console.log(numero4); //5

/*Math:trunc(): Esta funcion elimina la parte decimal de un número, dejando solo la parte entera. En otras palabras,
esta función devuelve el entero más grande menor o igual al número proporcionado.*/
let numero5 = Math.trunc(4.9);
console.log(numero5); //4...trunc() lo que hace es redondear un n°decimal a entero (siempre lo redondea hacia abajo)

//Math.fround(): Se utiliza para redondear un número decimal a la representación más cercana de precisión simple de 32 bits.
const numeroDecimal = 3.14159;
const numeroRedondeado = Math.fround(numeroDecimal);
console.log(numeroRedondeado); // 3.141590118408203

//Math.floor(): Esta función redondea un número 'x' hacia abajo, al número entero más cercano. 
let numero6 = Math.floor(4.8);
console.log(numero6); //4

//Math.pow(x, y): Esta función calcula 'x' elevado a la potencia y. 
let potencia = Math.pow(2, 3);
console.log(potencia); //8... es el resultado de 2 al cubo(3)