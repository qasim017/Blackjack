// let age = 21
// if (age < 22){
//     console.log("you can not enter in the club !")
// }else {
//     console.log("Welcome")
// }
// let age = 108

// if (age < 100){
//     console.log("Not elegible")
// }else if (age === 100){
//     console.log("Here is your birthday card from king")

// }else { 
//    console.log ("Not elegible, you already get one")

// // } 
// let messages = [
//     "qasim",
//     "abdullah",
//     "maryam",
//     "amnah"
// ]
// for (let i = 0; i < messages.length ;i += 1){
//     console.log(messages[i])
// }
// let cerds = [7, 3, 9]

// for (let i = 0; i<cerds.length; i++){
//     console.log(cerds[i])
// }
// let player1Time = 102
// let player2Time = 107
// function gettotalRaceTime (){
//     return player1Time + player2Time
// }
// let totalRaceTime = gettotalRaceTime()
// console.log(totalRaceTime)
// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// console.log( rollDice() )
// let likeDocumentary = true
// let likesStartups = false
// if(likeDocumentary===true || likesStartups === true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("hey,chekout this flim")
// }
// let hasSolvedChallenge = false
// let hasHintLeft = false
// if(hasSolvedChallenge === false && hasHintLeft === false){
//  showSolution()
// }
// function showSolution(){
//     console.log("Showing the solution...")
// }
// let airbus = {
//   avalible:true,
//   price:190,
//   image:["image1","image2"]

// }
// console.log(airbus.price)
// console.log(airbus.avalible)
let player = {
    name: "Per",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let newcardEl = document.getElementById("newcard-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
console.log(cards)
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw new card?"
    } else if (sum === 21) {
        message = " you've got blackjack!"
        hasBlackJack = true
    } else {
        message = "you're out of game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}


