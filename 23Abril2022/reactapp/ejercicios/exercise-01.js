
const arreglo = [1,2,3,4];

console.log(arreglo);

const arregloDos = [ ...arreglo, 5 ]; 

console.log(arregloDos);

//metodo map

const arregloTres = arregloDos.map(function(numero){
return numero * 2
});

console.log(arregloTres);