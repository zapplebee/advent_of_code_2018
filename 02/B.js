const { readFileSync } = require("fs");
const { join } = require("path");

const input = readFileSync(join(__dirname, "input.txt"))
  .toString("utf-8")
  .split("\n");

function distance(strA, strB) {
  const raA = strA.split("");
  const raB = strB.split("");

  return raA.length - raA.filter((v, i) => v === raB[i]).length;
}

input.forEach(v1 => {
  input.forEach(v2 => {
    if (distance(v1, v2) === 1) {
      const ra1 = v1.split("");
      const ra2 = v2.split("");

      const matchString = ra1
        .map((v, i) => {
          if (v === ra2[i]) {
            return v;
          } else {
            return false;
          }
        })
        .filter(v => Boolean(v))
        .join("");

      console.log(matchString);
      process.exit(0);
    }
  });
});
