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


let lettersCombined = lowerCasedCharacters.concat(upperCasedCharacters)
let symbolsAndNumbers = specialCharacters.concat(numericCharacters)

let randomCharacters = lettersCombined.concat(symbolsAndNumbers)

// Function to prompt user for password options
let randomPassword = '';
let passwordCharSet = '';
function getPasswordOptions() {

  let lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += lowerCasedCharacters.lowercase;
  };

  let uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += upperCasedCharacters.uppercase;
  };

  let symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += symbols.symbol;
  };

  let numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += numericCharacters.number;
  };

    var password = "";
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password;
  }


// console.log(getPasswordOptions())
// Function for getting a random element from an array
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomSpecial,
};
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*lowerCasedCharacters.length))
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*UpperCasedCharacters.length))
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*numericCharacters.length))
}

function getRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random()*specialCharacters.length))
}

// Function to generate password with user input
function generatePassword() {

for (let i = 0; i < randomCharacters.length; i++) {
  const randomCharacter = randomCharacters[i];
  let randomPassword = Math.floor(Math.random()*randomCharacters.length)
  randomPasswordGen = randomCharacters[randomPassword]
  
  }return (randomPasswordGen)

}
console.log(generatePassword(64))

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