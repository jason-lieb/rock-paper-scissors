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
            winCount -= 1;
        } else {
            output = 'You win! Rock beats Scissors';
            winCount += 1;
        }
    }   else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'rock') {
            output = 'You win! Paper beats Rock';
            winCount += 1;
        } else if (computerSelection.toLowerCase() === 'paper') {
            output = 'You tied!';
        } else {
            output = 'You lose! Scissors beats Paper'
            winCount -= 1;
        }
    }   else {
        if (computerSelection.toLowerCase() === 'rock') {
            output = 'You lose! Rock beats Scissors'
            winCount -= 1;
        } else if (computerSelection.toLowerCase() === 'paper') {
            output = 'You win! Scissors beats paper'
            winCount += 1;
        } else {
            output = 'You tied!';
        }
    }
    return output;
}

let game = function() {
    winCount = 0;
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getComputerChoice(), getComputerChoice()));
    }
    if (winCount > 0) {
        return 'You win!'
    } else if (winCount < 0) {
        return 'You lose!'
    } else {
        return 'You tied!'
    }
}
console.log(game());