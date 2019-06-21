var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');


var guessSubmit =document.querySelector('.guessSubmit');
var guessField =document.querySelector('.guessField');



var guesscount = 1;
var resetButton;

guessField.focus();

function checkGuess(){

  var userguess = Number(guessField.value);

    if(guesscount === 1){
      guesses.textContent = 'previous guesses: ';
    }


guesses.textContent += userguess + ' ';

if(userguess === randomNumber){
  lastResult.textContent = 'congratualations you got it right';
  lastResult.style.backgroundColor = 'green';
  lastResult.style.color = 'white';
  lowOrHi.textContent=' ';
  setgameover();
}else if (guesscount === 10) {
  lastResult.textContent = 'Game over!!!';
  setgameover();
}else{
  lastResult.textContent = 'wrong!';
  lastResult.style.backgroundColor = 'red';
  lastResult.style.color = 'white';
  if(userguess > randomNumber){
    lowOrHi.textContent = 'Last guess was too high';
  }
  else if (userguess < randomNumber) {
    lowOrHi.textContent = 'Last guess was too low';
  }
}
  guesscount++;
  guessField.value = ' ';
  guessField.focus();


}


document.querySelector('.guessField').addEventListener('keypress', function(e){
guessField.style.border='';
  var isValidText = guessField.value;
  guessSubmit.disabled = false;
  if((/[0-9]/.test(isValidText)) && ((isValidText>=1)&&(isValidText<=100)) )
  {
    if(e.key === 'Enter')
      {
        checkGuess();
    }
  } else {
    guessSubmit.disabled = true;
    guessField.style.border='solid red';
  }

});

guessSubmit.addEventListener('click', checkGuess);



function setgameover(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame(){
guesscount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i=0;i < resetParas.length;i++){
    resetParas[i].textContent=' ';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value=' ';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;

}
