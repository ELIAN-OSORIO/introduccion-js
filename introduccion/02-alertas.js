/**
 * Usando alertas basicas
 */

var mensaje = 'Soy una alerta';

window.alert(mensaje);
console.log("continua el codigo....");

/**
 * Para obtener datos del usuario
 */

var edad = document.createElement("p");
edad.textContent = prompt("¿Cuantos años tienes?");
document.body.appendChild(edad);
console.log(edad);

/**
 * Usar un modal para confirmar
 */

var resultado = window.confirm("Estudias");
if(resultado){
    window.alert("Felicidades")
}else{
    window.alert(':(')
}
