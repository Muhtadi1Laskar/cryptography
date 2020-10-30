const { LETTER_MAP, modulas, findKey, chunk } = require("./config");

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

// Affine Cipher
const encryptAffine = (message, keyOne, keyTwo, obj) => {
  const keyValue = findKey(message, obj);
  const encriptValue = keyValue.map((elem) =>
    modulas(elem * keyOne + keyTwo, 26)
  );
  return encriptValue.map((elem) => LETTER_MAP[elem]).join("");
};

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

console.log(encryptVigenre("Muhtadi", "bar", LETTER_MAP));
