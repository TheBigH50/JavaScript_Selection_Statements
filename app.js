console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let favoriteNumber = 50;
let answer = prompt("Guess my favorite number!")
console.log("Hello, "+ answer)
if (answer < favoriteNumber) {
  console.log("Too Low")
} else if (answer > favoriteNumber) {
  console.log("Too High")
} else if (answer = favoriteNumber) {
  console.log("Congratulations!")
}