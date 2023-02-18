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

const chips = [
  {
    img: "chip_img.png",
    count: 5,
    value: 1,
    color: "blue"
  },
  {
    img: "chip_img.png",
    count: 5,
    value: 5,
    color: "red"
  },
  {
    img: "chip_img.png",
    count: 5,
    value: 10,
    color: "green"
  },
  {
    img: "chip_img.png",
    count: 5,
    value: 25,
    color: "orange"
  }
]



const playerHandDisplay = document.getElementById("player-hand-display")
const dealerHandDisplay = document.getElementById("dealer-hand-display")
const playerTotalDisplay = document.getElementById("player-total-display")
const dealerTotalDisplay = document.getElementById("dealer-total-display")

const dealBtn = document.getElementById("deal")
const hitBtn = document.getElementById('hit')
const stayBtn = document.getElementById('stay')

const playerChipsArea = document.getElementById("player-chips")
const playerChipsTotal = document.getElementById("player-chips-total")
const betDisplay = document.getElementById("current-bet")

dealBtn.addEventListener("click", deal)
hitBtn.addEventListener("click", hit)
stayBtn.addEventListener("click", stay)

let currentBet = parseInt(betDisplay.innerHTML)
let dealerHand
let playerHand
let playerChips = chips

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
function deal(e) {
  renderPlayerChips(playerChips)
  if(currentBet == 0) {
    return
  }
  resetDisplay()
  dealerHand = new Hand([getCard(), getCard()])
  playerHand = new Hand([getCard(), getCard()])
  updatePlayerDisplay(playerHand)
  updateDealerDisplay(true, dealerHand)
}

// clears display of outcome
function resetDisplay() {
  updateOptions()
  playerHandDisplay.innerHTML = ''
  dealerTotalDisplay.innerHTML = ""
  playerTotalDisplay.innerHTML = ""
}

// toggle display of deal/hit/stay buttons
function updateOptions() {
  hitBtn.classList.toggle('disabled')
  stayBtn.classList.toggle('disabled')
  dealBtn.classList.toggle('disabled')
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
    playerTotalDisplay.innerHTML = "bust"
    payHouse(currentBet)
  } else if(dealerHand.getTotal() > 21) {
    payOutPlayer(currentBet)
    playerTotalDisplay.innerHTML = "win!"
  } else if(playerHand.getTotal() == dealerHand.getTotal()) {
    playerTotalDisplay.innerHTML = "push!"
  } else if(playerHand.getTotal() > dealerHand.getTotal()) {
    playerTotalDisplay.innerHTML = "win!"
    payOutPlayer(currentBet)
  } else {
    playerTotalDisplay.innerHTML = "lose!"
    payHouse(currentBet)
  }
  updateOptions()
}

// Returns new img element from card object.img
function getCardImg(image) {
  let img = document.createElement('img')
  img.src = image
  return img
}

// BETTING CODE

function renderPlayerChips(playerChips) {
  playerChipsArea.innerHTML = ""
  updateDisplayedBet(0)
  playerChips.forEach((chip) => {
    let chipEl = document.createElement('button')
    chipEl.innerHTML = chip.value
    chipEl.style.backgroundColor = chip.color
    chipEl.addEventListener("click", bet)
    playerChipsArea.appendChild(chipEl)
  })
  playerChipsTotal.innerHTML = `$${getPlayerChipsTotal(playerChips)}`
  updateDisplayedBet(currentBet)
}

function updateDisplayedBet(bet) {
  betDisplay.innerHTML = bet
}

function getPlayerChipsTotal(playerChips) {
  let total = 0
  playerChips.forEach((chip) => total += chip.value * chip.count)
  return total
}

function bet(e) {
  let clickedChipValue = e.currentTarget.innerHTML
  currentBet += parseInt(clickedChipValue)
  updateDisplayedBet(currentBet)

  playerChips.forEach((chip) => {
    if(chip.value == clickedChipValue) {
      chip.count -= 1
    }
  })
  renderPlayerChips(playerChips)
} 

function payOutPlayer(bet) {
  while (bet > 0) {
    if(bet >= 25) {
      bet -= 25
      playerChips[3].count += 2
    }
    else if(bet >= 10) {
      bet -= 10
      playerChips[2].count += 2
    }
    else if(bet >= 5) {
      bet -= 5
      playerChips[1].count += 2
    } else {
      bet -= 1
      playerChips[0].count += 2
    }
  }
  currentBet = 0
  renderPlayerChips(playerChips)
}

function payHouse(bet) {
  while (bet > 0) {
    if(bet >= 25) {
      bet -= 25
      playerChips[3].count -= 1
    }
    else if(bet >= 10) {
      bet -= 10
      playerChips[2].count -= 1
    }
    else if(bet >= 5) {
      bet -= 5
      playerChips[1].count -= 1
    } else {
      bet -= 1
      playerChips[0].count -= 1
    }
  }
  currentBet = 0
  renderPlayerChips(playerChips)
}