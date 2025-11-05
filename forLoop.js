// Day01: For loop with break and continue statements.

// Game guessTheNumber: Below is the code for a game, guess the number.
// Rules are: -
// 1. Computer will choose a random number between 10-20.
// 2. User will get 3 lives to guess the number.
// 3. If guess is correct then game will end and user get a score=remaining lives.
// 4. Else user will lose a life and get another chance to guess until all the lives have been consumed.

const target = Math.floor(Math.random() * (20 - 10) + 10);
let lives = 3;
let isWon = false;

for (let i = 1; i <= lives; i++) {
  console.log(`            ${lives - i + 1} lives left                  `);
  const value = prompt("Enter your guess [10-20]");
  if (isNaN(value)) {
    console.log("❌ Invalid input. Try again!");
    continue;
  }
  if (value == target) {
    isWon = true;
    console.log(`🥳 Congrats you have won the game!!`);
    console.log(`           Score ${lives - i + 1}           `);
    console.log(`   The number to guess was ${target} 🥳     `);
    break;
  } else {
    console.log(`Wrong ❌`);
  }
}

if (!isWon) {
  console.log(`You have lost 🥲 `);
  console.log(`The number to guess was ${target}`);
}
