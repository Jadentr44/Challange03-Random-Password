let orderedChar =[]
let upperAmount = 5;
let lowerAmount = 3;
let Password
const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]

pickRandom(upperChar, upperAmount);
pickRandom(lowerChar, lowerAmount);
function pickRandom(arr , length){
  for(let i = 0; i < length;i++){
    let Random = Math.floor(Math.random()*arr.length)
    orderedChar.push(arr[Random])
  }
}


console.log(orderedChar)