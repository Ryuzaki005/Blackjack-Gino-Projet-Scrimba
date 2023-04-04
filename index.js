let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")

let cards = []
let player = {
    name: "Gineston",
    chips: 0
}

messageEl.textContent = "Want to play a round?"
playerEl.textContent = player.name + ": $" + player.chips

function rendergame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0 ; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"        
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
        player.chips += 100
        playerEl.textContent = player.name + ": $" + player.chips                        
    } else {
        messageEl.textContent = "You're out of the game!"
    }

}



function startgame() {
    let card0 = Math.floor( Math.random()*11 ) + 1
    let card1 = Math.floor( Math.random()*11 ) + 1

    cards = [card0, card1]
    sum = card0 + card1
    rendergame()

}

function newgame() {
    
    if (sum < 21) {
        let cardN= Math.floor( Math.random()*11 ) + 1
        cards.push(cardN)
        cardsEl.textContent += " " + cardN + " "
        sum += cardN
        rendergame()    
    }
    
    
}