let humanScore = 0;
let computerScore = 0;
function getHumanChoice()
{
    
    while (1)
    {
        let choice = prompt("Enter your choice (rock, paper, scissors): ");
        choice = (choice)? choice.toLowerCase(): null;
        if (choice == "rock"  || choice == "paper" || choice == "scissors")
            return choice;
        alert("Invalid choice! Please enter rock, paper, or scissors: ");
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
        humanScore += (humanChoice == "paper") ;
        computerScore += (computerChoice == "paper");
    }
    else if (computerChoice == "scissors" && humanChoice == "rock" || humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log(((humanChoice == "rock") ? "You win!"  : "Oops! You lost this round") + " Rock crushes scissors");
        humanScore += (humanChoice == "rock") ;
        computerScore += (computerChoice == "rock");
    }
    else if (computerChoice == "paper" && humanChoice == "scissors" || humanChoice == "paper" && computerChoice == "scissors" )
    {
        console.log(((humanChoice == "scissors") ? "You win!"  : "Oops! You lost this round") + " scissors cuts paper");
        humanScore += (humanChoice == "scissors") ;
        computerScore += (computerChoice == "scissors");
    }
    else if (humanChoice == computerChoice)
        console.log("It's a draw! No winner this time.");
}
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
playGame();
