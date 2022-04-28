//Desestructuracion o Asignacion desestructurante

const persona = {
  
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const avenger = ({edad, clave, nombre, rango='jefe'})  => {

//console.log( nombre, edad, rango );

return{
  nombreClave: clave,
  anios: edad,
  rango: {cabo:5, 
    almirante:10, 
    capitan:15}
}
} 


//Tarea: trae los datos.

const {anios, nombreClave, rango: {cabo, almirante, capitan}} = avenger ( persona );


console.log(anios, nombreClave, cabo);

