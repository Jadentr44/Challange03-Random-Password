const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["1","2","3","4","5","6","7","8","9"]
const specialChar =["!","@","#","$","%","^","&","*"]


function askQuestions(){
  let passwordArr = []
  let usableChar = []

  let length;

let useUpper = promptChoices("Uppercase characters")
let useLower = promptChoices("lowercase characters")
let useNumber = promptChoices("numbers")
let useSpecial = promptChoices("special characters")
if(!useUpper && !useLower && !useNumber && !useSpecial){
  alert("you must select 1")
  askQuestions()
}
let passwordLength = askLength()

if(useUpper){usableChar = usableChar.concat(upperChar)}
if(useLower){usableChar = usableChar.concat(lowerChar)}
if(useNumber){usableChar = usableChar.concat(numbers)}
if(useSpecial){usableChar = usableChar.concat(specialChar)}
console.log(usableChar)
//functions used
function promptChoices(e){
    let answer;
    askAndCheck()
  if(answer === "Y"){return true}
  else{return false}
  function askAndCheck(){
    console.log("here too")
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


askQuestions()