// script.js
const options = document.querySelectorAll(".options");
const resultContainer = document.querySelector(".result");

const outcomes = {
    Rock: { beats: "Scissors", message: "Rock crushes Scissors!" },
    Paper: { beats: "Rock", message: "Paper covers Rock!" },
    Scissors: { beats: "Paper", message: "Scissors cut Paper!" },
};

options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerChoice = this.dataset.choice;
        const computerChoices = Object.keys(outcomes);
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        const outcome = compareChoices(playerChoice, computerChoice);
        displayResult(outcome);
    });
});

function compareChoices(player, computer) {
    if (player === computer) return "It's a tie!";
    if (outcomes[player].beats === computer) return `You win! ${outcomes[player].message}`;
    return `Computer wins! ${outcomes[computer].message}`;
}

function displayResult(message) {
    resultContainer.textContent = message;
}
