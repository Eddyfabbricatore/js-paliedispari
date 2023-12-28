let wordCheck;
const btn = document.getElementById('btnCheck');
let message = document.getElementById('message');

btn.addEventListener('click', function(){
  reset();

  wordCheck = document.getElementById('wordCheck').value;

  wordReverse = isPalindrome(wordCheck);

  if(wordCheck === wordReverse) message.innerHTML = `La parola ${wordCheck} è palindroma perchè il suo contrario è ${wordReverse}`;
  else  message.innerHTML = `La parola ${wordCheck} non è palindroma perchè il suo contrario è ${wordReverse}`;
})

function isPalindrome(word){
  return word.split('').reverse().join('');
}

function reset(){
  wordCheck = '';
}