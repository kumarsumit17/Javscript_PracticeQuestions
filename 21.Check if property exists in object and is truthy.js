"use strict";
// Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.

function myFunction(a, b) {
    // obj.hasOwnProperty(key): This part checks if the object obj has a property with the key specified by the variable key. It returns true if the property exists and false otherwise.

    // Boolean(obj[key]): This part checks if the value associated with the specified key in the object is truthy. The Boolean function is used to convert the value to a boolean. It returns true if the value is truthy and false otherwise.
    return a.hasOwnProperty(b) && Boolean(a[b]);
}

// Test Cases:
// Attempted: 61184
// Solved: 12355
// myFunction({a:1,b:2,c:3},'b')
// Expected
// true
// myFunction({x:'a',y:null,z:'c'},'y')
// Expected
// false
// myFunction({x:'a',b:'b',z:undefined},'z')
// Expected
// false

// Test Cases
const obj1 = { a: 1, b: "hello", c: true };
console.log(myFunction(obj1, "b")); // true

const obj2 = { x: null, y: false, z: "world" };
console.log(myFunction(obj2, "x")); // false
