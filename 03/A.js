const { readFileSync } = require("fs");
const { join } = require("path");

const input = readFileSync(join(__dirname, "input.txt"))
  .toString("utf-8")
  .split("\n");

const claims = input.map(v => {
  const rgx = /\#(\d+) @ (\d+),(\d+)\: (\d+)x(\d+)/g;
  const [_input, claimNumber, x, y, width, height] = rgx.exec(v);
  return {
    claimNumber,
    left: parseInt(x, 10),
    top: parseInt(y, 10),
    width: parseInt(width, 10),
    height: parseInt(height, 10)
  };
});

const fabric = {};

claims.forEach(({ left, top, width, height }) => {
  for (let x = left; x < left + width; x++) {
    for (let y = top; y < top + height; y++) {
      const coord = `${x}-${y}`;
      if (fabric[coord] === false || fabric[coord] === true) {
        fabric[coord] = true;
      } else {
        fabric[coord] = false;
      }
    }
  }
});

console.log(Object.values(fabric).filter(v => v).length);
