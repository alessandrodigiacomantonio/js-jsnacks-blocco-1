var utente = prompt('Numero a 4 cifre');
var somma = 0;
for (var i = 0; i < 4; i++) {
  somma += parseInt(utente[i]);
  console.log(utente[i]);
  console.log(somma);
}
alert(somma);
