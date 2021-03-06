const LETTER_MAP = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
};

// Modulas Operator
const modulas = (n, m) => Math.floor(n % m >= 0 ? n % m : (n % m) + m);

// Maps alphabetical value to numerical value
const findKey = (message, obj) => {
  const str = message.replace(/ +/g, "").split("");
  return str.map((elem) => {
    return parseInt(Object.keys(obj).find((key) => LETTER_MAP[key] === elem));
  });
};

// Chunks array
const chunk = (array, size) =>
  array.length ? [array.slice(0, size), ...chunk(array.slice(size), size)] : [];

module.exports = {
  LETTER_MAP,
  modulas,
  findKey,
  chunk,
};
