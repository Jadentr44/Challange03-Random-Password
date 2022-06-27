let passwordArr = []

let length;

const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["1","2","3","4","5","6","7","8","9"]
const specialChar =["!","@","#","$","%","^","&","*"]

const usableChar = []

let useUpper = askDetails("Upper Case Characters")

function askDetails(e){
    let answer;
    console.log("here")
  promptYN()
  if(answer === "Y"){return true}
  else{return false}
  function promptYN(){
    console.log("here too")
     answer = prompt(`Would you like ${e} in your password?'Y' for yes or 'N' for no`);
     answer = answer.toUpperCase()
    if(answer !=="Y" && answer !== "N"){ promptYN()}
  }
}
