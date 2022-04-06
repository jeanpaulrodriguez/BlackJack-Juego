let player = {
  name: "Janpi",
  chips: 145
}
let firstCard = getRandomCard()

let secondCard = getRandomCard()

let cards = [firstCard, secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false

let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard()
{
let randomNumber = Math.floor( Math.random()*13 ) + 1
if (randomNumber > 10)
{
return 10
}else if (randomNumber === 1)
{
return 11
}else
{
return randomNumber
}
}

function startGame()
{
    renderGame()
}


function renderGame(){

cardsEl.textContent = "Cartas: " 
for (let i = 0; i< cards.length; i++) {
  cardsEl.textContent += cards[i] + " ";
    }  
sumEl.textContent = "Suma: " + sum
if (sum <= 20)
{
message = "te falta mio"
}else if (sum === 21)
{
message = "bregate durisiimoo"
hasBlackJack = true    
}else
{
message = "mamaste feo"
isAlive = false
}
messageEl.textContent = message


}
function newCard()
{
if (isAlive === true && hasBlackJack === false){

 
let card = getRandomCard()

sum += card

cards.push(card)

renderGame()
}
}