//Variables
var alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialsOptions =["|","!","#","$","%","&","/","(",")","=","?","¡","¿"];
var numericOptions = [0,1,2,3,4,5,6,7,8,9];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(userInput) {
  // console.log(userInput + "e");
  var password = generatePassword(userInput);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Functions:
function generatePassword(userInput) {
  //Function variables
  var password = [];
  var charactersChosen=0;
  var charactersPerChoiseEl=0;

  // Ask for which choices will be used
  var LowerCase = window.confirm("Do you want Lowercase characters in your password?");
  if(LowerCase){
    charactersChosen++;
  }
  console.log("LowerCase: " + LowerCase);

  var UpperCase = window.confirm("Do you want UpperCase characters in your password?");
  if(UpperCase){
    charactersChosen++;
  }
  console.log("UpperCase: " + UpperCase);

  var numeric = window.confirm("Do you want numeric characters in your password??");
  if(numeric){
    charactersChosen++;
  }
  console.log("Numerics: " + numeric);
  
  var special = window.confirm("Do you want sopecial characters in your password??");
  if(special){
    charactersChosen++;
  }
  console.log("Specials: " + special);

  //Print number of coiches to use
  console.log("CharacterChosen: " + charactersChosen);
  
  //Generates random number of characters per choice
  var charactersPerChoise = [];

  //If the user choose more than 1 choice, then
  if(charactersChosen != 1){
    // Gives the first element of charactersPerChoise array a random value from userInput - charactersChosen + 1 
    charactersPerChoise[0] = Math.floor(Math.random() * (userInput - charactersChosen + 1)) + 1;
    // Fill the rest of charactersPerChoise array with random numbers considering how many options it has left
    for( var i = 1; i < charactersChosen; i++){
      charactersPerChoise[i] = (userInput - SumOfArrayElements(i) - (charactersChosen - (i+1))) ;
    }
    //Returns the sum of i elements inside charactersPerChoise Array
    function SumOfArrayElements(numberOfSumElements){
      console.log("numberOfSumElements: " + numberOfSumElements);
      var sumOfElements=0;
      for(var i = 0; i < numberOfSumElements; i++){
        sumOfElements += charactersPerChoise[i];
      }
      console.log("SumOfElements: " + sumOfElements);
      return sumOfElements;
    }
    
    console.log(charactersPerChoise);
  }else{
    //If the user choose 1 choice, then
    charactersPerChoise[0] = userInput;
  }

  // The charactersPerChoise array is ramdomly shuffle
  shuffle(charactersPerChoise);
  console.log(charactersPerChoise);

  // Push ramndom LowerCase characters to password array, the number of them depends on charactersPerChoise array
  if(LowerCase){
    for(var i=0; i < charactersPerChoise[charactersPerChoiseEl]; i++){
      password.push(alfabet[Math.floor(Math.random() * 26)]);
    }
    charactersPerChoiseEl++;
  }

  // Push ramndom UpperCase characters to password array, the number of them depends on charactersPerChoise array
  if(UpperCase){
    for(var i=0; i < charactersPerChoise[charactersPerChoiseEl]; i++){
      password.push(alfabet[Math.floor(Math.random() * 26)].toUpperCase());
    }
    charactersPerChoiseEl++;
  }

  // Push ramndom numeric characters to password array, the number of them depends on charactersPerChoise array
  if(numeric){
    for(var i=0; i < charactersPerChoise[charactersPerChoiseEl]; i++){
      password.push(numericOptions[Math.floor(Math.random() * 10)]);
    }
    charactersPerChoiseEl++;
  }

  // Push ramndom special characters to password array, the number of them depends on charactersPerChoise array
  if(special){
    for(var i=0; i < charactersPerChoise[charactersPerChoiseEl]; i++){
      password.push(specialsOptions[Math.floor(Math.random() * 10)]);
    }
    charactersPerChoiseEl++;
  }
   
  // Shuffle final password array
  console.log(password);
  shuffle(password);
  
  
  //Return password to print it
  console.log(password.join(''));
  return password.join('');
}


function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  var userInput = window.prompt("Enter the length of your password (min 8 characters, max 128 characters):");
  var checkUserInputNumber = userInput * 0;

  // If users input is not a number between 8 and 128, then
  if (isNaN(checkUserInputNumber) || userInput < 8 || userInput > 128) {
    while (isNaN(checkUserInputNumber) || userInput < 8 || userInput > 128) {
      userInput = window.prompt("Try again. \nEnter the length of your password (min 8 characters, max 128 characters):");
      checkUserInputNumber = userInput * 0;
      // console.log("ffff"+!Number.isInteger(userInput));
    }
    writePassword(userInput);
  // If users input is a number between 8 and 128, then
  } else {
    console.log("UserInput = " + userInput);
    writePassword(userInput);
  }
});
