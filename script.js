let orderedChar =[];

let upperAmount = 4;
let lowerAmount = 4;
let passwordArr = [];

const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function pickRandom(arr , length){
  for(let i = 0; i < length;i++){
    let randomChar =arr[Math.floor(Math.random()*arr.length)]
    console.log(randomChar)
    // finding where it wants to put it
      let randomIndex = Math.floor(Math.random()*passwordArr.length)// gets a random index from passwordArr
    console.log(randomIndex)
      if(passwordArr.length === 0 ||randomIndex == 0){
        passwordArr.unshift(randomChar)
      }else if(passwordArr.length-1 === randomIndex){
        passwordArr.push(randomChar)
        console.log("the index was at the end of the array")
      }
      else{
        passwordArr.splice(randomIndex,randomIndex,randomChar)
      }
  }
}

pickRandom(upperChar, upperAmount);
pickRandom(lowerChar, lowerAmount);

console.log(passwordArr)
// let arr = ["1","2","3"]
// arr.splice(2,1,"idk")
// console.log(arr)