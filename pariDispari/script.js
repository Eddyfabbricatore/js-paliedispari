let numUser;
let evenOdd;
const btn = document.getElementById('btnPlay');
let message = document.getElementById('message');

btn.addEventListener('click', function(){
  numUser = parseInt(document.getElementById('inputNumber').value);
  evenOdd = document.getElementById('selectType').value;

  if(evenOdd === 'even') evenOdd = 'pari';
  else  evenOdd = 'dispari';

  let numComputer = randomizer();

  let tot = sum(numUser, numComputer);

  let typeNum = isEvenOdd(tot);

  let res = winner(numUser, evenOdd, numComputer, tot, typeNum);

  message.innerHTML = res;
})

function randomizer(){
  return Math.floor(Math.random() * 100) + 1;
}

function sum(n1, n2){
  return n1 + n2;
}

function isEvenOdd(num){
  if(num % 2) return 'dispari';
  else  return 'pari';
}

function winner(numChoise, typeChoise, numGenerate, totNum, typeTot){  
  if(typeChoise === typeTot){
    return `Il numero scelto dall'utente è ${numChoise}, quello generato per il computer è ${numGenerate}. La somma è ${totNum} ed è ${typeTot}. Avevi giocato ${typeChoise}. Hai vinto`;
  }else{
    return `Il numero scelto dall'utente è ${numChoise}, quello generato per il computer è ${numGenerate}. La somma è ${totNum} ed è ${typeTot}. Avevi giocato ${typeChoise}. Hai perso`;
  }
}