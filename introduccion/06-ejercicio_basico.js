var estudiantes = [
    {
        nombre: 'Elian',
        edad: 21,
        semestre: 8,
        carrera: 'Sistema',

    },
    {
        nombre: 'Jorge',
    },
    {
        nombre: 'Oscar'
    },
    {
        nombre: 'Brayan'
    },
    {
        nombre: 'Brandon'
    },
    {
        nombre: 'Pedro'
    },
    {
        nombre: 'Carlos'
    },
];

//console.log(estudiantes[0].nombre)

//for(var estudiante of estudiantes){
    //console.log(estudiante.nombre);
//}

var persona = {
   nombre: 'Martha',
   estudiante:{
    carrera: 'Administracion',
    semestre: 6,
    promedio: 8.5,
    materias:[
        "Calculo I",
        "Administracion de empresa",
        "Gestion de proyectos",
    ],
   },
   edad: 23,
};

console.log(persona.nombre)
var materias = persona.estudiante.materias;
for(var materia of materias){
    console.log(materia);
}

materias.map( materia => {
    console.log(materia);
});

var nuevoArray = materias.map((materia) =>{
    console.log(nuevoArray);
    nuevoArray.push("Algebra");

    console.log(nuevoArray);
    console.log(materias);
});