/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código aca

  if (strings.length === 0) {
    return ""; // Si el arreglo está vacío, no hay un string más largo.
  }

  let stringMasLargo = strings[0]; // Supongamos que el primer elemento es el más largo.

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > stringMasLargo.length) {
      stringMasLargo = strings[i]; // Actualiza el string más largo si encontramos uno más largo.
    }
  }

  return stringMasLargo;

}

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga