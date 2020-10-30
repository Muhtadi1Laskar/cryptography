const { LETTER_MAP, modulas, findKey } = require("../config");

// Caesar Cipher
const encryptCaesar = (message, shift, obj) => {
    const key = findKey(message, obj);
    const encriptKey = key.map((elem) => modulas(elem + shift, 26));
    return encriptKey.map((elem) => LETTER_MAP[elem]).join("");
  };
  
  const decryptCaesar = (message, shift, obj) => {
    const key = findKey(message, obj);
    const decryptKey = key.map((elem) => modulas(elem - shift, 26));
    return decryptKey.map((elem) => LETTER_MAP[elem]).join("");
  };

  module.exports = { encryptCaesar, decryptCaesar };