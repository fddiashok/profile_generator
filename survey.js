const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable", (firstQue) => {
  rl.question("What's an activity you like doing? ", (secondQue) => {
    rl.question("What do you listen to while doing that?", (thirdQue) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (fourthQue) => {
        rl.question("What's your favourite thing to eat for that meal? ", (fifthQue) => {
          rl.question("Which sport is your absolute favourite? ", (sixthQue) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (seventhQue) => {
              process.stdout.write(` ${firstQue} loves ${secondQue} while listening ${thirdQue}, devouring ${fourthQue} and prefers ${fifthQue} ,he prefers ${sixthQue} over any other sport, and is amzaing at ${seventhQue}`);
              rl.close();

            });
          });
        });
      });
    });
  });
});