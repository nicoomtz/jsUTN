//Ejercicio 1

var medioDeTransporte = parseInt(prompt('¿Cuantos metros necesitas recorrer?'));

if (medioDeTransporte > 100000) {
  document.write('Deberias ir en avion');
} else if (medioDeTransporte > 30000) {
  document.write('Deberias ir en auto');
} else if (medioDeTransporte > 10000) {
  document.write('Deberias ir en colectivo');
} else if (medioDeTransporte > 1000) {
  document.write('Deberias ir en bicicleta');
} else if (medioDeTransporte > 0) {
  document.write('Deberias ir a pie');
}

//Ejercicio 2

let mayorNumero = 0;
let numeros = [22, 1, 66, 12, 77, 233, 45, 10];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayorNumero) {
    mayorNumero = numeros[i];
  }
}

document.write(`<br> El numero mayor del array es: ` + mayorNumero);
