// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var passwordGenerator = prompt('choose a length of at least 8 characters and no more than 128 characters');
  var passwordLowercase = confirm('Would you like to include a lowercase characters.')
  var passwordUppercase = confirm('Would you like to include a uppercase characters.')
  var passworNumerical = confirm('Would you like to include a numerical characters.')
  var passwordSpecial = confirm('Would you like to include a special characters.')
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "1234567890"
  var special = "!@#$%^&*()_+|}{]["
  var allCharacters = ""
  passwordGenerator = parseInt(passwordGenerator)
  if (passwordGenerator < 8){
    alert("You need more than 8 characters.");
    return;
  }
  if (passwordGenerator > 128){
    alert("You have way too much characters, try a password with less than 128 characters.");
    return;
  }
  if (typeof value === "number" && Number.isInteger(1,2,3,4,5,6,7,8,9,0)){
  }
  if (passwordLowercase == true){
    //include a lowercase letter
    allCharacters+=lower;
  }
  if (passwordUppercase == true){
    //include a uppercase letter
    allCharacters+=upper;
  }
  if (passworNumerical == true){
    //include a numerical value
    allCharacters+=numbers;
  }
  if (passwordSpecial == true){
    //include a special character
    allCharacters+=special;
  }
  console.log(allCharacters)
  var finalPassword = ""
  for (let i = 0; i < passwordGenerator; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    console.log(randomIndex);
    var letter = allCharacters[randomIndex];
    console.log(letter);
    finalPassword+=letter;
  }
  console.log(finalPassword)
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);