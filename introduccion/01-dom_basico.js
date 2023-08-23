console.log("Hola JavaScript");

//var foo;
//let foo1;
//const foo2;

var saludar = "Hola";
var quien = "Mundo";

//console.log(foo);

/**
 * Esta es una impresion compuesta
 */

console.log("%s, %s", saludar, quien);

console.log({
    'Nombre': 'Jesus',
    'Clase': 'Front End 1',
    'Horario': '15:00-16:00'
});

/**
 * Usando el DOM API (Document Object Model)
 */

document.getElementById('parrafo').textContent = 'Jesus Elian';

//Form 1
// document.getElementByID("Parrafo")

//Form 2
var parrafo = document.getElementById("parrafo");
parrafo.textContent = "Aprendiendo JavaScript.DOM API"

/**
 * Creando elementos desde JavaScript a HTML
 */
var elemento = document.createElement("p")
elemento.textContent = 'Creando elementos'
document.body.appendChild(elemento);

