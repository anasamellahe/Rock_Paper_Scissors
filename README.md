# Rock Paper Scissors Game

## Overview
This is a simple implementation of the classic game **Rock, Paper, Scissors** played entirely in the console. The game is built using **JavaScript** and is part of the Foundations Course in The Odin Project curriculum. The player competes against the computer in a best-of-five rounds match.

---

## Features
- **Player vs Computer**: The player inputs their choice, and the computer randomly selects its choice.
- **Score Tracking**: The game keeps track of the player's and computer's scores across 5 rounds.
- **Input Validation**: The player's input is validated to ensure it is one of the valid choices: "rock", "paper", or "scissors".
- **Case-Insensitive Input**: The player can input their choice in any case (e.g., "ROCK", "Rock", "rock").
- **Winner Declaration**: At the end of 5 rounds, the game declares the overall winner or if it's a draw.

---

## How to Play
1. Open the **console** in your browser.
2. Enter your choice when prompted: `rock`, `paper`, or `scissors`.
3. The computer will randomly select its choice.
4. The result of each round will be displayed in the console.
5. After 5 rounds, the game will declare the winner or if it's a draw.

---

## Project Structure
- **HTML File**: Contains a blank HTML document with a script tag linking to the JavaScript file.
- **JavaScript File**: Contains all the game logic, including:
  - `getHumanChoice()`: Prompts the player for their choice and validates it.
  - `getComputerChoice()`: Randomly selects the computer's choice.
  - `playRound()`: Compares the player's and computer's choices, updates scores, and logs the result.
  - `playGame()`: Runs the game for 5 rounds and declares the final winner.

---

## Assignment Details
This project is part of The Odin Project's Foundations Course. The goal is to practice:
- Problem-solving and planning.
- Writing clean and functional JavaScript code.
- Using functions, loops, and conditional statements.
- Debugging and testing code in the console.

Enjoy the game! 🎮
