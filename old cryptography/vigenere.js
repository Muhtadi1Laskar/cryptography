const { LETTER_MAP, modulas, findKey, chunk } = require("../config");

// Vignere Cipher
const encryptVigenre = (message, key, obj) => {
    const keyNum = findKey(key, obj);
    const keyMessage = findKey(message, obj);
    const chunkedMessage = chunk(keyMessage, keyNum.length);
    const finalKey = [].concat.apply([],
      chunkedMessage.map((elemOne) => {
        return elemOne.map((elemTwo, index) =>
          modulas(elemTwo + keyNum[index], 26)
        );
      })
    );
    return finalKey.map((elem) => LETTER_MAP[elem]).join("");
  };
  
  const decryptVigenre = (message, key, obj) => {
    const keyNum = findKey(key, obj);
    const keyMessage = findKey(message, obj);
    const chunkedMessage = chunk(keyMessage, keyNum.length);
    const finalKey = [].concat.apply([],
      chunkedMessage.map((elemOne) => {
        return elemOne.map((elemTwo, index) =>
          modulas(elemTwo - keyNum[index], 26)
        );
      })
    );
    return finalKey.map((elem) => LETTER_MAP[elem]).join("");
  };

  module.exports = { encryptVigenre, decryptVigenre }