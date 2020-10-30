const {
    LETTER_MAP
} = require("./config");
// const LETTER_MAP = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     '3': 'd',
//     '4': 'e',
//     '5': 'f',
//     '6': 'g',
//     '7': 'h',
//     '8': 'i',
//     '9': 'j',
//     '10': 'k',
//     '11': 'l',
//     '12': 'm',
//     '13': 'n',
//     '14': 'o',
//     '15': 'p',
//     '16': 'q',
//     '17': 'r',
//     '18': 's',
//     '19': 't',
//     '20': 'u',
//     '21': 'v',
//     '22': 'w',
//     '23': 'x',
//     '24': 'y',
//     '25': 'z'
//   };

// Modulas Operator
const modulas = (n, m) => Math.floor(n % m >= 0 ? n % m : n % m + m);

// Maps alphabetical value to numerical value
const findKey = (message, obj) => {
    const str = message.replace(/ +/g, "").split("");
    return str.map(elem => {
        return parseInt(Object.keys(obj).find(key => LETTER_MAP[key] === elem));
    })
}

// Chunks array 
const chunk = (array, size) => {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

// Caesar Cipher
const encryptCaesar = (message, shift, obj) => {
    const key = findKey(message, obj);
    const encriptKey = key.map(elem => modulas((elem + shift), 26));
    return encriptKey.map(elem => LETTER_MAP[elem]).join("");
}

const decryptCaesar = (message, shift, obj) => {
    const key = findKey(message, obj);
    const decryptKey = key.map(elem => modulas((elem - shift), 26));
    return decryptKey.map(elem => LETTER_MAP[elem]).join("");
}


// Affine Cipher
const encryptAffine = (message, keyOne, keyTwo, obj) => {
    const keyValue = findKey(message, obj);
    const encriptValue = keyValue.map(elem => modulas((elem * keyOne + keyTwo), 26));
    return encriptValue.map(elem => LETTER_MAP[elem]).join("");
}

// Vignere Cipher
const encryptVigenre = (message, key, obj) => {
    const keyNum = findKey(key, obj);
    const keyMessage = findKey(message, obj);
    const chunkedMessage = chunk(keyMessage, keyNum.length);
    const finalKey = [].concat.apply([], chunkedMessage.map(elemOne => {
        return elemOne.map((elemTwo, index) => modulas(elemTwo + keyNum[index], 26));
    }));
    return finalKey.map(elem => LETTER_MAP[elem]).join("");
}

const decryptVigenre = (message, key, obj) => {
    const keyNum = findKey(key, obj);
    const keyMessage = findKey(message, obj);
    const chunkedMessage = chunk(keyMessage, keyNum.length);
    const finalKey = [].concat.apply([], chunkedMessage.map(elemOne => {
        return elemOne.map((elemTwo, index) => modulas(elemTwo - keyNum[index], 26));
    }));
    return finalKey.map(elem => LETTER_MAP[elem]).join("");
}



console.log(encryptVigenre("Muhtadi", "bar", LETTER_MAP));