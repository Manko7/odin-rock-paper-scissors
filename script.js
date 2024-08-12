let choice = 0

/*  Rock = 0
    Paper = 1
    Scissors = 2
*/

let getComputerChoice = () => {
    choice = Math.floor(Math.random() * 3)
    return choice
}

let playRound = (playerchoice, computer) => {
    playerChoice.toLowerCase()
    let player = 0;
    playerchoice == "rock" ?
    player = 0 : playerchoice == "paper" ?
    player = 1 : player = 2;

    choice === 0 ? 
    console.log("Computer chooses Rock") : (choice === 1) ?
    console.log("Computer chooses Paper") : console.log("Computer chooses Scissors");
    

    return (player === computer) ? 
    "Draw, play again" : player === 0 && computer === 1 ?
    "You lose! Paper beats Rock" : player === 0 && computer === 2 ? 
    "You win! Rock beats Scissors" : player === 1 && computer === 0 ?
    "You win! Paper beats Rock" : player === 2 && computer === 0 ? 
    "You lose! Rock beats Scissors!" : player === 1 && computer === 2 ?
    "You lose! Scissors beats Paper!" : "You win! Scissors beat Paper"; 
}

let game = (playerChoice, computerChoice) => {
    let playerWins = 0
    let compWins = 0
    for (let n = 0; n < 5; n++) {
        if (n > 0) {
            computerChoice = getComputerChoice();
            playerChoice = prompt("Select Rock, Paper or Scissors");
        }
        let winner = playRound(playerChoice, computerChoice);
        console.log(winner);
        winner.includes("win") ? 
        playerWins++ : winner.includes("lose") ?
        compWins++ : console.log("No points");
    }
    return (playerWins === compWins) ? "Draw, play again!" : playerWins < compWins ? 
    "You lost. Computer wins a total amount of " + compWins.toString() : "You won. You have won a total amount of " + playerWins.toString()
}

let playerChoice = prompt("Select Rock, Paper or Scissors")
let computerChoice = getComputerChoice();
console.log(game(playerChoice, computerChoice));