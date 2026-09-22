//--Step:1--Generate a rendom choice for computer
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Rock";
  } else if (random === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


//--Step:2--Get the human player's choice from the prompt and show the current round
let round = 1;

function getHumanChoice() {
  let human = prompt(`Enter One (Rock, Paper, Scissors):\nRounde ${round++}`);
  human = human[0].toUpperCase() + human.slice(1);
  return `${human}`;
}


//--Step:3--Compare the human and computer choices, announce the winner, and updates the scores
let computerScore = 0;
let humnaScore = 0;
let draw = 0;

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    draw++;
    return `Tie`
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humnaScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    humnaScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    humnaScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}


//--Step:4--Run the game for 5 rounds and show the result and final scores
function playGame() {
  let n = 0;
  for (let index = 0; index < 5; index++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    n = index + 1;
    alert(playRound(humanSelection, computerSelection));

    //Ternary operator to determine and announce the round winner

    let announceWinner = humanSelection === computerSelection ? `Tie` :
      humanSelection === "Rock" && computerSelection === "Scissors" ? `You win! ${humanSelection} beats ${computerSelection}` :
        humanSelection === "Scissors" && computerSelection === "Paper" ? `You win! ${humanSelection} beats ${computerSelection}` :
          humanSelection === "Paper" && computerSelection === "Rock" ? `You win! ${humanSelection} beats ${computerSelection}` :
            `You lose! ${computerSelection} beats ${humanSelection}`;


    console.log(`${n}\nYou Chose : ${humanSelection}\nComputer Chose : ${computerSelection}\n${announceWinner}`);
  }
  console.log(`YourScore:${humnaScore}  ComputerScore:${computerScore}  Draw:${draw}`);
  return alert(`YourScore:${humnaScore}  ComputerScore:${computerScore}  Draw:${draw}`);
}

playGame();