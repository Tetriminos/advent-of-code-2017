const _ = require('lodash');

let coordinateDictionary = {};

// coordinateDictionary['1'] = {x: 0, y: 0};
// coordinateDictionary['2'] = {x: 0, y: 1};
// coordinateDictionary['3'] = {x: 1, y: 0};
// coordinateDictionary['4'] = {x: 1, y: 1};

let input = 100;

coordinateDictionary['1'] = {x: 0, y: 0};
coordinateDictionary['1_'] = {x: 1, y: 0};

let createCoordinateSystem = (number) => {
    let methodCounter = 1;
    let howManySteps = 1;
    let stepSwitch = true;
    let currentNumber = 0;
    let x = 1;
    let y = 0;
    for (let i = 3; i <= number;) {
        switch(methodCounter) {
            case 0:
                for (let j = 0; j < howManySteps && i <= number; j++) {
                    x++;
                    currentNumber = addAllNeighbours(x, y);
                    if (currentNumber > 265149) console.log(currentNumber);
                    coordinateDictionary[currentNumber.toString()] = {'x': x, 'y': y};
                    i++;
                }
                if (stepSwitch === true) {
                    howManySteps++;
                    stepSwitch = false;
                } else {
                    stepSwitch = true;
                }
                methodCounter = nextMethod(methodCounter);
                break;
            case 1:
                for (let j = 0; j < howManySteps && i <= number; j++) {
                    y++;
                    currentNumber = addAllNeighbours(x, y);
                    if (currentNumber > 265149) console.log(currentNumber);
                    coordinateDictionary[currentNumber.toString()] = {'x': x, 'y': y};
                    i++;
                }
                if (stepSwitch === true) {
                    howManySteps++;
                    stepSwitch = false;
                } else {
                    stepSwitch = true;
                }
                methodCounter = nextMethod(methodCounter);
                break;
            case 2:
                for (let j = 0; j < howManySteps && i <= number; j++) {
                    x--;
                    currentNumber = addAllNeighbours(x, y);
                    if (currentNumber > 265149) console.log(currentNumber);
                    coordinateDictionary[currentNumber.toString()] = {'x': x, 'y': y};
                    i++;
                }
                if (stepSwitch === true) {
                    howManySteps++;
                    stepSwitch = false;
                } else {
                    stepSwitch = true;
                }
                methodCounter = nextMethod(methodCounter);
                break;
            case 3:
                for (let j = 0; j < howManySteps && i <= number; j++) {
                    y--;
                    currentNumber = addAllNeighbours(x, y);
                    if (currentNumber > 265149) console.log(currentNumber);
                    coordinateDictionary[currentNumber.toString()] = {'x': x, 'y': y};
                    i++;
                }
                if (stepSwitch === true) {
                    howManySteps++;
                    stepSwitch = false;
                } else {
                    stepSwitch = true;
                }
                methodCounter = nextMethod(methodCounter);
                break;
        }
    }
};

let nextMethod = (pMethodCounter) => {
    if (pMethodCounter === 3) {
        pMethodCounter = 0;
    } else {
        pMethodCounter++;
    }

    return pMethodCounter;
};

let addNeighbour = (neighbourX, neighbourY) => {
    let key = _.findKey(coordinateDictionary, {'x': neighbourX, 'y': neighbourY});
    if (key !== undefined) {
        return parseInt(key);
    } else if (key === '1_') {
        return 1;
    } else {
        return 0;
    }
};

let addAllNeighbours = (currentX, currentY) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            sum += addNeighbour(currentX + i, currentY + j);
        }
    }
    return sum;
};

createCoordinateSystem(input);

// console.log(coordinateDictionary);
