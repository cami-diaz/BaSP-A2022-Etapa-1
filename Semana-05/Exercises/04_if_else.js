/* 4a)- Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor
es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un 
alerta con el mensaje “Lower than 0,5”.*/

var num=Math.random();
console.log("4a):", num)
if(num>=0.5){
    alert("Greater than 0,5");
}
else{
    alert("Lower than 0,5");
}

/* 4b)- Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
I-“Bebe” si la edad es menor a 2 años;
II-“Niño” si la edad es entre 2 y 12 años;
III-“Adolescente” entre 13 y 19 años;
IV-“Joven” entre 20 y 30 años;
V-“Adulto” entre 31 y 60 años;
VI-“Adulto mayor” entre 61 y 75 años;
VII-“Anciano” si es mayor a 75 años.*/

var age=Math.random()*100;
console.log ("4b):", age);
if(age<2){
    alert("Bebe");
}
else if (age<12){                      
    alert("Niño");
}
else if (age<19){                      
    alert("Adolescente");
}
else if (age<30){                      
    alert("Joven");
}
else if (age<60){                      
    alert("Adulto");
}
else if (age<75){                      
    alert("Adulto Mayor");
}
else if (age>75){                      
    alert("Anciano");
}