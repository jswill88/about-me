'use strict';

// How many answers are correct
var numRight = 0;

// Greeting
var userName = prompt('Hi! What is your name?');
function greeting(){
  alert('Welcome ' + userName + '! I\'m Josh Williams. Enjoy my site. Make yourself at home. Let\'s start with a quiz about my biographical info.');
}
  
// Question 1
function questionOne(){
  var growUpKent = prompt('Did I grow up in Kent, Washington?').toLowerCase();
  if (growUpKent === 'yes' || growUpKent === 'y') {
    // console.log('When asked if website owner grew up in Kent, the user responded ' + growUpKent + '. This is correct.');
    numRight++;
    alert('That\'s correct!');
  } else if (growUpKent === 'no' || growUpKent === 'n') {
    // console.log('When asked if website owner grew up in Kent, the user responded ' + growUpKent + '. This is incorrect.');
    alert('Wrong! I did grow up in Kent.');
  } else {
    // console.log('When asked if website owner grew up in Kent, the user responded ' + growUpKent + '. This is incorrect.');
    alert('I don\'t understand. The correct answer is yes. Let\'s move on.');
  }
}

// Question 2
function questionTwo(){
  var lastNameWilson = prompt('Is my last name Wilson?').toLowerCase();
  if (lastNameWilson === 'no' || lastNameWilson === 'n') {
    // console.log('When asked if website owner\'s last name is Wilson, the user responded ' + lastNameWilson + '. This is correct.');
    numRight++;
    alert('That\'s correct!');
  } else if (lastNameWilson === 'yes' || growUpKent === 'y') {
    // console.log('When asked if website owner\'s last name is Wilson, the user responded ' + lastNameWilson + '. This is incorrect.');
    alert('Wrong! My last name is Williams.');
  } else {
    // console.log('When asked if website owner\'s last name is Wilson, the user responded ' + lastNameWilson + '. This is incorrect.');
    alert('I don\'t understand. The correct answer is no. Let\'s move on.');
  }
}


// Question 3
function questionThree(){
  var didIStudyMusic = prompt('Did I study music in college?').toLowerCase();
  if (didIStudyMusic === 'yes' || didIStudyMusic === 'y') {
    // console.log('When asked if website owner studied music in college, the user responded ' + didIStudyMusic + '. This is correct.');
    numRight++;
    alert('That\'s correct!');
  } else if (didIStudyMusic === 'no' || didIStudyMusic === 'n') {
    // console.log('When asked if website owner studied music in college, the user responded ' + didIStudyMusic + '. This is incorrect.');
    alert('Wrong! I did study music in college.');
  } else {
    // console.log('When asked if website owner studied music in college, the user responded ' + didIStudyMusic + '. This is incorrect.');
    alert('I don\'t understand. The correct answer is yes. Let\'s move on.');
  }
}


// Question 4 - Carnival Cruise Lines
function questionFour(){
  var workCarnival = prompt('Did I work for Carnival?').toLowerCase();
  if (workCarnival === 'yes' || workCarnival === 'y') {
    // console.log('When asked if website owner worked for Carnival, the user responded ' + workCarnival + '. This is correct.');
    numRight++;
    alert('That\'s correct!');
  } else if (workCarnival === 'no' || workCarnival === 'n') {
    // console.log('When asked if website owner worked for Carnival, the user responded ' + workCarnival + '. This is incorrect.');
    alert('Wrong! I did work for Carnival.');
  } else {
    // console.log('When asked if website owner worked for Carnival, the user responded ' + workCarnival + '. This is incorrect.');
    alert('I don\'t understand. The correct answer is yes. Let\'s move on.');
  }
}


// Question 5
function questionFive(){
  var goalClown = prompt('Is my goal to start a new career as a clown?').toLowerCase();
  if (goalClown === 'no' || goalClown === 'n') {
    // console.log('When asked if website owner\'s career goal was to become a clown, the user responded ' + goalClown + '. This is correct.');
    numRight++;
    alert('That\'s correct!');
  } else if (goalClown === 'yes' || goalClown === 'y') {
    // console.log('When asked if website owner\'s career goal was to become a clown, the user responded ' + goalClown + '. This is incorrect.');
    alert('Wrong! My goal is to be a programmer.');
  } else {
    // console.log('When asked if website owner\'s career goal was to become a clown, the user responded ' + goalClown + '. This is incorrect.');
    alert('I don\'t understand. The correct answer is no. Let\'s move on.');
  }
}


// Question 6 - Number game

function numberGame(){
  var numberThinking = Math.floor(Math.random() * 20 + 1);

  for (var i = 0; i < 4; i++){
    if ( i === 0) {
      var numberGuess = prompt('I\'m thinking of a number from 1-20. Try to guess what it is!');
    }
    // eslint-disable-next-line eqeqeq
    if (numberThinking === parseInt(numberGuess)) {
      numRight++;
      alert('You got it! Good job!');
      console.log('When asked to guess a number, the user guessed ' + numberThinking + '. This is correct');
      break;
    } else if (i === 3) {
      alert('The number was ' + numberThinking + '. Good try!');
      break;
    } else if (parseInt(numberGuess) < numberThinking) {
      console.log('When asked to guess a number, the user guessed ' + numberGuess + '. This is incorrect');
      numberGuess = prompt('Too low. Try another number.');
    } else if (parseInt(numberGuess) > numberThinking) {
      console.log('When aked to guess a number, the user guessed ' + numberGuess + '. This is incorrect');
      numberGuess = prompt('Too high. Try another number.');
    } else {
      console.log('When asked to guess a number, the user guessed ' + numberGuess + '. This is incorrect');
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
      console.log('When asked to guess a Seinfeld character, the user guessed ' + charGuess + '. This is incorrect');
      charGuess = prompt('Nope! Guess again! Number of guesses remaining: ' + j).toLowerCase();
    }
    for ( var x = 0; x < seinfeldCharcters.length; x++) {
      if (charGuess === seinfeldCharcters[x]) {
        alert('That is correct!');
        console.log('When asked to guess a Seinfeld character, the user guessed ' + charGuess + '. This is correct');
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
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
numberGame();
seinfeldGame();

// Final alert
alert('I hope that was fun ' + userName + '! You got ' + numRight + '/7 answers correct!');
