const assert = require("assert");
const fs = require("fs");

const exampleInput1 = "ne,ne,ne";
const expectedOutput1 = 3;

const exampleInput2 = "ne,ne,sw,sw";
const expectedOutput2 = 0;

const exampleInput3 = "ne,ne,s,s";
const expectedOutput3 = 2;

const exampleInput4 = "se,sw,se,sw,sw";
const expectedOutput4 = 3;

// const solve = input => {
//   const splitInput = input.split(",");
//   let x = 0;
//   let y = 0;

//   for (let direction of splitInput) {
//     switch (direction) {
//       case "n":
//         y++;
//         break;
//       case "s":
//         y--;
//         break;
//       case "ne":
//         x++;
//         if (x % 2 === 1) {
//           y++;
//         }
//         break;
//       case "se":
//         x++;
//         if (x % 2 === 0) {
//           y--;
//         }
//         break;
//       case "nw":
//         x--;
//         if (x % 2 === 1) {
//           y++;
//         }
//         break;
//       case "sw":
//         x--;
//         if (x % 2 === 0) {
//           y--;
//         }
//         break;
//     }
//     // console.log(`x: ${x}, y: ${y}`);
//   }
//   // if (x % 2 === 1) {
//   //   y--;
//   // }

//   console.log(`x: ${x}, y: ${y}`);

//   // return (
//   //   Math.abs(Math.abs(x) - Math.abs(y)) +
//   //   (Math.abs(x) > Math.abs(y) ? Math.abs(x) : Math.abs(y)) -
//   //   (Math.abs(x) % 2 === 1 ? 1 : 0)
//   // );
//   let steps = 0;

//   while (x !== 0 || y !== 0) {
//     if (x === 0) {
//       steps += Math.abs(y);
//       break;
//     }
//     if (y === 0) {
//       steps += Math.abs(x);
//       break;
//     }
//     if (x > 0 && y >= 0) {
//       if (Math.abs(x) % 2 === 1) {
//         x--;
//         y--;
//       } else {
//         x--;
//       }
//       steps++;
//     } else if (x > 0 && y < 0) {
//       if (Math.abs(x) % 2 === 1) {
//         x--;
//       } else {
//         x--;
//         y++;
//       }
//       steps++;
//     } else if (x < 0 && y >= 0) {
//       if (Math.abs(x) % 2 === 1) {
//         x++;
//         y--;
//       } else {
//         x++;
//       }
//       steps++;
//     } else if (x < 0 && y < 0) {
//       if (Math.abs(x) % 2 === 1) {
//         x++;
//       } else {
//         x++;
//         y++;
//       }
//       steps++;
//     }
//   }

//   console.log(steps);
//   return steps;
// };

const solve = input => {
  const splitInput = input.split(",");
  const directions = {};
  for (const direction of splitInput) {
    if (!directions[direction]) {
      directions[direction] = 1;
    } else {
      directions[direction]++;
    }
  }
  
};

// assert.equal(solve(exampleInput1), expectedOutput1);
// assert.equal(solve(exampleInput2), expectedOutput2);
// assert.equal(solve(exampleInput3), expectedOutput3);
// assert.equal(solve(exampleInput4), expectedOutput4);

const input = fs.readFileSync("./input1.txt").toString();

solve(input);
