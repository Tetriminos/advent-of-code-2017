let list = Array.apply(null, {length: 256}).map(Number.call, Number)
let listLength = list.length;

let stringLengths = '199,0,255,136,174,254,227,16,51,85,1,2,22,17,7,192';
let lengths = [];
for (let i = 0; i < stringLengths.length; i++) {
    lengths.push(stringLengths[i].charCodeAt(0));
}

let extraCharacters = [17, 31, 73, 47, 23];

lengths = lengths.concat(extraCharacters);

console.log(lengths);

function increment(number, amount) {
    let remainder = amount % listLength;
    if (number + remainder >= listLength) {
        return number + remainder - listLength;
    } else {
        return number + remainder;
    }
}

function decrement(number, amount) {
    if (number - amount < 0) {
        return listLength + number - amount;
    } else {
        return number - 1;
    }
}

function reverse(startingIndex, length) {
    let endingIndex = increment(startingIndex, length - 1);
    for (let i = 0; i < Math.floor(length/2); i++) {
        let tempValue = list[startingIndex];
        list[startingIndex] = list[endingIndex];
        list[endingIndex] = tempValue;
        startingIndex = increment(startingIndex, 1);
        endingIndex = decrement(endingIndex, 1);
    }
}

let skipSize = 0;
let currentPosition = 0;

for (let j = 0; j < 64; j++) {
    for (let i = 0; i < lengths.length; i++) {
        reverse(currentPosition, lengths[i]);
        currentPosition = increment(currentPosition, lengths[i] + skipSize);
        skipSize++;
    }
}

console.log(`list in the end: ${list}`);
console.log(`end result is ${list[0]} * ${list[1]} = ${list[0] * list[1]}`);

let hexadecimalString = '';
for (let j = 0; j < list.length; j += 16) {
    final = list[j];
    for (let i = j + 1, k = 0; k < 15; i++, k++) {
        final ^=  list[i];
    }
    let hexadecimalSubString = final.toString(16);
    hexadecimalString += hexadecimalSubString;
}

console.log(hexadecimalString);