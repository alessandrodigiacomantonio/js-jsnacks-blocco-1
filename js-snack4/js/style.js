var nomi = ['luca', 'paolo', 'gino', 'carlo', 'paride'];
var utente = prompt('Qual è il tuo nome?');
var invito = 'Non puoi entrare';
var i = 0;
var nonTrovato = true;
while (nonTrovato && i < nomi.length) {
  if (nomi[i] == utente) {
    invito = 'Bene, puoi entrare';
    nonTrovato = false;
  }
  i++;
}
alert(invito);
