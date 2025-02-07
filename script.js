let uiPlayerScore =  document.querySelector("#player_score .number");
let uiBotScore = document.querySelector("#bot_score .number");
let popUp = document.querySelector("#popup");
let reset = document.querySelector("#reset");
let massage = document.querySelector("#message");
let PlayerScore = 0;
let BotScore = 0;
let numberOfRounds = 0;

reset.addEventListener("click", e => popUp.style.visibility = "hidden");
function setupEvent()
{
    let a = document.querySelectorAll(".card");
    for (let i = 0; i < a.length; i++)
        a[i].addEventListener("click", playGame);
}

function getComputerChoice()
{
    let choice = ["rock" , "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}


function playGame(humanChoice)
{
    playRound(humanChoice.target.parentElement.id, getComputerChoice());
    console.log("PlayerScore = " + PlayerScore + " | " + "BotScore = " + BotScore);
    if (BotScore == 5 || PlayerScore == 5)
    {
        document.querySelector("#win p").textContent = (BotScore < PlayerScore ? "You win!  Well played!" : "You lose! Better luck next time!");
        popUp.style.visibility = "visible";
        uiBotScore.textContent = 0;
        uiPlayerScore.textContent = 0;
        BotScore = 0;
        PlayerScore = 0;
    }
}

function playRound (humanChoice, computerChoice)
{
    if ( computerChoice == "rock" && humanChoice == "paper" || humanChoice == "rock" && computerChoice == "paper")
    {
        message.textContent = ((humanChoice == "paper") ? "You win!"  : "Oops! You lost this round") + " paper covers rock";
        PlayerScore += (humanChoice == "paper") ;
        BotScore += (computerChoice == "paper");
    }
    else if (computerChoice == "scissors" && humanChoice == "rock" || humanChoice == "scissors" && computerChoice == "rock")
    {
        message.textContent = ((humanChoice == "rock") ? "You win!"  : "Oops! You lost this round") + " Rock crushes scissors";
        PlayerScore += (humanChoice == "rock") ;
        BotScore += (computerChoice == "rock");
    }
    else if (computerChoice == "paper" && humanChoice == "scissors" || humanChoice == "paper" && computerChoice == "scissors" )
    {
        message.textContent = ((humanChoice == "scissors") ? "You win!"  : "Oops! You lost this round") + " scissors cuts paper";
        PlayerScore += (humanChoice == "scissors") ;
        BotScore += (computerChoice == "scissors");
    }
    else if (humanChoice == computerChoice)
        message.textContent = "It's a draw! No winner this time.";
    uiBotScore.textContent = BotScore;
    uiPlayerScore.textContent = PlayerScore;
}

setupEvent();
