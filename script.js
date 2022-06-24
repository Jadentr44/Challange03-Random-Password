let passwordArr = [];

let upperAmount = 3;
let lowerAmount = 2;
let numberAmount = 2;
let specialAmount = 2;

const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["1","2","3","4","5","6","7","8","9"]
const specialChar =["!","@","#","$","%","^","&","*"]

function generateRandom(){
function pickRandom(arr , length){
  for(let i = 0; i < length;i++){
    // gets a random character from the current array
    let randomChar =arr[Math.floor(Math.random()*arr.length)]
    // finding where it wants to put it
    let randomIndex = Math.floor(Math.random()*passwordArr.length)

      if(passwordArr.length === 0){//if the password array is empty
        passwordArr.unshift(randomChar)
      }else if(passwordArr.length-1 === randomIndex){//if its trying to add it to the end
        passwordArr.push(randomChar)
      }
      else{//putting the random character in the random index
        passwordArr.splice(randomIndex,0,randomChar)
      }
  }}
pickRandom(upperChar, upperAmount);
pickRandom(lowerChar, lowerAmount);
pickRandom(numbers, numberAmount);
pickRandom(specialChar, specialAmount);
console.log(passwordArr)
passwordArr = []
}


generateRandom()
generateRandom()
generateRandom()
generateRandom()