// Please enter your name after node index.js and see what happens :)
const name = process.argv[2];
if (typeof name !== "string") {
  console.log("You did not enter a string, please enter your name");
} else if (process.argv[3]) {
  console.log("You can only enter one name");
} else {
  console.log(`You can do this ${name}!`);
}
// encourage!
