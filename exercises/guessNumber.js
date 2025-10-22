// Guess the Number Game

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = Math.floor(Math.random() * 10) + 1;

function ask() {
  readline.question("Guess a number (1-10): ", (answer) => {
    const guess = Number(answer);
    if (guess === secret) {
      console.log("🎉 Correct!");
      readline.close();
    } else {
      console.log("❌ Try again.");
      ask();
    }
  });
}

ask();
