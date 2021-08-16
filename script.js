// Assignment Code
var generateBtn = document.querySelector("#generate"); 

function generatePassword() {
  var passwordLength;
  do {
    passwordLength = prompt("Enter the maximum length for the new password: must be at least 8 - 125 characters");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length entered is invalid. Try again.");
    }
  } while(passwordLength < 8 || passwordLength > 128);

  var allowedCharacters = "";
  var allowLowercase;
  
  allowLowercase = confirm("Allow lowercase characters?")
  if (allowLowercase) {
    // Then add all lowercase characters to the list of allowed characters.
    allowedCharacters = allowedCharacters + "adbcdefghijklmnopqrstuvwxyz";
  }

  var allowUppercase;
  allowUppercase = confirm("Allow uppercase characters?")
  if (allowUppercase) {
    // Then add all uppercase characters to the list of allowed characters.
    allowedCharacters = allowedCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var allowNumeric;
  allowNumeric = confirm("Allow numeric characters?")
  if (allowNumeric) {
    // Then add all numeric characters to the list of allowed characters.
    allowedCharacters = allowedCharacters + "0123456789";
  }

  var allowSpecial;
  allowSpecial = confirm("Allow special characters?")
  if (allowSpecial) {
    allowedCharacters = allowedCharacters + "!@#$%^&*";
  }

  // Console log the allowed characters from the user to make sure it's working properly.
  // console.log(allowedCharacters);
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * allowedCharacters.length);
    // console.log(password.value)
    password += allowedCharacters[random];
   
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);