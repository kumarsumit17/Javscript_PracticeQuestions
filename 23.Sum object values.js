"use strict";
// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(obj) {
    // In this code, Object.values(obj) gets an array of the object values, and reduce is used to calculate the sum of these values. The 0 at the end of the reduce function is the initial value of the sum.
    return Object.values(obj).reduce((sum, value) => sum + value, 0);
}

// Test Cases
console.log(myFunction({ a: 1, b: 2, c: 3 }));
// Expected Output: 6

console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }));
// Expected Output: 18

console.log(myFunction({ w: 15, x: 22, y: 13 }));
// Expected Output: 50
