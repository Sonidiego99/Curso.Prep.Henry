// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //letra y objeto son nombres que asignamos al elemento y al objeto que vamos a convertir, en este caso
  //.. el ejercicio define que el objeto debe llamarse así "objeto"
  let array = []
  for (let key in objeto){
     array.push ([key,objeto[key]])
  }
  return array
}
  
  function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // 1. creamos el objeto que debemos devolver en estado vacio
let objeto = {}
// le damos un for para que recorra el objeto, en  esta caso string es el argumento de la función 
  for (let i=0; i<string.length; i++) {
// que tenemos qe hacer? hacemos un condional con object.key busca todas la propiedades en un arreglo 
//.. y las muestra 
// .includes es un metodo de arreglos que revisa si lo que se esta pasando por el argumento esta 
//.. dentro del arreglo, el includes esta en este caso asociado a Object.keys (objeto)
// objetct.keys devuelve un arreglo con todas la propiedades que el arreglo tiene adentro, por 
//.. ejemplo si el arreglo es {a:1, b:2}, devuelve {"a","b"}, ya que este caso a y b serían las 
//.. propiedades
  if (Object.keys(objeto). includes (string [i])){
    objeto [string [i]] =objeto [string [i]] + 1
    continue 
  }
  // este continue se refiere : no haga mas codigo, sino que pase al siguiente elemento y vuelva a 
  //.. comenzar
  objeto[string [i]]= 1
}
//con este coódigo lo que hacemos es decirle que cada vez que encuentre una letra le coloque el valor 
//.. de 1
   return objeto
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
//el string esta divido en dos lo que es mayuscula y lo que es minuscula, por esta razon lo dividmos 
//en dos variables diferentes con resultado en ambos casos string ""
  let minusculas = ""
  let mayusculas = ""
// ahora tengo que revisar letra por letra y ver cual es minuscula y cual es mayuscula
for (let i =0; i<s.length; i++){
// en este condicional le estoy preguntando si la primera letra es igual a la misma letra convertida en 
//.. mayúscula
  if(s[i] === s[i].toUpperCase()){
// va air almacenando todas las letras que sean iguales 
    mayusculas=mayusculas + s[i]
  }
  else {
// va a ir alamacenando todas la letras qe no sean iguales
    minusculas= minusculas+ s[i]
  }
}
//es lo que tengo que devolver, llamoa  las mayusculas  y luego a las minusculas, se puede usar 
//.. también concatenar mayusculas. concat (minusculas)
  return mayusculas + minusculas 
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

// el str es "The Henry Challenge is close!", este se va a pasar a un array para poder iterar cada 
//... cadena, le estamos diciendo que forme un array con las palabras que hay cuando esten separadas
//... por un espacio, devolverá The,Henry,Challenge....., esa separación la hace el .split
var strToArray = str. split (" ")
//el . map va arecorrer cada elmento del array y devuelve un nuevo array
var ArrayFinal= strToArray.map (function (elemento){
// luego quiero que por cada elemento me retorne el elemento que me lo separa en string .split (" ")
// con reverse le va a dar vuelta al elemento, con el .join lo devolvemos unido al string 
  return elemento.split("").reverse().join ("");
});
return ArrayFinal.join (" ");
}

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
//Para poder leer el numero de derecha izquierda e izquierda a derercha se pasa a sitring con
//... .toString, porque un numero como tal no se puede iterar y dar vuelta, se toma lo que se esta
//.. recibiendo por parametro ("numero") y se pasa a string.
let numStr = numero.toString();
// luego el numero lo separamos (.split) lo volvemos al reves (.reverse) y lo volvemos a unir (.join) 
let resultado = numStr.split("").reverse().join("");
// luego hacemos el condicional si la variable "numStr"  es igual a la variable "resultado"
if (numStr === resultado) {
// si la condición se cumple "Es capicua"
  return "Es capicua";
//si la condicion no se cumplo "No es capicua"
} else {
  return "No es capicua";
}
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
let diferenteAbc = "";
// recoremos la cadena que entra como argumento y por cada posicon que recorra el bucle se fija en que 
//... la letra sea igual a cualquiera de las letras de no ser así debe abandonar el código y seguir
//.. con el siguiente elemento, para eso es el continue
for (var i=0; i<cadena.length; i++){
//hacemos el condicional especificando que si el elemento es igual a "a", "b" o "c"
  if (cadena [i]=== "a" || cadena [i]=== "b" || cadena [i] === "c") {
 // le damos "continue" para que pase al siguiente elemento si es que esta condicion se cumple 
    continue; 
  // de lo contrario, le pedimos que adicione el elemento que no es igual a la variable que creamos 
  // ....como"diferenteAbc"
       } else {
// si la condicion no se cumple le solicitamos que a la variable creada le agregue el valor a la cadena
// ... en la posición i
        diferenteAbc += cadena [i];
      }
    }
  // finalmente le pedimos que devuelva lo que tenemos en nuestra variable diferenteAbc
    return diferenteAbc;
  }

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
//el primer for va a recorrer el array en cada elemento, cuantas veces sea necesario (cantidad
//.. de recorridos)
for (let i=0; i<arr.length; i++){
//  el segundo for recorre el array nuevamente y debe ir comparando  y ordenando
  for(let j=i+1; j<arr.length; j++){
// pregunto si mi la longitud de mi segunda posición es menor que la primera, simpre preguntar por el
//... menor
    if(arr[j].length < arr[i].length) {
// se guarda el menor valor, porque quiero ordenar de menor a mayor, así me queda e valor de j guardado
//.. en una nueva variable
      let GuardarValor= arr [j];
// le indico que la posición de j va a ser igual a lo que tengo en la posción de i porque ya guarde 
// ...el valor de j en la variable anterior. 
// ... así remplazo el valor de j por el valor de i, se lo reasigno. En este caso sobrescribe el array
      arr [j] = arr [i];
// asigno lo que tengo en ArrayOrdenado a la posición de i
      arr [i] = GuardarValor;
    }
  }
}
return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
let NuevoArray = []
for (let i=0; i<arreglo1.length; i++){
  for (let j = 0; j<arreglo2.length; j++){
    if (arreglo1[i] === arreglo2[j]){
      NuevoArray.push (arreglo1 [i])
    }
  }
}
return NuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

