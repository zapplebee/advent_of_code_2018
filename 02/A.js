const { readFileSync } = require("fs");
const { join } = require("path");

const input = Object.values(
  readFileSync(join(__dirname, "input.txt"))
    .toString("utf-8")
    .split("\n")
    // .slice(0, 3)
    .map(str => {
      return [
        ...new Set(
          Object.values(
            str.split("").reduce((agg, next) => {
              if (agg[next]) {
                agg[next]++;
              } else {
                agg[next] = 1;
              }
              return agg;
            }, {})
          )
        )
      ].filter(n => n === 2 || n === 3);
    })
    .reduce(
      (a, next) => {
        const agg = { ...a };
        next.forEach(n => {
          if (n === 2) {
            agg.two++;
          }
          if (n === 3) {
            agg.three++;
          }
        });
        return agg;
      },
      { two: 0, three: 0 }
    )
).reduce((a, b) => a * b);

console.log(input);
