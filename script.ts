import stdout from "stdout-update";

const stdoutManager = stdout.getInstance();

function printCharacter(
  texts: string[],
  interval: number,
  i: number,
  abc: string = "1234567890 !@#$%^&*()_+., qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
  renderEachLineWithoutLetter: boolean = false
) {
  let k = 0;

  let myInterval = setInterval(() => {
    if (renderEachLineWithoutLetter) {
      console.log(texts[k]);
      k += 1;
      if (k === texts.length) clearInterval(myInterval); // Stop when all lines are shown
    } else {
      let txt = "";
      const result = txt + abc[k];

      stdoutManager.update([result]);
      if (abc[k] === texts[i][txt.length]) txt += abc[k];

      k += 1;

      if (k === abc.length) k = 0;

      if (txt.length === texts[i].length) {
        console.log();
        stdoutManager.erase();
        console.log();

        clearInterval(myInterval);

        if (texts.length - 1 !== i)
          printCharacter(texts, interval, (i += 1), abc);
      }
    }
  }, interval);
}

export { printCharacter };
