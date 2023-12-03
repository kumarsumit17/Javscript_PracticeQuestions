"use strict";
const list = [9, 8, 7, 6];
// Calculate the sum of the list using reduce

const sum = list.reduce((acc, curr, index) => {
    console.log("Acc", acc, "Curr", curr, "Index", index);
    return acc + curr;
}, 0);

console.log("Sum of list: ", sum);
