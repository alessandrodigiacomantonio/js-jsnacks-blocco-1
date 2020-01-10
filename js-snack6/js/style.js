var numeroUtente = parseInt(prompt('Di quanti numeri vuoi sapere il cubo?'));
var cubo = [];
for (var i = 0; i < numeroUtente; i++) {
  cubo[i] = Math.pow((i+1),3);
}
alert(cubo);
