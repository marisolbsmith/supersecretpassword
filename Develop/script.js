// Assignment Code
var generateBtn = document.querySelector("#generate");
//var
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*".split();
var numbers = '"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"';
var passwordLength = upperCase + lowerCase + symbols + numbers;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// validate
passwordLength = parseInt(passwordLength);
upperCase = parseInt(upperCase);
lowerCase = parseInt(lowerCase);
numbers = parseInt(numbers);
symbols = parseInt(symbols);

/*console.log(passwordLength);
console.log(symbols);
console.log(numbers);
console.log(lowerCase);
console.log(upperCase);*/

//prompts
function generatePassword() {
  var passwordLength = prompt(
    "Enter number of characters in your password, it must be between 8-128 characters?"
  );
  console.log(passwordLength);

  var numbers = confirm("Would you like to use numbers in your password?");
  console.log(numbers);

  var upperCase = confirm("Would you like to include uppercase characters?");
  console.log(upperCase);

  var lowerCase = confirm("Would you like to include lowercase characters?");
  console.log(lowerCase);

  var symbols = confirm(
    "Would you like to include symbols AKA special characters?"
  );
  console.log(symbols);
}

//alerts
if (passwordLength > 128) {
  alert("Didn't I say between 8-128?!");
}
if (passwordLength < 8) {
  alert("Not enough characters, don't you want your password to be super secret?");
}
//for loop
for (var i = 0; i <= passwordLength; i++) {
  console.log("My password" + [i] + ".");
}

if (upperCase === true) {
  console.log(upperCase);
} else console.log("please");

if (lowerCase === true) {
  console.log(lowerCase);
} else console.log("work");

if (numbers === true) {
  console.log(numbers);
} else console.log("for me");

if (symbols === true) {
  console.log(symbols);
} else console.log("or I will die");

/*function getRandomupperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
console.log(getRandomupperCase);

function getRandomlowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
console.log(getRandomlowerCase);

function getRandomnumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
console.log(getRandomnumbers);

function getRandomsymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomsymbols);*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
