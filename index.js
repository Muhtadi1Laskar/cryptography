const { LETTER_MAP } = require("./config");
const { encryptCaesar, decryptCaesar,  encryptAffine, encryptVigenre, decryptVigenre } = require("./old cryptography/junction-point.js");

console.log(encryptCaesar("muhtadi", 2, LETTER_MAP));
console.log(decryptCaesar("owjvcfk", 2, LETTER_MAP));
console.log(encryptAffine("muhtadi", 3, 4, LETTER_MAP));
console.log(encryptVigenre("muhtadi", "bar", LETTER_MAP));
console.log(decryptVigenre("nuyuauj", "bar", LETTER_MAP));
