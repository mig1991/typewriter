

const typewriter = function(sentence) {
  let timer = 0;

  for (const letter of sentence) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, timer);
    timer += 50;
  }
  setTimeout(() => {
    console.log("\n");
  }, timer);
};


typewriter("hello there from lighthouse labs");