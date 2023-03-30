let playerChoice = prompt("Select Rock, Paper or Scissors", )

/*  Rock = 0
    Paper = 1
    Scissors = 2
*/

let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    choice === 0 ? 
    console.log("Computer chooses Rock") : (choice === 1) ?
    console.log("Computer chooses Paper") : console.log("Computer chooses Scissors");
    return choice
}

let computerChoice = getComputerChoice();

let playGame = (playerchoice, computer) => {
    console.log(playerChoice);
    playerChoice.toLowerCase()
    let player = 0;
    playerchoice == "rock" ?
    player = 0 : playerchoice == "paper" ?
    player = 1 : player = 2;

    return (player === computer) ? 
    "Draw, play again" : player === 0 && computer === 1 ?
    "You lose! Paper beats Rock" : player === 0 && computer === 2 ? 
    "You win! Rock beats Scissors" : player === 1 && computer === 0 ?
    "You win! Paper beats Rock" : player === 2 && computer === 0 ? 
    "You lose! Rock beats Scissors!" : player === 1 && computer === 2 ?
    "You lose! Scissors beats Paper!" : "You win! Scissors beat Paper"; 
}

console.log(playGame(playerChoice, computerChoice));