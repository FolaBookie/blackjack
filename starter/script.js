let playerHand = 0;
let computerhand = 0;
let hit = true;
// Deals the player a random number between 4 and 21 inclusive.
// Needs a Maths.random that chooses a number between 4 and 21.
function startGame() {
    playerHand = Math.floor(Math.random() * 17) + 4;
    alert(`You dealt ${playerHand}`)
    // If the player has 21 they win!
    // Validate if player has 21.
    if (playerHand === 21) {
        alert("You won!")
    }
}

// Deals a random number between 2 and 11 inclusive to the dealer.

// If the player hits, add a number between 2 and 11.

// If the player goes over 21 the lose.

// If the player has 21, stay for them.

// Repeat until they choose to stay or they bust

// Once player stays add a number between 2 and 11 to the dealer's hand.

// If dealer number is less than 17 add another number

// Repeat until the number is over over 17 but less than 21, or if the dealer goes over 21

// If dealer goes over 21 they lose.

// Once dealer stops, and neither player bust, compare each number to 21. Whoever is closer wins!