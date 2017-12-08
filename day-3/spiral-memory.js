const _ = require('lodash');

let coordinateDictionary = {};

// coordinateDictionary['1'] = {x: 0, y: 0};
// coordinateDictionary['2'] = {x: 0, y: 1};
// coordinateDictionary['3'] = {x: 1, y: 0};
// coordinateDictionary['4'] = {x: 1, y: 1};

let input = 23;

coordinateDictionary['1'] = {x: 0, y: 0};

let createCoordinateSystem = (number) => {
    let methodCounter = 0;
    let howManySteps = 1;
    let stepSwitch = false;
    let x = 0;
    let y = 0;
    for (let i = 2; i <= number;) {
        switch(methodCounter) {
            case 0:
                for (let j = 0; j < howManySteps && i <= number; j++) {
                    x++;
                    coordinateDictionary[i.toString()] = {'x': x, 'y': y};
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
                    coordinateDictionary[i.toString()] = {'x': x, 'y': y};
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
                    coordinateDictionary[i.toString()] = {'x': x, 'y': y};
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
                    coordinateDictionary[i.toString()] = {'x': x, 'y': y};
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

createCoordinateSystem(input);

console.log(coordinateDictionary);

console.log(coordinateDictionary['23']);