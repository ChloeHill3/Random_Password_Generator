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

// Global Variables
let masterArray = [];
let confirmLowercase = 0;
let confirmNumber = 0;
let confirmUppercase = 0;
let confirmSpecial = 0;

// Function to generate the password, options and prompts/confirms
function generatePassword() {
    let passwordLength = prompt("Please enter the number of characters you want for you new password. It may be between 10 and 64 characters.");
    if (!passwordLength || passwordLength < 10 || passwordLength > 64) {
      return alert("Invalid Response. Please refresh and try again.");

    }  else {
      // Continues once user input is validated  
      confirmLowercase = confirm("Do you want your new password to include lowercase letters?"); 
      if (confirmLowercase == true) {
        masterArray = masterArray.concat(lowerCasedCharacters);
      } else if (confirmLowercase === false){
        masterArray = [];
      }

      confirmUppercase = confirm("Do you want your new password to include uppercase letters?");
      if (confirmUppercase == true) {
        masterArray = masterArray.concat(upperCasedCharacters);
      }

      confirmNumber = confirm("Do you want your new password to include numbers?");
      if (confirmNumber == true) {
        masterArray = masterArray.concat(numericCharacters);
      }

      confirmSpecial = confirm("Do you want your new password to include special characters?");
      if (confirmSpecial == true){
        masterArray = masterArray.concat(specialCharacters)
      }
    }
    // If all 4 = cancelled
    if (!confirmLowercase && !confirmUppercase && !confirmSpecial && !confirmNumber) {
      return alert("Please select a criteria, refresh and try again.");
    }

    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      randomPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
      }
    return randomPassword;
  
    
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

