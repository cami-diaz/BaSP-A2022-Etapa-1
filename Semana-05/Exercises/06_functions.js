/*6a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

function sum (numberOne, numberTwo) {
    return numberOne + numberTwo;
}
console.log("6a:", sum(950,300));

/*6b- A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es
un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado.*/

function sum (numberOne, numberTwo) {
    if (typeof(numberOne) === 'number' && typeof(numberTwo) === 'number'){
        return numberOne+numberTwo;
    }
    else{
        alert("Parameter not allowed");
        return NaN;
    } 
}

/* 6C- Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva 
verdadero si es un número entero.*/

function validate (number){
    if (Number.isInteger(number)) {
        return true;
    }
    else{
        return false;
    }
}
console.log("6c:", validate(1200))


/* 6d- A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que 
valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar 
el número convertido a entero (redondeado).*/

function sum(numberOne,numberTwo) { 
    if(typeof(numberOne) === 'number' && typeof(numberTwo) === 'number'){
        if(!sum(numberOne)){
            numberOne=Math.round(numberOne);
            alert("The first parameter wasn't an integer but was coverted");
        }
        if(!sum(numberTwo)){
            numberTwo=Math.round(numberTwo);
            alert("The second parameter wasn't an integer but was converted");
        }
        return numberOne+numberTwo;
    }
    else{
        alert("Parameter not allowed");
        return NaN;
    }
}

/*6-e Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función
 suma probando que todo siga funcionando igual.*/

 function validate (numberOne,numberTwo) {
    if (typeof numberOne === "number" && typeof numberTwo === "number") {
        return true;
    } 
    else {
        alert("Parameter not allowed");
        return false;
    }
 }

function sum(numberOne,numberTwo) {
    if (validate(numberOne, numberTwo) === true){
            return numberOne + numberTwo;
    } 
}

console.log("6e:", sum(1,3));