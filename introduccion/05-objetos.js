/**
 * Objetos, se inician con corchetes y para JavaScript son
 * objetos
 * Sintaxis: key, value
 */

var objeto = {}
console.log(objeto);

var oscar = {
    nombre:'Oscar Martinez',
    edad: 31,
    genero: 'Masculino',
    carrera: 'Sistemas',
    semestre: 'Octavo',
}
console.log("Hola " + oscar.nombre + " bienvenido al curso del semestre " + oscar.semestre);

console.log(
    `Hola ${oscar.nombre},
     bienvenido al curso del semestre ${oscar.semestre},
     espero te lo pases genial aprendiendo a programar`)
    ;