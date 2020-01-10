var numeroUno = parseInt(prompt('Inserisci il primo numero'));
console.log(numeroUno);
var numeroDue = parseInt(prompt('Inserisci il secondo numero'));
console.log(numeroDue);
if (numeroUno > numeroDue) {
  alert('Il maggiore è: ' + numeroUno);
} else if (numeroUno < numeroDue) {
  alert('Il maggiore è: ' + numeroDue);
} else  {
  alert('Hai inserito due numeri uguali');
}
