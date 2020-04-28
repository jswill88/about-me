'use strict';

// How many answers are correct
var numRight = 0;

// Greeting
var userName = prompt('Hi! What is your name?');
alert('Welcome ' + userName + '! I\'m Josh Williams. Enjoy my site. Make yourself at home. Let\'s start with a quiz about my biographical info.');

// Question 1
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

// Question 2
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

// Question 3
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

// Question 4
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

// Question 5
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

// Final alert
alert('I hope that was fun ' + userName + '! You got ' + numRight + ' answers correct!');
