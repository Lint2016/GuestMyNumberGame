'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1// we set a random number between 1-20
console.log(secretNumber)
let score = 20// this is the intitial starting score for the game
let highscore= 0// this is the initial highscore whenever the game start
const displayMessage = function(message){
   document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', ()=>{
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess);
   // when there is no input
   if(!guess){
    /*document.querySelector('.message').textContent =" No number 2 check!"*/
  displayMessage('No number to check');
    //when player wins
   }
   else if(guess === secretNumber){
   /* document.querySelector('.message').textContent = " Correct number!"*/
     displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber
    document.body.style.backgroundColor='green';
      document.querySelector('.number').style.width='30rem';
      //set the highscore
      if(score>highscore){
         highscore=score;
         document.querySelector('.highscore').textContent= highscore;
      }

    //when player is wrong
   }else if(guess!== secretNumber){
       if(score>1){
 //document.querySelector('.message').textContent = guess > secretNumber? " Bigger than secret number!": " Smaller than secret number"
    displayMessage(guess > secretNumber? " Bigger than secret number!": " Smaller than secret number")
 score--;
    document.querySelector('.score').textContent=score;
   }else{
    document.querySelector('.message').textContent =" You lost the game!"
    document.querySelector('.score').textContent=0;
   }
   }

 
})
// Reset the game 
document.querySelector('.again').addEventListener('click', ()=>{
   score = 20;
   secretNumber = Math.trunc(Math.random()*20)+1;
   document.body.style.backgroundColor='#222';
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value='';
   document.querySelector('.message').textContent = 'Start guessing...'
})