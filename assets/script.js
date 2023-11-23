//Cooper Griffin 
//November 23rd 2023 
//Javascript file for challengeThree project 
//Main purpose to generate and return string password to the HTML/frontend 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function to call generatePassword() function and to add it to the HTML
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to generate and return a string password
function generatePassword() {
  return "password123"
}

// Add event listener to call function writePassword when clicked 
generateBtn.addEventListener("click", writePassword);
