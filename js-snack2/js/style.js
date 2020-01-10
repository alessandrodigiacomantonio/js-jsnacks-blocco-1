var parolaUno = prompt('Inserisci la prima parola');
console.log(parolaUno);
var parolaDue = prompt('Inserisci la seconda parola');
console.log(parolaDue);
if (parolaUno > parolaDue) {
  alert(parolaDue + ' ' + parolaUno);
} else if (parolaUno < parolaDue) {
  alert(parolaUno + ' ' + parolaDue);
} else {
  alert('Hai inserito due parole uguali');
}
