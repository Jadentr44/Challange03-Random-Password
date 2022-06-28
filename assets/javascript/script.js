var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);
var passwordText = document.querySelector("#password");

//characters that can be used
const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["1","2","3","4","5","6","7","8","9"]
const specialChar =["!","@","#","$","%","^","&","*"]


function generatePassword(){
  let password= "";
  let usableChar = []// will hold all the kinds of characters the user wants

  let length; // length of password

  //asking the user what characters to use and getting true of false
  let useUpper = promptChoices("Uppercase characters")
  let useLower = promptChoices("lowercase characters")
  let useNumber = promptChoices("numbers")
  let useSpecial = promptChoices("special characters")
  
  // making sure at leaast 1 was chosen
  if(!useUpper && !useLower && !useNumber && !useSpecial){
    alert("you must select 1")
    askQuestions()//resarting if none were chosen
  }

  //asking length of password
  let passwordLength = askLength()

  //adding characters if user wanted them
  if(useUpper){usableChar = usableChar.concat(upperChar)}
  if(useLower){usableChar = usableChar.concat(lowerChar)}
  if(useNumber){usableChar = usableChar.concat(numbers)}
  if(useSpecial){usableChar = usableChar.concat(specialChar)}

  // 
  for(let i =0; i < passwordLength;i++){
    let randomIndex =  Math.floor(Math.random() * usableChar.length)
    let randomChar = usableChar[randomIndex]
    password += randomChar;
  }
  passwordText.value = password
//functions used
  function promptChoices(e){
    let answer;
    askAndCheck()
  if(answer === "Y"){return true}
  else{return false}
  function askAndCheck(){
     answer = prompt(`Would you like ${e} in your password?\n'Y' for yes\n'N' for no`);
     answer = answer.toUpperCase()
    if(answer !=="Y" && answer !== "N"){ askAndCheck()}
  }
  }
  }

  function askLength(){
  let answerLength = prompt("enter a password length between 8-128")
  if(answerLength >= 8 && answerLength<= 128){
    return answerLength
  }else{askLength()}
  }

