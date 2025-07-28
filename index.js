// Get the element that will display the game result message (e.g., "Player 1 Wins")
const winnerState = document.getElementById('feedback_message');

// Get the button element that starts the game when clicked
const gameStart = document.getElementById('start_button');

// Get the image elements for player 1 and player 2 dice images
const img1 = document.querySelector('#image_player1');
const img2 = document.querySelector('#image_player2');

/**
 * Updates the image source of a given image element to show the correct dice face.
 * @param {HTMLElement} imgElement - The image element to update.
 * @param {number} number - The dice number (1 to 6).
 */
function displayImg(imgElement, number) {
  // Use template literals to dynamically set the image source based on dice number
  imgElement.src = `Images/dice${number}.png`;
}

/**
 * Generates two random dice rolls (numbers between 1 and 6).
 * @returns {number[]} An array containing two random numbers.
 */
function generateNumbers() {
  // Math.random() generates a float between 0 (inclusive) and 1 (exclusive)
  // Multiply by 6 and add 1 to get a number between 1 and 6
  // Math.floor() rounds down to nearest whole number
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

/**
 * Updates the winnerState element text content based on dice roll results.
 * @param {[number, number]} results - Array containing two dice numbers.
 */
function resultDisplay([a, b]) {
  if (a > b) {
    winnerState.textContent = 'PLAYER 1 WINS 😁';  // Player 1 wins if their dice is higher
  } else if (a < b) {
    winnerState.textContent = 'PLAYER 2 WINS 😆';  // Player 2 wins if their dice is higher
  } else {
    winnerState.textContent = 'IT IS A PERFECT DRAW 🤝';  // Both dice equal = draw
  }
}

// Set up a click event listener on the start button to play the game
gameStart.addEventListener('click', function(event) {
  event.preventDefault();  // Prevents default behavior, like form submission if button is inside a form
  
  // Generate random dice rolls for both players
  const [num1, num2] = generateNumbers();
  
  // Update dice images for player 1 and player 2 with the generated numbers
  displayImg(img1, num1);
  displayImg(img2, num2);
  
  // Display the game result message based on dice rolls
  resultDisplay([num1, num2]);
});
