const options = document.querySelectorAll(".options");
const resultContainer = document.querySelector(".result");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

const outcomes = {
    Rock: { beats: "Scissors", message: "Rock crushes Scissors!" },
    Paper: { beats: "Rock", message: "Paper covers Rock!" },
    Scissors: { beats: "Paper", message: "Scissors cut Paper!" },
};

let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const playerChoice = this.dataset.choice;
        const computerChoices = Object.keys(outcomes);
        const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        const outcome = compareChoices(playerChoice, computerChoice);
        updateScore(outcome);
        displayResult(outcome, playerChoice, computerChoice);
    });
});

function compareChoices(player, computer) {
    if (player === computer) return "tie";
    if (outcomes[player].beats === computer) return "player";
    return "computer";
}

function updateScore(outcome) {
    if (outcome === "player") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (outcome === "computer") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayResult(outcome, playerChoice, computerChoice) {
    let message;
    if (outcome === "tie") {
        message = "It's a tie!";
    } else if (outcome === "player") {
        message = `You win! ${outcomes[playerChoice].message}`;
    } else {
        message = `Computer wins! ${outcomes[computerChoice].message}`;
    }

    resultContainer.innerHTML = `
        <p>${message}</p>
        <div class="choices-display">
            <div class="player-choice">
                <i class="fas fa-user icon"></i>
                ${getEmoji(playerChoice)}
            </div>
            <div class="computer-choice">
                <i class="fas fa-robot icon"></i>
                ${getEmoji(computerChoice)}
            </div>
        </div>
    `;
}

function getEmoji(choice) {
    const emojis = { Rock: "✊", Paper: "✋", Scissors: "✌️" };
    return emojis[choice];
}