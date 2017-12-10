let list = Array.apply(null, {length: 256}).map(Number.call, Number)
let listLength = list.length;

let lengths = [199,0,255,136,174,254,227,16,51,85,1,2,22,17,7,192];

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
    console.log(startingIndex + ' ' + length)
    let endingIndex = increment(startingIndex, length - 1);
    console.log('ending index: ', endingIndex);
    for (let i = 0; i < Math.floor(length/2); i++) {
        console.log(`step ${i + 1}: starting index: ${startingIndex}, ending index: ${endingIndex}`);
        let tempValue = list[startingIndex];
        list[startingIndex] = list[endingIndex];
        list[endingIndex] = tempValue;
        startingIndex = increment(startingIndex, 1);
        endingIndex = decrement(endingIndex, 1);
    }
}

let skipSize = 0;
let currentPosition = 0;

for (let i = 0; i < lengths.length; i++) {
    console.log(`list before step ${i + 1}: ${list}`);
    reverse(currentPosition, lengths[i]);
    console.log('a' + currentPosition + ' ' + (lengths[i] + skipSize));
    currentPosition = increment(currentPosition, lengths[i] + skipSize);
    skipSize++;
}

console.log(`list in the end: ${list}`);
console.log(`end result is ${list[0]} * ${list[1]} = ${list[0] * list[1]}`);