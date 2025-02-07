let humanScore = 0;
let computerScore = 0;

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("humanScore = " + humanScore + " | " + "computerScore = " + computerScore);
    }
    if (computerScore == humanScore)
        console.log("It's a draw! No winner this time.");
    else
        console.log(computerScore < humanScore ? "You win!  Well played!" : "You lose! Better luck next time!");
    computerScore = 0;
    humanScore = 0;
}
// playGame();

let uiPlayerScore =  document.querySelector("#player_score .number");
let uiBotScore = document.querySelector("#bot_score .number");
let PlayerScore = 0;
let BotScore = 0;

function getPlayerChoice()
{
    let a = document.querySelectorAll(".card");
    for (let i = 0; i < a.length; i++)
    {  
        a[i].addEventListener("click", (e) => play(getComputerChoice(), e.target.parentElement.id));
    }
}
function getComputerChoice()
{
    let choice = ["rock" , "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}


function playRound (humanChoice, computerChoice)
{
    if ( computerChoice == "rock" && humanChoice == "paper" || humanChoice == "rock" && computerChoice == "paper")
    {
        console.log(((humanChoice == "paper") ? "You win!"  : "Oops! You lost this round") + " paper covers rock");
        PlayerScore += (humanChoice == "paper") ;
        BotScore += (computerChoice == "paper");
    }
    else if (computerChoice == "scissors" && humanChoice == "rock" || humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log(((humanChoice == "rock") ? "You win!"  : "Oops! You lost this round") + " Rock crushes scissors");
        PlayerScore += (humanChoice == "rock") ;
        BotScore += (computerChoice == "rock");
    }
    else if (computerChoice == "paper" && humanChoice == "scissors" || humanChoice == "paper" && computerChoice == "scissors" )
    {
        console.log(((humanChoice == "scissors") ? "You win!"  : "Oops! You lost this round") + " scissors cuts paper");
        PlayerScore += (humanChoice == "scissors") ;
        BotScore += (computerChoice == "scissors");
    }
    else if (humanChoice == computerChoice)
        console.log("It's a draw! No winner this time.");
    uiBotScore.textContent = BotScore;
    uiPlayerScore.textContent = PlayerScore;
}