// Reverse Universe Game Logic

// Game Variables
let playerScore = 0;
let gameIsActive = true;

// Function to start the game
function startGame() {
    playerScore = 0;
    gameIsActive = true;
    console.log("Game started! Score: " + playerScore);
    gameLoop();
}

// Game loop - handles game events
function gameLoop() {
    while (gameIsActive) {
        // Example game event: player makes a move
        let playerMove = getPlayerMove();
        processMove(playerMove);

        // Check for win/lose conditions
        if (checkWinCondition()) {
            console.log("You win! Final Score: " + playerScore);
            gameIsActive = false;
        } else if (checkLoseCondition()) {
            console.log("You lose! Final Score: " + playerScore);
            gameIsActive = false;
        }
    }
}

// Function to get player move (e.g., through user input)
function getPlayerMove() {
    // Placeholder for player input logic, return a random move for simplicity
    return Math.floor(Math.random() * 10); // Random move from 0-9
}

// Function to process player's move
function processMove(move) {
    // Add your game logic here
    console.log("Player moved: " + move);
    playerScore += move;
}

// Check win condition
function checkWinCondition() {
    return playerScore >= 50; // Example condition
}

// Check lose condition
function checkLoseCondition() {
    return playerScore < 0; // Example condition
}

// Function to restart the game
function resetGame() {
    console.log("Game has been reset.");
    startGame();
}

// Start the game when the script loads
startGame();
