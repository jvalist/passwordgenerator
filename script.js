// Assignment code here

function generatePassword() {
  var length = prompt("How many characters would you like your password to be?");
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }
  var uppercase = confirm("Would you like your password to contain uppercase letters?");
  var lowercase = confirm("Would you like your password to contain lowercase letters?");
  var numbers = confirm("Would you like your password to contain numbers?");
  var special = confirm("Would you like your password to contain special characters?");
  var passwordBase = "";
  var password = "";

  if (uppercase === true) {
    passwordBase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowercase === true) {
    passwordBase += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers === true) {
    passwordBase += "0123456789";
  }
  if (special === true) {
    passwordBase += "!@#$%^&*()_+";
  }
    for (let i = 0; i < passwordBase.length; i++) {
      password += passwordBase.charAt(Math.floor(Math.random() * passwordBase.length))
    }

  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);