'use strict';

// Question 1
var growUpKent = prompt('Did I grow up in Kent, Washington?').toLowerCase();
if (growUpKent === 'yes' || growUpKent === 'y') {
  console.log('When asked if website owner grew up in Kent, the user responded ' + growUpKent + '. This is correct.');
  alert('That\'s correct!');
} else if (growUpKent === 'no' || growUpKent === 'n') {
  console.log('When asked if website owner grew up in Kent, the user responded ' + growUpKent + '. This is incorrect.');
  alert('Wrong! I did grow up in Kent.');
} else {
  console.log('When asked if website owner grew up in Kent, the user responded ' + growUpKent + '. This is incorrect.');
  alert('I don\'t understand. Let\'s move on.');
}

// Question 2
var lastNameWilson = prompt('Is my last name Wilson?').toLowerCase();
if (lastNameWilson === 'no' || lastNameWilson === 'n') {
  console.log('When asked if website owner\'s last name is Wilson, the user responded ' + lastNameWilson + '. This is correct.');
  alert('That\'s correct!');
} else if (lastNameWilson === 'yes' || growUpKent === 'y') {
  console.log('When asked if website owner\'s last name is Wilson, the user responded ' + lastNameWilson + '. This is incorrect.');
  alert('Wrong! My last name is Williams.');
} else {
  console.log('When asked if website owner\'s last name is Wilson, the user responded ' + lastNameWilson + '. This is incorrect.');
  alert('I don\'t understand. Let\'s move on.');
}

// Question 3

