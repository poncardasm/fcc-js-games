const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

let possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
	userChoice = e.target.id;
	userChoiceDisplay.innerText = userChoice
}))

