"use strict";
function myFunction(a, b) {
    // concat the both arrays first and then form a Set with the help of concatenated Arrays and then run a sort function on these two arrays.
    let mergedArray = Array.from(new Set(a.concat(b))).sort((a, b) => a - b);
    return mergedArray;
}

// Test Cases
console.log(myFunction([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); // [-11, -10, 5, 22, 41, 42, 333]
