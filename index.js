// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let isAlive=true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const scoreboard= document.getElementById("scoreboard")


  
      
 rollBtn.addEventListener("click", rollingTheDice)
  resetBtn.addEventListener("click",resetGame) 
  
 function displayReset(){
       if(isAlive===false){
       resetBtn.style.display="block"
    }
     }
   function rollingTheDice(){
     const randomNumber = Math.floor(Math.random() * 6) + 1
     if (player1Turn===true && isAlive ===true ) {
         removingshadow()
         player1Dice.classList.add("active")
         player1Dice.textContent=`${randomNumber}`
         player1Score+=randomNumber
         message.textContent=`Player 1 Turn`
         player1Scoreboard.textContent=player1Score
         player1Turn=false
         scoreboard.textContent=`You have rolled ${randomNumber}`
         
     }else if(isAlive===true){
         removingshadow()
         player2Dice.classList.add("active")
          player2Dice.textContent=`${randomNumber}`
          player2Score+=randomNumber 
          message.textContent=`Player 2 Turn`
          player2Scoreboard.textContent=player2Score
          player1Turn=true
          scoreboard.textContent=`You have rolled ${randomNumber}`
     }
     
     finishingGame()
     displayReset()
    
 }
      function removingshadow(){
      player1Dice.classList.remove("active")
      player2Dice.classList.remove("active")
 }
  
 
     function finishingGame(){
        if (player1Score >= 20){
      player1Score = 0
     
     isAlive=false
     scoreboard.textContent=`Player 1 has won`
     }
     else if(player2Score >= 20){
         player2Score =0
         
         isAlive= false
         scoreboard.textContent=`Player 2 has won`
     }
     }
     
    
    
      function resetGame(){
 isAlive=true
 player1Score=0
 player2Score=0
  player1Scoreboard.textContent=player1Score
  player2Scoreboard.textContent=player2Score
  player1Dice.textContent="0"
  player2Dice.textContent="0"
  
  }