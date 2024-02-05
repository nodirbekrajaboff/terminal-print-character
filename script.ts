import stdout from "stdout-update";

const stdoutManager = stdout.getInstance();

function printCharacter(
  // To accept texts.Only accepted as array
  texts: string[],
// Time for Timeout
  interval: number,
  i: number,
  // Random letters.By these letters can be issued letters in the animation form in the terminal
  abc: string = "1234567890 !@#$%^&*()_+., qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
  // If this recipient is given the True value, each letter within each array will issue each letter in the animation form
  renderEachLineWithoutLetter: boolean = false
) {
  let k = 0;

  let myInterval = setInterval(() => {
    if (renderEachLineWithoutLetter) {
      console.log(texts[k]);
      k += 1;
      if (k === texts.length) clearInterval(myInterval); 
    } else {
      let txt = "";
      const result = txt + abc[k];

      stdoutManager.update([result]);
      if (abc[k] === texts[i][txt.length]) txt += abc[k];

      k += 1;

      if (k === abc.length) k = 0;

      if (txt.length === texts[i].length) {
        // To delete a row on the terminal and write down a new line for the next text
        console.log();
        stdoutManager.erase();
        console.log();

        clearInterval(myInterval);

        // If the text in the array is not fully released, it calls this function.
        if (texts.length - 1 !== i)
          printCharacter(texts, interval, (i += 1), abc);
      }
    }
  }, interval);
}

export { printCharacter };
