const { readFileSync } = require("fs");
const { join } = require("path");

const input = readFileSync(join(__dirname, "input.txt"))
  .toString("utf-8")
  .split("\n")
  .map(v => parseInt(v, 10))
  .reduce((agg, next) => agg + next, 0);

console.log(input);
