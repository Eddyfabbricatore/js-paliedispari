const parola = prompt('Inserisci una parola');

isPalindrome(parola);

function isPalindrome(pal){
  for(let i = 0; i < pal.length; i++){
    if(pal[i] === pal[pal.length - 1 - i]){
      console.log('palindroma');
    }else{
      console.log('non palindroma');
    }
  }
};