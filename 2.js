const data = require("./2.data.json");

// split on :
// generate rule based on element 1
//      last character = the required character
//      get character rule - 0,length-2 string =
// password is element 2

//structure data
const structuredData = data.map((line) => {
  const split = line.split(": ");
  return {
    policy: {
      min: split[0].slice(0, split[0].length - 2).split("-")[0],
      max: split[0].slice(0, split[0].length - 2).split("-")[1],
      char: split[0].slice(split[0].length - 1, split[0].length),
    },
    password: split[1],
  };
});

const isValidPasswordStep1 = (item) => {
  const numChar = item.password
    .split("")
    .filter((char) => char === item.policy.char);

  return (
    numChar.length <= parseInt(item.policy.max) &&
    numChar.length >= parseInt(item.policy.min)
  );
};

const isValidPasswordStep2 = (item) => {
  const characters = item.password.split("");

  if (
    (characters[item.policy.min - 1] === item.policy.char &&
      characters[item.policy.max - 1] !== item.policy.char) ||
    (characters[item.policy.min - 1] !== item.policy.char &&
      characters[item.policy.max - 1] === item.policy.char)
  ) {
    return item;
  }
};

const validPasswords = structuredData.filter(isValidPasswordStep2);

console.log(validPasswords.length);

//1:  625
//2:  391
