/* 2a)- Crear una variable de tipo string con al menos 10 caracteres y convertir
 todo el texto en mayúscula (utilizar toUpperCase).*/

 var string = "basp-week5-etapa1";
 var secondString = string.toUpperCase();
 console.log("2a):", secondString);

 /* 2b)- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
  string con los primeros 5 caracteres guardando el resultado en una nueva variable 
  (utilizar substring).*/

 var string = "basp-week5-etapa1";
 var newString = string.substring(0, 5);
 console.log("2b):", newString);

 /* 2c)- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
 con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

 var string = "basp-week5-etapa1";
 var newString = string.length;
 var stringReduce = newString - 3;
 var stringEnd = string.substring(stringReduce);
 console.log("2c):", stringEnd);

/* 2d)- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var firstString = "radiumrocket";
var secondString = firstString.substring(0, 1);
var thirdString = secondString.toUpperCase();
var fifthString = firstString.substring(1);
var lastString = fifthString.toLowerCase();
console.log("2d):", thirdString + lastString);

/* 2e)- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la
 posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

 var firstString = "Week 05 of Bootcamp"
 var secondString = firstString.indexOf(" ");
 console.log("2e):", secondString);

 /* 2f)- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string
que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar 
indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var fullString = "software professional";
var emptySpace = fullString.indexOf(" ");
var stringLonger = fullString.length;

var secondString = fullString.substring(0, 1);
var thirdString = secondString.toUpperCase();
var fourthString = fullString.substring(1, emptySpace);
var lastString = fourthString.toLowerCase();
var firstWord = thirdString + lastString;

var secondWord = fullString.substring(emptySpace +1, stringLonger);
var newLonger = secondWord.length;
var lastWord = secondWord.substring(0, 1);
var secondWordUpper = lastWord.toUpperCase();
var fourthString = secondWord.substring(1, newLonger);
var restOfSecondWord = fourthString.toLowerCase();
var finalWord = secondWordUpper + restOfSecondWord;

var sum = firstWord + " " + finalWord;
console.log("2f):", sum);