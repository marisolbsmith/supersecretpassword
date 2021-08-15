// Assignment Code
var generateBtn = document.querySelector("#generate");
//var
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var symbols = "!@#$%^&*".split("");
var numbers = "0123456789".split("");
var passwordLength = upperCase + lowerCase + symbols + numbers;

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordLength = prompt(
    "Enter number of characters in your password, it must be between 8-128 characters?"
  );
  if (passwordLength > 128) {
    window.alert("Didn't I say between 8-128?!");
    return;
  }
  if (passwordLength < 8) {
    window.alert(
      "Not enough characters, don't you want your password to be super secret?"
    );
    console.log(passwordLength);
    return;
  }
  password += generatePassword(passwordLength);
  var arrayPassword = password.split("");
  password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += arrayPassword[i];
  }
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

function shuffle(password) {
  var a = password.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

//prompts
function generatePassword(x) {
  var password = "";

  var numbers = confirm("Would you like to use numbers in your password?");
  if (numbers) {
    for (var i = 0; i < x; i++) {
      password += getRandomnumbers();
    }
  }

  var upperCase = confirm("Would you like to include uppercase characters?");
  if (upperCase) {
    for (var i = 0; i < x; i++) {
      password += getRandomupperCase();
    }
  }

  var lowerCase = confirm("Would you like to include lowercase characters?");
  if (lowerCase) {
    for (var i = 0; i < x; i++) {
      password += getRandomupperCase();
    }
  }
  console.log(lowerCase);

  var symbols = confirm(
    "Would you like to include symbols AKA special characters?"
  );
  if (symbols) {
    for (var i = 0; i < x; i++) {
      password += getRandomsymbols();
    }
  }
  console.log(symbols);
  var result = shuffle(password);
  return result;
}

//alerts

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

function getRandomupperCase() {
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

function getRandomsymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
