function splitByRow(wholeString) {
    let stringArray = wholeString.split('\n');
    return stringArray.map(x => parseInt(x));
}

let instructions = splitByRow(`2
1
2
-2
0
0
...
-5
0
-3
-5
-8`);

let stepCounter = 0;
let i = 0;
// not affiliated with Apple, pls don't sue
let iTemporary;

while(true) {
    if (instructions[i] + i >= instructions.length) {
        stepCounter++;
        break;
    } else {
        iTemporary = i;
        i = instructions[i] + i;
        instructions[iTemporary]++;
        stepCounter++;
    }
}

console.log(`It took ${stepCounter} steps!`);