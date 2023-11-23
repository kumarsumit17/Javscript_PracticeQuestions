"use strict";
function myFunction(...arrays) {
    // here we destructure all the arrays.
    return [].concat(...arrays);
}

// Test Cases
console.log(myFunction([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(myFunction(["a", "b", "c"], [4, 5, 6])); // ['a', 'b', 'c', 4, 5, 6]
console.log(myFunction([true, true], [1, 2], ["a", "b"])); // [true, true, 1, 2, 'a', 'b']
