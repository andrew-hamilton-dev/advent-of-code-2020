const passports = require("./4.data.json");

const isValidPassport = (passport) => {
  if (
    passport.byr &&
    passport.iyr &&
    passport.eyr &&
    passport.hgt &&
    passport.hcl &&
    passport.ecl &&
    passport.pid
  ) {
    if (passportHasValidData(passport)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const passportHasValidData = (passport) => {
  const keys = Object.keys(passport);

  let validCheck = 0;
  let numValid = 7;

  keys.forEach((key) => {
    switch (key) {
      case "byr":
        if (isValidBYR(passport[key])) {
          validCheck++;
        }
        break;
      case "iyr":
        if (isValidIYR(passport[key])) {
          validCheck++;
        }
        break;
      case "eyr":
        if (isValidEYR(passport[key])) {
          validCheck++;
        }
        break;
      case "hgt":
        if (isValidHGT(passport[key])) {
          validCheck++;
        }
        break;
      case "hcl":
        if (isValidHCL(passport[key])) {
          validCheck++;
        }
        break;
      case "ecl":
        if (isValidECL(passport[key])) {
          validCheck++;
        }
        break;
      case "pid":
        if (isValidPID(passport[key])) {
          validCheck++;
        }
        break;
      default:
        break;
    }
  });

  return validCheck === numValid;
};

const isBetween = (value, min, max) => {
  let passed = false;
  if (parseInt(value) >= min && parseInt(value) <= max) {
    passed = true;
  }
  return passed;
};

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
const isValidBYR = (value) => {
  let passed = false;
  if (value.length === 4 && isBetween(value, 1920, 2002)) {
    passed = true;
  }
  return passed;
};
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
const isValidIYR = (value) => {
  let passed = false;
  if (isBetween(value, 2010, 2020)) {
    passed = true;
  }
  return passed;
};
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
const isValidEYR = (value) => {
  let passed = false;
  if (value.length === 4 && isBetween(value, 2020, 2030)) {
    passed = true;
  }
  return passed;
};
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
const isValidHGT = (value) => {
  let passed = false;
  let re = new RegExp(/in|cm/);
  if (re.test(value)) {
    const h = parseInt(value.slice(0, -2));
    if (value.includes("in")) {
      passed = isBetween(value, 59, 76);
    }
    if (value.includes("cm")) {
      passed = isBetween(value, 150, 193);
    }
  }
  return passed;
};
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
const isValidHCL = (value) => {
  let passed = false;
  let re = new RegExp(/^#(?:[0-9a-fA-F]{6})$/);
  return re.test(value);
};
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
const isValidECL = (value) => {
  let passed = false;
  if (["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)) {
    passed = true;
  }
  return passed;
};
// pid (Passport ID) - a nine-digit number, including leading zeroes.
const isValidPID = (value) => {
  let passed = false;
  if (value.length === 9) {
    passed = true;
  }
  return passed;
};
// cid (Country ID) - ignored, missing or not.

const validPassports = passports.filter(isValidPassport);
console.log(passports.length, validPassports.length);
// 1 - 235
// 2 - 194
