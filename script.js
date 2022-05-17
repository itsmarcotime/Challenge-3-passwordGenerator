var generateBtn = document.querySelector("#generate");


var getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var getRandomSpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


function generatePassword() {

  var getLength = prompt("How long would you like your password to be? Choose between 8 & 128 characters!");

  while(getLength <= 7 || getLength >= 129) {
    alert("password mush have 8-128 characters.");
    getLength;
  }

  var confirmLower = window.confirm("Do you want LOWERCASE letters in your password?");

  var confirmUpper = window.confirm("Do you want UPPERCASE letters in your password?");

  var confirmNumber = window.confirm("Do you want NUMBERS in your password?");

  var confirmSpecial = window.confirm("Do you want SPECIAL CHARACTERS letters in your password?");

  
  
  var passwordCharacters = []

  if (confirmLower) {
    passwordCharacters = passwordCharacters.concat(getRandomLower)
  }

  if (confirmUpper) {
    passwordCharacters = passwordCharacters.concat(getRandomUpper)
  }

  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(getRandomNumber)
  }

  if (confirmSpecial) {
    passwordCharacters = passwordCharacters.concat(getRandomSpecial)
  }


  var randomPassword = ""

  for (var i = 0; i < getLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  return randomPassword;

};

generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
