const buttonsEl = document.querySelectorAll('button');
const resultEl = document.getElementById('result');
const playScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttonsEl.forEach(button =>{
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
        
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomchoice = Math.floor(Math.random() * choices.length);
    return choices[randomchoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }else if(
      (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++;
        playScoreEl.textContent = playerScore;
       return "You Win! " + playerSelection + " beats " + computerSelection;
    }else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection
    }
}