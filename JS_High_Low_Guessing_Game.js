let maxNumber = parseInt(prompt("Enter the Max Number for range. The Greater the Number the More Difficult the Game!"));

while (!maxNumber){
  maxNumber = parseInt(prompt("Enter the Max Number for range. The Greater the Number the More Difficult the Game!"));
}
const randomValue = Math.floor(Math.random() * maxNumber) + 1;
let playerGuess = parseInt(prompt('Enter your First Guess!'));
let counter = 1

while (playerGuess !== randomValue){
  if(playerGuess === 'q'){break;}
    if (playerGuess > randomValue) {
        counter++;
        playerGuess = parseInt(prompt('Your Guess was Too High! Enter your Next Guess!'));
        }
        else {
            counter++;
            playerGuess = parseInt(prompt('Your Guess was Too Low! Enter your Next Guess!'));
            }
}

alert(`You Guessed it. It took you ${counter} Tries`);
