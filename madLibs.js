//consts that set up the interface with the terminal, allowing a user to interact with your program
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

//funciton establishing an ask function to await user input
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


start();
async function start() {
  console.log(
    "Let's play a Mad Libs Game! Im going to ask you for 5 things to insert in out mad libs paragraph!"
  );

  let adjOne = await ask("Please give me an adjective ");
  let nounOne = await ask("Now give me a noun ");
  let pluralNoun = await ask("Plural noun? ");
  let verbOne = await ask("A verb ending in -ing? ");
  let nounTwo = await ask("One more noun ");

  console.log(
    "It was a " +
      adjOne +
      ", warm June " +
      nounOne +
      ". " +
      pluralNoun +
      " were singing and the sun was " +
      verbOne +
      ". It could not be a better " +
      nounTwo +
      "!"
  );
  process.exit();
}
