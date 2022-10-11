let getComputerChoice = function() {
    let randNum = Math.floor(Math.random() * 3);
    let choice;
    if (randNum === 0) {
        choice = 'rock';
    } else if (randNum === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

let playRound = function(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'rock') {

        } else if (computerSelection.toLowerCase() === 'paper') {

        } else {

        }
    }   else if (playerSelection.toLowerCase() === 'paper') {

    }   else {

    }
}

let game = function() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}
console.log(getComputerChoice())