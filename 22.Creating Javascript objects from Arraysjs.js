"use strict";
// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
function myFunction(a, b) {
    let obj = {};
    // In this code, a for loop is used to iterate over one of the arrays (a), and for each element in a, a key-value pair is added to the object obj where the key is the current element from a, and the value is the corresponding element from b.

    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = b[i];
    }

    return obj;
}

// Test Cases
console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
// Expected Output: { a: 1, b: 2, c: 3 }

console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
// Expected Output: { w: 10, x: 9, y: 5, z: 2 }

console.log(myFunction([1, "b"], ["a", 2]));
// Expected Output: { 1: 'a', b: 2 }
