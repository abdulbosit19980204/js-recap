"use strict"

let startNumber = 1;

// First method ** while(){} **

// while (startNumber < 100) {
//     console.log(startNumber);
//     startNumber++;
// };

//Second do while method

do {
    console.log(startNumber);
    startNumber++;
} while (startNumber <= 20)

// third method for(){}
for (let i = 1; i <= 8; i++) {
    if (i === 5) { break } else
        console.log(i);
}