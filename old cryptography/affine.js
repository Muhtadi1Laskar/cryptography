const { LETTER_MAP, modulas, findKey } = require("../config");

// Affine Cipher
const encryptAffine = (message, keyOne, keyTwo, obj) => {
    const keyValue = findKey(message, obj);
    const encriptValue = keyValue.map((elem) =>
      modulas(elem * keyOne + keyTwo, 26)
    );
    return encriptValue.map((elem) => LETTER_MAP[elem]).join("");
  };

  module.exports = { encryptAffine }