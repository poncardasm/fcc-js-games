const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Choices
const choices = ['🪨 Rock', '📃 Paper', '✂️ Scissors'];

// Get computer choice
function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

// Determine the result
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "🤝 It's a tie!";
  }
  if (
    (playerChoice === '🪨 Rock' && computerChoice === '✂️ Scissors') ||
    (playerChoice === '📃 Paper' && computerChoice === '🪨 Rock') ||
    (playerChoice === '✂️ Scissors' && computerChoice === '📃 Paper')
  ) {
    return '🤩 You win!';
  }
  return '😭 You lose!';
}

// Button events
rockBtn.addEventListener('click', () => {
  const playerChoice = '🪨 Rock';
  const computerChoice = getComputerChoice();
  playerChoiceDisplay.textContent = playerChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = getResult(playerChoice, computerChoice);
});

paperBtn.addEventListener('click', () => {
  const playerChoice = '📃 Paper';
  const computerChoice = getComputerChoice();
  playerChoiceDisplay.textContent = playerChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = getResult(playerChoice, computerChoice);
});
