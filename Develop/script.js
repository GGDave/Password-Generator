// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseOptions = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = lowerCaseOptions.toLocaleUpperCase();

// include all options
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  sdf
}

// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    var password = "";
   // THEN I am presented with a series of prompts for password criteria
   
   // THEN I select which criteria to include in the password
   // WHEN prompted for the length of the password
   // THEN I choose a length of at least 8 characters and no more than 128 characters
   const passwordLenght = prompt ("How long would you like your password");
  //  string parseInt() take a look at 
   
   // WHEN asked for character types to include in the password
   // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
   var lowercase = confirm("Do you want lowercase?");
   var upperCase = confirm("Do you want uppercase?");
   var numeric = confirm("Do you want numeric?");
   var specialcharacters = confirm("Do you want special characters?");
   // THEN my input should be validated and at least one character type should be selected
  
   // THEN a password is generated that matches the selected criteria
  
   // THEN the password is either displayed in an alert or written to the page
  
   return password; 
}



