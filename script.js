const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const roundCounter = document.querySelector("#round");
const pScore = document.querySelector("#playerscore");
const cScore = document.querySelector("#computerscore");
const result = document.querySelector("#result");
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

btnRock.addEventListener("click", () => {
    game(btnRock.value);
    winLosechecker();
})

btnPaper.addEventListener("click", () => {
    game(btnPaper.value);
})

btnScissors.addEventListener("click", () => {
    game(btnScissors.value);
})

function game(playerSelection) {
    const computerSelection = choices[(Math.floor(Math.random() * choices.length))];
    
    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"
    ) {
        round ++;
        playerScore++;
        roundCounter.textContent = `Round: ${round}`;
        pScore.textContent = `Player Score: ${playerScore}`;
        result.innerHTML = `Player choose: "${playerSelection}"
                            <br>Computer choose: "${computerSelection}"
                            <br>
                            <br>"${playerSelection}" beat "${computerSelection}" (Player wins)`;
    } else if (playerSelection === computerSelection) {
        round++;
        roundCounter.textContent = `Round: ${round}`; 
        result.innerHTML = `Player choose: "${playerSelection}"
                            <br>Computer choose: "${computerSelection}"
                            <br>
                            <br>Its tie!`;
    } else {
        round++;
        computerScore++;
        roundCounter.textContent = `Round: ${round}`;
        cScore.textContent = `Computer Score: ${computerScore}`;
        result.innerHTML = `Player choose: "${playerSelection}"
                            <br>Computer choose: "${computerSelection}"
                            <br>
                            <br>"${computerSelection}" beat "${playerSelection}" (Computer wins)`;

    }

    console.log(playerSelection);
    console.log(computerSelection);
}

function winLosechecker() {
    if (round === 5 && playerScore > computerScore) {
        clearReset();
    } else if (round === 5 && playerScore < computerScore) {
        clearReset();
    } else if (round === 5 && playerScore === computerScore) {
        clearReset();
    } else if (round < 5 && playerScore === 3) {
        clearReset();
    } else if (round < 5 && computerScore === 3) {
        clearReset();   
    }
}

function clearReset() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "final-container");
    document.body.appendChild(newDiv);

    let newH1 = document.createElement("h1");
    newH1.setAttribute("id", "final-result");
    document.getElementById("final-container").appendChild(newH1);
    
}