// Funciones en js
//este metodo no se recomienda porque es facil de modificar.

//function saludar (nombre){
//   return `Hola, ${nombre}`;
// }
// saludar = 30

// console.log(saludar('Goku'));
// console.log (saludar);

//metodo recomendado.
//se recomienda hacerlo de esta forma porque js no permite reescribir
//constantes, eso hace que sea altamente seguro guardar datos en ellas
const saludar = function(nombre){
  return `Hola, ${nombre}`
}

console.log(saludar);

//Tarea: transforma la siguiente funcion a una funcion flecha.

function getUsuarioActivo (nombre){
  return{
    uid: 'ABC567',
    userName: nombre
  }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log (usuarioActivo);

//Solucion.

const getUsuarioActivoDos = (nombre) => (
  {
  uid: 'ABC567',
  userName: nombre
  }
)
 const usuarioActivoDos = getUsuarioActivoDos('Javier'); 
console.log(usuarioActivoDos)