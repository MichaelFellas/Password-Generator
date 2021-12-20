// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","w","X","Y","Z"];
  var numbers= ["0","1","2","3","4","5","6","7","8","9"];
  var specialChars = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~"];
  var passwordPool= [];
  var passwordArray = [];

 let passwordLength = prompt("How long would you like your Password to be? (between 8-128 characters)");
  if (passwordLength <8) {
    alert("Password is too short! 8 or more characters! Try Again");
    generatePassword();
  }
  else if (passwordLength >128) {
    alert("Password is too long! 128 or less characters! Try Again");
    generatePassword();
  }

  if (confirm("Would you like to use lowercase Characters?") == true) {
    passwordPool = passwordPool.concat(lowerCase)
  }
  else {
    passwordPool = passwordPool
  }

  if (confirm("Would you like to use uppercase Characters?") == true) {
    passwordPool = passwordPool.concat(upperCase)
  }
  else {
    passwordPool = passwordPool
  }

  if (confirm("Would you like to use number Characters?") == true) {
    passwordPool = passwordPool.concat(numbers)
  }
  else {
    passwordPool = passwordPool
  }

  if (confirm("Would you like to use special Characters?") == true) {
    passwordPool = passwordPool.concat(specialChars)
  }
  else {
    passwordPool = passwordPool
  }

  if (passwordPool.length === 0){
  alert("You didn't pick any characters! Try Again")
  generatePassword();
  }
  else {
  }

  for (i=0; i<passwordLength; i++) {
    var randomChoice = passwordPool[Math.floor(Math.random()*passwordPool.length)]
    passwordArray.push(randomChoice); 
  };

  return (passwordArray.join(''));
  
}