let memoryBanks = [11,	11,	13,	7,	0,	15,	5,	5,	4,	4,	1,	1,	7,	1,	15,	11];

function getMaxIndex(numberArray) {
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > max) {
            max = numberArray[i];
            maxIndex = i;
        }
    }
    // console.log(maxIndex);
    return maxIndex;
}

function incrementIndex(memoryBanks, index) {
    // console.log(`index: ${index}, memoryBankslen: ${memoryBanks.length}`);
    if (index >= memoryBanks.length - 1) {
        index = 0;
    } else {
        index++;
    }
    return index;
}

function distribute(memoryBanks, index) {
    // console.log(memoryBanks);
    let blocksToDistribute = memoryBanks[index];
    // console.log(`blockstodistribute ${blocksToDistribute}`);
    memoryBanks[index] = 0;
    let currentIndex = incrementIndex(memoryBanks, index);
    for (let i = 0; i < blocksToDistribute; i++) {
        // console.log(memoryBanks);
        // console.log(currentIndex);
        memoryBanks[currentIndex]++;
        currentIndex = incrementIndex(memoryBanks, currentIndex);
    }
    return memoryBanks;
}

function checkIfAlreadySeen(currentMemoryBank, allMemoryBanks) {
    for (let i = 0; i < allMemoryBanks.length; i++) {
        let count = 0;
        for (let j = 0; j < currentMemoryBank.length; j++) {
            if (allMemoryBanks[i][j] !== currentMemoryBank[j]) {
                break;
            } else if (allMemoryBanks[i][j] === currentMemoryBank[j]) {
                count++;
            }
        }
        if (count === currentMemoryBank.length) {
            return true;
        }
    }

    return false;
}

let storedMemoryBanks = [];
let cycles = 0;

while (true) {
    // console.log(memoryBanks);
    // console.log(storedMemoryBanks);
    storedMemoryBanks.push(memoryBanks.slice());
    // console.log(storedMemoryBanks);
    memoryBanks = distribute(memoryBanks, getMaxIndex(memoryBanks));
    // console.log(storedMemoryBanks);
    // console.log(memoryBanks);
    cycles++;
    if (checkIfAlreadySeen(memoryBanks, storedMemoryBanks) === true) {
        console.log(cycles);
        break;
    }
}