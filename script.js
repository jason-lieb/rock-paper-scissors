let getComputerChoice = function() {
    let randNum = Math.floor(Math.random() * 3);
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
            output = 'You tied!';
        } else if (computerSelection.toLowerCase() === 'paper') {
            output = 'You lose! Paper beats Rock';
        } else {
            output = 'You win! Rock beats Scissors';
        }
    }   else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'rock') {
            output = 'You win! Paper beats Rock';
        } else if (computerSelection.toLowerCase() === 'paper') {
            output = 'You tied!';
        } else {
            output = 'You lose! Scissors beats Paper'
        }
    }   else {
        if (computerSelection.toLowerCase() === 'rock') {
            output = 'You lose! Rock beats Scissors'
        } else if (computerSelection.toLowerCase() === 'paper') {
            output = 'You win! Scissors beats paper'
        } else {
            output = 'You tied!';
        }
    }
    return output;
}

let game = function() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}
console.log(playRound('scissors', getComputerChoice()))