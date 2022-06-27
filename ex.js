const upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerChar = ["b","b","d","d","e","f","g","h","i","j","k","l","l","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["1","2","3","4","5","6","7","8","9"]
const specialChar =["!","@","#","$","%","^","&","*"]

function generatePassword(){
  let passwordArr = [];
  
  let useUpper =  checkAnswer(prompt("would you like Upper case characters in your password?('y' for yes 'n' for no"));
  let useLower = prompt("would you like lower case characters in your password?('y' for yes 'n' for no");
  let useNumber= prompt("would you like number in your password?('y' for yes 'n' for no");
  let useSpecial = prompt("would you like special characters in your password?('y' for yes 'n' for no");

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
}
function askContent(e){
  let answer = prompt(`would you like ${e} in your password?('y' for yes 'n' for no`)
  let response = function(){
    
  }
}
function checkAnswer(e){
  if(e === "y"){
    return true
  }else if(e === "n"){
    return false
  }
  else{
   let answer = prompt("invalid response,'y' for yes 'n' for no")
   
  }
}


// let arr1 = [1,2,3]
// let arr2 = []
// arr2.push(...arr1)
// console.log(arr2)