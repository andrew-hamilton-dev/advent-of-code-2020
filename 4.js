const passports = require("./4.data.json");
const Joi = require("Joi");

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
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      case "iyr":
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      case "eyr":
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      case "hgt":
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      case "hcl":
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      case "ecl":
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      case "pid":
        if (isValidKeyValid(passport[key])) {
          validCheck++;
        }
        break;
      default:
        break;
    }
  });

  return validCheck === numValid;
};

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
// pid (Passport ID) - a nine-digit number, including leading zeroes.
// cid (Country ID) - ignored, missing or not.

// const schema = Joi.object({
//   byr: Joi.string().length(4).min(1920).max(2002),
//   iyr: Joi.string().length(4).min(2010).max(2020),
//   iyr: Joi.string().length(4).min(2020).max(2030),
//   hgt: Joi.string(),
//   hcl: Joi.string().length(7).allow("#").alphanum(),
//   pid: Joi.string()
//     .length(9)
//     .pattern(/^[0-9]+$/, "numbers"),
// });

const validPassports = passports.filter(isValidPassport);

console.log(validPassports.length);
// 1 - 235
