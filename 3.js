const rows = require("./3.data.json");

//[right, down]
let slopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
let numTrees = [];

slopes.forEach((slope, slopeIndex) => {
  const right = slope[0];
  const down = slope[1];
  let position = 0;
  let trees = 0;
  for (let row = 0; row < rows.length; row += down) {
    if (rows[row].charAt(position) === "#") {
      trees++;
    }
    position = (position + right) % rows[row].length;
  }
  numTrees.push(trees);
});

console.log(numTrees);
const answer = numTrees.reduce((a, b) => a * b, 1);
console.log(answer);

// 1 - 282
// 2 - 958815792
