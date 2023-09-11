const titulos = document.querySelectorAll('h1')

//titulo.innerText = 'Titulo desde JavaScript';

//console.log(titulo);

//titulos.forEach(titulo =>{
    //titulos.innerText = 'iteracion';
//})

//titulos[1].innerText

const subTitle = document.querySelector('#subtitulos');

const cursos = document.querySelector('.cursos');

subTitle.innerText = 'Aprendiendo DOM';

const parrafo = document.createElement('p')

const boton = document.createElement('button');

function numeroAzar (){
    return Math.random() * 20;
}

//parrafo.innerText = 'Hola como estas bro recuerda no fallar nunca'

parrafo.innerText = numeroAzar();

document.body.appendChild(parrafo);

boton.innerText = 'Random';
boton.addEventListener('click', numeroAzar)
document.body.appendChild(boton);
