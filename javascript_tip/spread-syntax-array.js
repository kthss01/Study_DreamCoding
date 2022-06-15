// Spread Syntax - Array
let fruits = ["apple", "banana", "orange"];

//fruits.push("grape");
fruits = [...fruits, "grape"];

//fruits.unshift("grape");
fruits = ["grape", ...fruits];

const fruits2 = ["tomato"];
let combined = fruits.concat(fruits2);

combined = [...fruits, "cherry", ...fruits2];
