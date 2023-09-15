const numUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
const pariDispari = prompt('Scegli pari o dispari');

const numComputer = randomizer();
console.log(numComputer);

const miaSomma = somma(numUtente, numComputer);
console.log(miaSomma);

const isPari = pari(miaSomma);
console.log(isPari);

const risultato = vincitore(pariDispari, isPari);
console.log(risultato);

function randomizer(){
  return Math.floor(Math.random() * (5 - 1 + 1) + 1 );
}

function somma(n1, n2){
  return n1 + n2;
}

function pari(num){
  if(num % 2){
    return 'Dispari';
  }else{
    return 'Pari';
  }
}

function vincitore(parolaUtente, risSomma){
  console.log(parolaUtente, risSomma);
  
  if(parolaUtente === risSomma){
    return 'Il vincitore è l\'utente';
  }else{
    return 'Il vincitore è il computer';
  }
}