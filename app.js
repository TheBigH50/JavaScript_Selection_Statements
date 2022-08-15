console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
let favoriteNumber = 50;
let answer = prompt("Guess my favorite number!");
console.log("Hello, " + answer);
if (answer < favoriteNumber) {
  console.log("Too Low");
} else if (answer > favoriteNumber) {
  console.log("Too High");
} else if ((answer = favoriteNumber)) {
  console.log("Congratulations!");
}

let birthMonth = prompt("What is your birth month?");
switch (birthMonth) {
  case "12":
  case "1":
  case "2":
    console.log("Winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("Spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("Summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("Fall");
    break;
  default:
    console.log("Does Not Compute");
}
