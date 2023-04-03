var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
// in lines 1,2 we need to add an event listener so JS knows to run the function when the button is clicked.
// when the user initiates a click ne 1 targets line 28 in the html file or the generate id.
function writePassword() { // this line is used to declare the function
  var password = generatePassword(); //in this line we "call" the function and it is defined belowin line 23
  var passwordText = document.querySelector("#password"); 
  //the above line is used to target the anything in the html file with the id of password.
  passwordText.value = password;
  //in the above line, the result of "generatePassword" will be updated here and the targeted
  // id will be updated with the password value
}


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar =["!","@","#","$","%","&","*","?"] 
// lines 15 - 18 define the variables that will be used in "function generatePassword"

var passNumeric;
var passLowerCase;
var passUpperCase;
var passSpecialChar;
var passLenght = "";
//lines 21 - 25 define the variables that will be used in the "if" statement logic.


function generatePassword() {
  //the function below is the logic that will generate and randomize the password.
   passLenght = (prompt("How long would you like your password? 8-128 characters"));

   if (parseInt(passLenght) <= 8 || parseInt(passLenght) >= 128) {
    //here we implement a parseInt method. the number the user inputs will be saved in "passLenght" by putting parseInt infront we state that we want to extract 
    //the valu as number. so if the user inputs "10" this line will extract "10". parseInt only extract numbers additional functions 
    //will need to be added if we need to extract numbers and characters 
    //lastly this if statement is saying that if the number inputted is less <= 8 or >= 128, this prompt will execute  
    prompt("password lenght must be between 8-128 characters")
  }

  var passNumeric = confirm("Do you want numeric?");
  var passLowerCase = confirm("Do you want lowercase?");
  var passUpperCase = confirm("Do you want uppercase?");
  var passSpecialChar = confirm("Do you want special characters?");

  if (passUpperCase == false && passLowerCase == false && passNumeric == false && passSpecialChar == false) {
    // this if statment is to verify if any of the above conditions are met. this prompt will only 
    //execute if user denies all the prompt questions  
    alert("You must choose at least one parameter");
    var passNumeric = confirm("Click OK to confirm if you would like to have numbers");
    var passLowerCase = confirm("Click OK if you would like to have lowercase letters");
    var passUpperCase = confirm("Click OK if you would like to have uppercase letters");
    var passSpecialChar = confirm("Click OK if you would like to have Special Characters");
  }
   
//in the example below "concat" refers to putting two arrays together. in this example we create the var of passwordCharacters
//and leave the []. the result of the logic below will go here. 
 var passwordCharacters = []
 //in the statement below if the user select yes to a numeric value, the logic will add the values of "lowerCase" ,that was defined above,
 //to passwordCharacters. the same principal applies to lines 54 - 67
 if (passNumeric) {
  passwordCharacters = passwordCharacters.concat(numeric)
 }
 if (passLowerCase) {
  passwordCharacters = passwordCharacters.concat(lowerCase)
 }

 if (passUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase)
 }

 if (passSpecialChar) {
  passwordCharacters = passwordCharacters.concat(specialChar)
 }
 console.log(passwordCharacters);
 //in this line we add a console log to be able to see the logic execute in the developer tools.

 var randomPassword = "" //this line will define randomPassword and leave the "" empty and will be updated when the logic has finished.
 for (var i = 0; i < passLenght; i++) { // this line is a "for" loop
 //  the purpose of the loop is to run this specific logic the same number of time as the lenght of the password, in other words if the user selected a 
 // 7 password lenght then the "for" loop will run 7 times.   
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
 //the above logic is used to randomise the characters 
  console.log(randomPassword);
//in this line we add a console log to be able to see the logic execute in the developer tools.
 }
 return randomPassword;
//this line returns the paswords
}
