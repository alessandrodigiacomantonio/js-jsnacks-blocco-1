var dispari = [];
var numeri;
var carlo='intero positivo';
//----------
//con ciclo for
//---------
for (var i = 1; i < 6; i++) {
  numeri = parseInt(prompt('Inserisci il '+ i +'° numero', carlo));
  console.log(numeri);
  if (numeri % 2 != 0) {
    dispari.push(numeri);
  }
}
console.log(dispari);
alert(dispari);

//----------
//con ciclo while
//----------
// var j= 0;
// while (j < 6) {
//   numeri = parseInt(prompt('Inserisci il '+ ++j +'° numero', carlo));
//   console.log(numeri);
//   j--;
//   if (numeri % 2 != 0) {
//     dispari.push(numeri);
//   }
//   j++;
// }
// console.log(dispari);
// alert(dispari);
