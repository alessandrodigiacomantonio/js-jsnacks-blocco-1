var somma = 0;

//-----
//con ciclo for
//-----
// for (var i = 1; i < 5; i++) {
//   somma += parseInt(prompt('Inserisci il ' + i + '° numero'));
//   console.log(somma);
// }
// alert('la somma dei numeri inseriti è: ' + somma);

//-----
//con ciclo while
//-----
var i = 0;
while (i < 5) {
  somma += parseInt(prompt('Inserisci il ' + ++i + '° numero'));
  console.log(somma);
}
alert('la somma dei numeri inseriti è: ' + somma);
