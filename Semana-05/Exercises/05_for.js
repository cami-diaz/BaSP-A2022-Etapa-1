/* 5a- Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle 
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var words = ["home", "bootcamp", "radium", "week", "work"];
contador = 0;
for (contador; contador<words.length; contador++) {
    alert (contador);
console.log("5a:", words[contador]);
}

/*5b- Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta
 por cada palabra modificada.*/

var words = ["home", "bootcamp", "radium", "week", "work"];
n = 0;
for (n; n<words.length; n++) {
    alert (words[n].substring(0,1).toUpperCase()+words[n].slice(1).toLowerCase());
}

/*5c-Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final 
mostrar una única alerta con la cadena completa.*/

var words = ["home", "bootcamp", "radium", "week", "work"];
var sentence = "";
n = 0;
for (n; n<words.length; n++){
    sentence= sentence+words[n];
}
alert (sentence);

/*Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la
repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro 
del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final 
(utilizar console.log).*/

var newArr = []
n = 0
for (n; n<=9; n++) {
    newArr[n] = n;
}
console.log("5d:", newArr);