// Looping
const items = [1, 2, 3, 4, 5, 6];

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// Bad Code || Good Code
function getAllEvens(items) {
    // const result = [];
    // for (let i = 0; i < items.length; i++) {
    //     if (items[i] % 2 === 0) {
    //         result.push(items[i]);
    //     }
    // }
    // return result;
    return items.filter((num) => num % 2 === 0);
}

function multiplyByFour(items) {
    // const result = [];
    // for (let i = 0; i < items.length; i++) {
    //     result.push(items[i] * 4);
    // }
    // return result;
    return items.map((item) => item * 4);
}

function sumArray(items) {
    // let sum = 0;
    // for (let i = 0; i < items.length; i++) {
    //     sum += items[i];
    // }
    // return sum;
    return items.reduce((a, b) => a + b, 0);
}

// Good Code
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// Good Code
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
console.log(result);
