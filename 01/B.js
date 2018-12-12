const { readFileSync } = require("fs");
const { join } = require("path");

const freqs = {};

const input = readFileSync(join(__dirname, "input.txt"))
  .toString("utf-8")
  .split("\n")
  .map(v => parseInt(v, 10));

function loop(start) {
  const finishFreq = input.reduce((agg, next) => {
    const sum = agg + next;
    if (freqs[sum]) {
      console.log(sum);
      process.exit(0);
    } else {
      freqs[sum] = true;
    }
    return sum;
  }, start);
  loop(finishFreq);
}

loop(0);
