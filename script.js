let uiPlayerScore =  document.querySelector("#player_score .number");
let uiBotScore = document.querySelector("#bot_score .number");
let popUp = document.querySelector("#popup");
let PlayerScore = 0;
let BotScore = 0;
let numberOfRounds = 0;

function setupEvent()
{
    console.log("hello anas");
    let a = document.querySelectorAll(".card");
    for (let i = 0; i < a.length; i++)
    { 
        a[i].addEventListener("click", playGame);
    }
}
function getComputerChoice()
{
    let choice = ["rock" , "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}



function playGame(humanChoice)
{
    popUp.style.visibility = "visible";;
    playRound(humanChoice.target.parentElement.id, getComputerChoice());
    console.log("PlayerScore = " + PlayerScore + " | " + "BotScore = " + BotScore);
    if (BotScore == 5 || PlayerScore == 5)
    {
        console.log(BotScore < PlayerScore ? "You win!  Well played!" : "You lose! Better luck next time!");
        BotScore = 0;
        PlayerScore = 0;
    }
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

console.log("start");
setupEvent();
