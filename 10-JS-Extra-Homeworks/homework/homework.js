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
  //const cv =[Object.entries(objeto)];
  //return cv;
  const obj =Object.entries(objeto);
  return obj;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
    var mensaje = string;
    var cadena = mensaje.split('');
    var contador = {};
    cadena.forEach(function(valor) {
        if (contador[valor] === undefined) {contador[valor] = 1} else {contador[valor] += 1}
    });
    
    

return contador;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var lower = [];
  var Upper = [];
  var expresionUpper = /[A-Z]/g;
  var expresionLower = /[a-z]/g;
  var arraylower = s.match(expresionLower);
  var arrayUpper = s.match(expresionUpper);
  var resultado ="";

  arraylower.forEach(element => {
    lower.push(element);
  });
  arrayUpper.forEach(element => {
    Upper.push(element);
  });
  resultado =  Upper.join('') +lower.join('');
  return resultado;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strReverse = str.split('').reverse().join('');
  var neoStr = "";
  strReverse = strReverse.split(' ').reverse();
  
  for(i=0; i< strReverse.length; i++) {
    if(i==0){
      neoStr = strReverse[i];
    }else{
      neoStr = neoStr + " " + strReverse[i];
    }
    
  }
  return neoStr;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  var nro = numero.toString();
  nroReverse = nro.split('').reverse().join('')

  if(numero == nroReverse){
    return "Es capicua";
  }else{
    return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  /*var expresion = /[d-z]/g;
  var resultado = "";
  var arraynuevo = [];
  arraynuevo = cadena.toString();
  var a= "";
  arraynuevo = cadena.match(expresion);
  resultado = a.concat(arraynuevo);
  return resultado;*/

  var str = cadena.replace("a","");
  str = str.replace("b","");
  str = str.replace("c","");
  return str;
//if(a.length>0){
//  resultado = a.join('');
//  return resultado;
//}else{
//  return cadena;
//}
  

  
  

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
var ordenar = arr.slice(); 
ordenar.sort(function(a, b) {
    return a.length - b.length
});

return ordenar;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var union = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
    
      if(arreglo2[j] == arreglo1[i]){
        union.push(arreglo1[i]);
      }
    }
  }
return union;
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

