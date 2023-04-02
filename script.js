var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar =["!","@","#","$","%","&","*","?"] 


var passLowerCase;
var passUpperCase;
var passNumeric;
var passSpecialChar;
var passLenght = "";

function generatePassword() {
  
  // THEN I am presented with a series of prompts for password criteria
  
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
   const passwordLenght = prompt ("How long would you like your password? 8-128 characters");
   
   // WHEN asked for character types to include in the password
   // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
   var lowercase = confirm("Do you want lowercase?");
   var upperCase = confirm("Do you want uppercase?");
   var numeric = confirm("Do you want numeric?");
   var specialcharacters = confirm("Do you want special characters?");
  //pasword lenth varification, verifies that the number that was inputed was a number between 8-128
   
  }
   // THEN my input should be validated and at least one character type should be selected
   if(passLowerCase){
    password = password + getRandomValue(lowerCase);
   }
   if(passUpperCase){
    password = password + getRandomValue(upperCase);
   }
   if(passLowerCase){
    password = password + getRandomValue(numeric);
   }
   if (passUpperCase){
    password = password + getRandomValue(specialchara);
   
   // THEN a password is generated that matches the selected criteria
   for (let i = passwordLenght; i < length; i++) {
    password = password + getRandomValue(lowerCase);  
    password = password + getRandomValue(upperCase);
    password = password + getRandomValue(numeric);  
    password = password + getRandomValue(specialcharacters);
   }
   // THEN the password is either displayed in an alert or written to the page
    return password.substring(0, length + 1); 
}

function getRandomValue(str) {
  const randomIndex = Math.floor(Math.random() * str.lenght);
  return str[randomIndex]
  
}






