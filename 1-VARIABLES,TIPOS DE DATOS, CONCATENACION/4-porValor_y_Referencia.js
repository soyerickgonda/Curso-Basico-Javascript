//VALOR POR REFERENCIA 
//Valor por referencia en Valores Primitivos
let a = 3;
let b = a;
console.log(a); //3
console.log(b); //3
b=10;
console.log(a);//3
console.log(b);//10

/*Valores por referencia en Arrays
Ambos arrays apuntan al mismo objeto en la memoria, por lo tanto, cualquier modificación en 'arr2' también se 
reflejará en 'arr1', ya que ambos apuntan al mismo lugar en la memoria.*/
const arr1 = [1,2,3];
const arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.push(4);
console.log(arr1);

/*Valores por referencia en Objetos
Los objetos al igual que los array apuntan al mismo objeto en la memoria, por lo tanto, cuando modificamos una 
propiedad en 'obj2', ese cambio se refleja en 'obj' porque ambos hacen referencia al mismo objeto.*/
const obj = {a:1,b:2}
const obj2 = obj; //obj2 es == obj
console.log(obj); //{ a: 1, b: 2 }
console.log(obj2); //{ a: 1, b: 2 }
obj.a = 4;
obj2.b = 5;
console.log(obj);//{ a: 4, b: 5 }
console.log(obj2);//{ a: 4, b: 5 }

/*El valor de referencia de un objeto que este definido fuera de una funcion, tbn se veria afectado ante cualquier
modificacion que se realice*/
function primeraFuncion(objeto) {
    objeto.name = 'Maria'; //modificamos el valor de la propiedad 'name' a Maria.
    console.log(objeto)
}
const miObjeto = { //declaramos el objeto
    name : 'pepe'
}
primeraFuncion(miObjeto);   //Maria
                            //llamamos a la funcion y pasamos como argumento el objeto creado