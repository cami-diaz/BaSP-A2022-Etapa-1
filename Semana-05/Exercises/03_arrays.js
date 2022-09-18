/* 3a)- Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 
11 (utilizar console.log).*/

const array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3a):", array[4]);
console.log("3a):", array[10]);

/* 3b)- Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)*/

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3b):", months.sort());

/* 3c)- Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

const element = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
element.push("Months");
element.unshift("Year2022");
console.log("3c):", element);

/* 3d)- Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

const outside = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
outside.shift();
outside.pop();
console.log("3d):", outside);

/* 3e)- Invertir el orden del array (utilizar reverse).*/

const invested = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
invested.reverse();
console.log("3e):", invested);

/* 3f)- Unir todos los elementos del array en un único string donde cada mes este separado
por un guión - (utilizar join).*/

const united = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3f):", united.join("-"));

/* 3g)- Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

const copy = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
const secondCopy = copy.slice(4,11);
console.log("3g):", secondCopy);