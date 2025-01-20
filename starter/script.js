let playerHand = 0;
let computerHand = 0;
let hit = true;
// Deals the player a random number between 4 and 21 inclusive.
// Needs a Math.random that chooses a number between 4 and 21.
function startGame() {
  playerHand = Math.floor(Math.random() * 17) + 4;
  alert(`You dealt ${playerHand}`);
  // If the player has 21 they win!
  // Validate if player has 21.
  if (playerHand === 21) {
    alert("You won!");
  } else {
    computerHand = generateCard();
    alert(`Computer dealt ${computerHand}`);
  }
  confirmHit();
  compareHands();
  if (confirm("Do you want to play again?")) {
    startGame();
  }
}

// Deals a random number between 2 and 11 inclusive to the dealer.
// Needs a Math.random that generates a number betweeen 2 and 11.
function generateCard() {
  return Math.floor(Math.random() * 9) + 2;
}
// If the player hits, add a number between 2 and 11.
function confirmHit() {
  hit = confirm("Hit or stay? OK to Hit, Cancel to Stay");
  // If the player goes over 21 the lose.
  // If the player has 21, stay for them.
  if (hit) {
    playerHand += generateCard();
    if (playerHand === 21) {
      alert("You won!");
    } else {
      // Once player stays add a number between 2 and 11 to the dealer's hand.
      computerHand += generateCard();
      alert(`Dealer dealt ${computerHand}`);
    }
    if (computerHand < 17) {
      computerHand += generateCard();
    } else {
      compareHands();
    }
  }
}

function compareHands() {
  if (computerHand > 21) {
    alert(`Dealer busted with ${computerHand}. You win!`);
  } else if (playerHand === 21) {
    alert(`Blackjack! You win with ${playerHand}!`);
  } else if (computerHand === 21) {
    alert(`Dealer got Blackjack with ${computerHand}. Dealer wins!`);
  } else if (playerHand > computerHand && playerHand < 21) {
    alert(`You have ${playerHand}, dealer has ${computerHand}. You win!`);
  } else {
    alert(`You have ${playerHand}, dealer has ${computerHand}. Dealer wins!`);
  }
}
// Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!
startGame();
