// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var getoptions = false;
  do {
    var length = prompt("How many characters would you like your password to contain? \n(Password must be between 10 and 64 characters.)");
    var special = confirm("Click OK to confirm including special characters?");
    var numeric = confirm("Click OK to confirm including numeric characters?");
    var lowercase = confirm("Click OK to confirm including lowercase letters?");
    var uppercase = confirm("Click OK to confirm including uppercase letters?");
    var options = {
      length: length,
      numeric: numeric,
      lowercase: lowercase,
      uppercase: uppercase,
      special: special
    } 
    if(length < 10)
    alert("Please choose number large than 9. \n(Password must be between 10 and 64 characters.)");
    else if(length > 64)
    alert("Please choose number less than 65. \n(Password must be between 10 and 64 characters.)");
    else if((!numeric)&&(!lowercase)&&(!uppercase)&&(!special))
    alert("Must choose at least one type.");
    else
    getoptions = true;

  } while(!getoptions);
  return options;
}

// Function for getting a random element from an array and generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions();  
  var possibleCombo = [];
  var finalPassword = "";

  if (passwordOptions.numeric) {
    for (var i of numericCharacters)
      possibleCombo.push(i);
  }
  if (passwordOptions.lowerCase) {
    for (var i of lowerCasedCharacters)
      possibleCombo.push(i);
  }
  if (passwordOptions.upperCase) {
    for (var i of upperCasedCharacters)
      possibleCombo.push(i);
  }
  if (passwordOptions.special) {
    for (var i of specialCharacters)
      possibleCombo.push(i);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  return finalPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);