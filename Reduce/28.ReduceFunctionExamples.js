"use strict";

const products = [{ price: 300 }, { price: 400 }, { price: 200 }];
// Calculate the sum of products.

const productsCost = products.reduce((acc, curr, index) => {
    console.log("Acc", acc, "Curr", curr, "Index", index);
    return acc + curr.price;
}, 0);

console.log("Sum of All Products", productsCost);
