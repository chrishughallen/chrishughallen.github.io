const cards = [
  {
      "img": "../assets/images/cards/ace_of_spades.png",
      "value": "a"
  },
  {
      "img": "../assets/images/cards/2_of_spades.png",
      "value": 2
  },
  {
      "img": "../assets/images/cards/3_of_spades.png",
      "value": 3
  },
  {
      "img": "../assets/images/cards/4_of_spades.png",
      "value": 4
  },
  {
      "img": "../assets/images/cards/5_of_spades.png",
      "value": 5
  },
  {
      "img": "../assets/images/cards/6_of_spades.png",
      "value": 6
  },
  {
      "img": "../assets/images/cards/7_of_spades.png",
      "value": 7
  },
  {
      "img": "../assets/images/cards/8_of_spades.png",
      "value": 8
  },
  {
      "img": "../assets/images/cards/9_of_spades.png",
      "value": 9
  },
  {
      "img": "../assets/images/cards/10_of_spades.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/jack_of_spades2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/queen_of_spades2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/king_of_spades2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/ace_of_clubs.png",
      "value": "a"
  },
  {
      "img": "../assets/images/cards/2_of_clubs.png",
      "value": 2
  },
  {
      "img": "../assets/images/cards/3_of_clubs.png",
      "value": 3
  },
  {
      "img": "../assets/images/cards/4_of_clubs.png",
      "value": 4
  },
  {
      "img": "../assets/images/cards/5_of_clubs.png",
      "value": 5
  },
  {
      "img": "../assets/images/cards/6_of_clubs.png",
      "value": 6
  },
  {
      "img": "../assets/images/cards/7_of_clubs.png",
      "value": 7
  },
  {
      "img": "../assets/images/cards/8_of_clubs.png",
      "value": 8
  },
  {
      "img": "../assets/images/cards/9_of_clubs.png",
      "value": 9
  },
  {
      "img": "../assets/images/cards/10_of_clubs.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/jack_of_clubs2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/queen_of_clubs2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/king_of_clubs2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/ace_of_hearts.png",
      "value": "a"
  },
  {
      "img": "../assets/images/cards/2_of_hearts.png",
      "value": 2
  },
  {
      "img": "../assets/images/cards/3_of_hearts.png",
      "value": 3
  },
  {
      "img": "../assets/images/cards/4_of_hearts.png",
      "value": 4
  },
  {
      "img": "../assets/images/cards/5_of_hearts.png",
      "value": 5
  },
  {
      "img": "../assets/images/cards/6_of_hearts.png",
      "value": 6
  },
  {
      "img": "../assets/images/cards/7_of_hearts.png",
      "value": 7
  },
  {
      "img": "../assets/images/cards/8_of_hearts.png",
      "value": 8
  },
  {
      "img": "../assets/images/cards/9_of_hearts.png",
      "value": 9
  },
  {
      "img": "../assets/images/cards/10_of_hearts.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/jack_of_hearts2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/queen_of_hearts2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/king_of_hearts2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/ace_of_diamonds.png",
      "value": "a"
  },
  {
      "img": "../assets/images/cards/2_of_diamonds.png",
      "value": 2
  },
  {
      "img": "../assets/images/cards/3_of_diamonds.png",
      "value": 3
  },
  {
      "img": "../assets/images/cards/4_of_diamonds.png",
      "value": 4
  },
  {
      "img": "../assets/images/cards/5_of_diamonds.png",
      "value": 5
  },
  {
      "img": "../assets/images/cards/6_of_diamonds.png",
      "value": 6
  },
  {
      "img": "../assets/images/cards/7_of_diamonds.png",
      "value": 7
  },
  {
      "img": "../assets/images/cards/8_of_diamonds.png",
      "value": 8
  },
  {
      "img": "../assets/images/cards/9_of_diamonds.png",
      "value": 9
  },
  {
      "img": "../assets/images/cards/10_of_diamonds.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/jack_of_diamonds2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/queen_of_diamonds2.png",
      "value": 10
  },
  {
      "img": "../assets/images/cards/king_of_diamonds2.png",
      "value": 10
  }
]
const cardBack = "../assets/images/cards/card_back.png"
const playerHandDisplay = document.getElementById("player-hand-display")
const playerOutcome = document.getElementById("player-outcome")
const dealerHandDisplay = document.getElementById("dealer-hand-display")
const playerTotalDisplay = document.getElementById("player-total-display")
const dealerTotalDisplay = document.getElementById("dealer-total-display")
const dealerOutcome = document.getElementById("dealer-outcome")
const dealBtn = document.getElementById("deal")
const hitBtn = document.getElementById('hit')
const stayBtn = document.getElementById('stay')

dealBtn.addEventListener("click", deal)
hitBtn.addEventListener("click", hit)
stayBtn.addEventListener("click", stay)

let dealerHand
let playerHand

// Hand object has an array of cards, and a getTotal method
class Hand {
  constructor(cards) {
    this.cards = cards;
  }

  getTotal() {
    let total = 0
    let aces = []
    this.cards.forEach((card) => {
      if(card.value == 'a') {
        aces.push('a')
      } else {
        total += card.value
      }
    })

    aces.forEach((ace) => {
      if(total + 11 > 21) {
        total += 1
      } else {
        total += 11
      }
    })

    return total
  }
}

document.addEventListener('DOMContentLoaded', function() {
  deal()
}, false);

// return random card
// TODO: when a card is returned, remove it from the array
function getCard() {
  return cards[Math.floor(Math.random() * 51)]
}

// assign new Hand object to player and dealer
function deal() {
  resetDisplay()
  dealerHand = new Hand([getCard(), getCard()])
  playerHand = new Hand([getCard(), getCard()])
  updatePlayerDisplay(playerHand)
  updateDealerDisplay(true, dealerHand)
}

// clears display of outcomes
function resetDisplay() {
  updateOptions()
  playerHandDisplay.innerHTML = ''
  dealerOutcome.innerHTML = ''
  playerOutcome.innerHTML = ''
  dealerTotalDisplay.innerHTML = ""
  playerTotalDisplay.innerHTML = ""
}

// toggle display of deal/hit/stay buttons
function updateOptions() {
  hitBtn.classList.toggle('hidden')
  stayBtn.classList.toggle('hidden')
  dealBtn.classList.toggle('hidden')
}

// add card to players hand and play
function hit() {
  let newCard = getCard()
  playerHand.cards.push(newCard)
  playerPlay(playerHand)
}

// turns play to dealer
function stay() {
  updateDealerDisplay(false, dealerHand)
}

// handle players play after hit or stay btn is clicked
function playerPlay(playerHand) {
  updatePlayerDisplay(playerHand)
  let total = playerHand.getTotal()
  if(total > 21) {
    showDealerCards(dealerHand)
    determineWinner(dealerHand, playerHand)
  } else if(total == 21) {
    stay()
  }
}

// update players displayed cards
function updatePlayerDisplay(playerHand) {
  playerHandDisplay.innerHTML = ""
  playerHand.cards.forEach(card => {
    playerHandDisplay.appendChild(getCardImg(card.img))
  })
  playerTotalDisplay.innerHTML = playerHand.getTotal()
}

function showDealerCards(dealerHand) {
  dealerTotalDisplay.innerHTML = dealerHand.getTotal()
  dealerHandDisplay.innerHTML = ""
  dealerHand.cards.forEach(card => {
    dealerHandDisplay.appendChild(getCardImg(card.img))
  })
}

// handle dealer play
function dealerPlay(dealerHand) {
  if(dealerHand.getTotal() <= 16) {
    dealerHand.cards.push(getCard())
    updateDealerDisplay(false, dealerHand)
  } else {
    determineWinner(dealerHand, playerHand)
  }
}

// update dealers displayed cards
function updateDealerDisplay(initial, dealerHand) {
  dealerHandDisplay.innerHTML = ""
  // ensures the 2nd card is dealt face down on initial deal
  if (initial) {
    dealerTotalDisplay.innerHTML = dealerHand.cards[0].value
    if(dealerHand.cards[0].value == "a") {
      dealerTotalDisplay.innerHTML = "1/11"
    } else {
      dealerTotalDisplay.innerHTML = dealerHand.cards[0].value
    }
    dealerHandDisplay.appendChild(getCardImg(dealerHand.cards[0].img))
    dealerHandDisplay.appendChild(getCardImg(cardBack))
  } else {
    showDealerCards(dealerHand)
    dealerPlay(dealerHand)
  }
}

// Determine who won / busted
function determineWinner(dealerHand, playerHand) {
  if(playerHand.getTotal() > 21) {
    playerOutcome.innerHTML = "bust"
    dealerOutcome.innerHTML = "win!"
  } else if(dealerHand.getTotal() > 21) {
    dealerOutcome.innerHTML = "bust!"
    playerOutcome.innerHTML = "win!"
  } else if(playerHand.getTotal() == dealerHand.getTotal()) {
    dealerOutcome.innerHTML = "push!"
    playerOutcome.innerHTML = "push!"
  } else if(playerHand.getTotal() > dealerHand.getTotal()) {
    dealerOutcome.innerHTML = "lose!"
    playerOutcome.innerHTML = "win!"
  } else {
    dealerOutcome.innerHTML = "win!"
    playerOutcome.innerHTML = "lose!"
  }
  updateOptions()
}

// Returns new img element from card object.img
function getCardImg(image) {
  let img = document.createElement('img')
  img.src = image
  return img
}