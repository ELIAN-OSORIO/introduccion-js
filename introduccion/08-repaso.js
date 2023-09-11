let variable = {};

console.log(typeof variable);

//number
//string 
//boolean
//arrays
//objetos

const frutas = ['Manzana','Sandia','Uva']
//console.log(typeof arr);

//for(let i=0; i<arr.length; i++){
    //console.log(arr[i]);
//}

//for(let fruta in arr){
    //console.log(arr[fruta]);
//}

//for(let fruta of arr){
    //console.log(fruta);
//}

let nuevoArr = frutas.map((fruta) =>{
    return fruta
});

//nuevoArr.push("Brocoli");

//console.log(frutas);
//console.log(nuevoArr);

const calif = [10, 8, 6, 4, 7];

const aprobados = calif.filter(c => c >= 7);
console.log(aprobados);

