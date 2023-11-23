//Cooper Griffin 
//November 23rd 2023 
//Javascript file for challengeThree project 
//Main purpose to generate and return string password to the HTML/frontend 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// function to call generatePassword() function and to add it to the HTML
function writePassword() {
  //Gets requested password length from the user and converts answer into an int
  var passwordLengthStr = prompt("Enter the password length (between 8 and 128):", "8");
  var passwordLength = parseInt(passwordLengthStr);

  if (passwordLength === null || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to generate and return a string password
function generatePassword(pLength) {

  //Adds characters to charset passed off user input to prompts 
  charset = "";
  if(confirm("Include lowercase characters?")){
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if(confirm("Include UPPERCASE characters?")){
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(confirm("Include numeric characters?")){
    charset += "0123456789";
  }
  if(confirm("Include special characters?")){
    charset += "!@#$%^&*()-=_+[]{}|;:,.<>?";
  }
  
  //checks if user selected to include any of the given character types. If not a default charset is given
  if(charset === ""){
    alert("You selected to include none of the character so you are getting only lowercase whether you like it or not");
    charset += "abcdefghijklmnopqrstuvwxyz";
  }

  var password = "";
  for (var i = 0; i < pLength; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
  }
  return password;
}

// Add event listener to call function writePassword when clicked 
generateBtn.addEventListener("click", writePassword);
