'use strict';

// How many answers are correct
var numRight = 0;

// Greeting
var userName = prompt('Hi! What is your name?');
function greeting(){
  alert('Welcome ' + userName + '! I\'m Josh Williams. Enjoy my site. Make yourself at home. Let\'s start with a quiz about my biographical info.');
}

// Questions 1-5 - Bio Questions
// [][0] is the Question, [][1][0-3] is the answer, [][2] is the incorrect response,
var answerYes = ['yes','y','no','n'];
var answerNo = ['no','n','yes','y'];
var questionInfo = [
  // Question 1
  ['Did I grow up in Kent, Washington?',answerYes,'Wrong! I did grow up in Kent.'],
  // Question 2
  ['Is my last name Wilson?',answerNo,'Wrong! My last name is Williams.'],
  // Question 3
  ['Did I study music in college?',answerYes,'Wrong! I did study music in college'],
  // Question 4
  ['Did I work for Carnival?',answerYes,'Wrong! I did work for Carnival.'],
  // Question 5
  ['Is my goal to start a new career as a clown?',answerNo,'Wrong! My goal is to be a programmer.']
];

function bioQuestions(){
  for(var h = 0; h < questionInfo.length; h++) {
    var answer = prompt(questionInfo[h][0]).toLowerCase();
    if (questionInfo[h][1][0] === answer || questionInfo[h][1][1] === answer) {
      numRight++;
      alert('That\'s correct!');
    } else if (questionInfo[h][1][2] === answer || questionInfo[h][1][3] === answer) {
      alert(questionInfo[h][2]);
    } else {
      alert('I don\'t understand. The correct answer is ' + questionInfo[h][1][0] + '. Let\'s move on.');
    }
  }
}

// Question 6 - Number game
function numberGame(){
  var numberThinking = Math.floor(Math.random() * 20 + 1);
  for (var i = 0; i < 4; i++){
    if ( i === 0) {
      var numberGuess = prompt('I\'m thinking of a number from 1-20. Try to guess what it is!');
    }
    if (numberThinking === parseInt(numberGuess)) {
      numRight++;
      alert('You got it! Good job!');
      break;
    } else if (i === 3) {
      alert('The number was ' + numberThinking + '. Good try!');
      break;
    } else if (parseInt(numberGuess) < numberThinking) {
      numberGuess = prompt('Too low. Try another number.');
    } else if (parseInt(numberGuess) > numberThinking) {
      numberGuess = prompt('Too high. Try another number.');
    } else {
      numberGuess = prompt('I don\'t recognize that. Try to guess a number');
    }
  }
}

// Question 7 - Seinfeld guessing game
function seinfeldGame(){
  var seinfeldCharcters = ['jerry', 'george', 'elaine', 'kramer', 'cosmo'];
  var finish = false; // Tells if we can exit the loop
  for (var j = 6; j > 0; j--) {
    if (j === 6) {
      var charGuess = prompt('I\'m a big Seinfeld fan. Tell the name of one of the four main characters.').toLowerCase();
    } else {
      charGuess = prompt('Nope! Guess again! Number of guesses remaining: ' + j).toLowerCase();
    }
    for ( var x = 0; x < seinfeldCharcters.length; x++) {
      if (charGuess === seinfeldCharcters[x]) {
        alert('That is correct!');
        numRight++;
        finish = true;
      }
    }
    if (finish) {
      break;
    } else if (j === 1) {
      alert('You are out of guesses. The main characters on Seinfeld are Jerry, George, Elaine, and Kramer.');
    }
  }
}

greeting();
bioQuestions();
numberGame();
seinfeldGame();

// Final alert
alert('I hope that was fun ' + userName + '! You got ' + numRight + '/7 answers correct!');
