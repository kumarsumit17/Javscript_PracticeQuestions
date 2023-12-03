"use strict";
const arr = [
    ["apple", "orange"],
    ["London", "UK"],
    [1, 2, 3]
];

const flatArray = arr.reduce((acc, curr, index) => {
    console.log("Acc", acc, "Curr", curr, "Index", index);
    return acc.concat(curr);
}, []);

console.log("Flatten Nested Array: ", JSON.stringify(flatArray));
