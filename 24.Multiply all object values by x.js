"use strict";

function myFunction(a, b) {
    // In this code, multipliedObject is created by iterating over the properties of the input object a. The values are multiplied by the number b, and the result is stored in the multipliedObject
    const multipliedObject = {};
    // Iterate over object properties
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            multipliedObject[key] = a[key] * b;
        }
    }
    return multipliedObject;
}

// Test Cases
console.log(myFunction({ a: 1, b: 2, c: 3 }, 3));
// Expected Output: {a: 3, b: 6, c: 9}

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10));
// Expected Output: {j: 90, i: 20, x: 30, z: 40}

console.log(myFunction({ w: 15, x: 22, y: 13 }, 6));
// Expected Output: {w: 90, x: 132, y: 78}
