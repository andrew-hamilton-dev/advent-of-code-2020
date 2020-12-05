const data = require("./1.data.json");

// cause sets can't have duplicates
let uniqueNumbers = new Set();
const sumCondition = 2020;

const sum = (...args) => [...args].reduce((a, b) => a + b, 0);
const matcher = (...args) => {
  if (sum(...args) === sumCondition) {
    uniqueNumbers = new Set([...args]);
  }
};

data.forEach((x) => {
  data.forEach((y) => {
    data.forEach((z) => {
      matcher(x, y, z);
    });
  });
});

const answer = [...uniqueNumbers].reduce((a, b) => a * b, 1);
console.log(answer);
