// ⦁	Largest Number
// Write a function that takes three number arguments as an input and find the largest of them. Print the following text on the console:  'The largest number is {number}.'.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.

function solve(x, y, z) {
    if (x > y && x > z) {
        console.log(`The largest number is ${x}.`);
    } else if (y > x && y > z) {
        console.log(`The largest number is ${y}.`);
    } else {
        console.log(`The largest number is ${z}.`);
    } 
}

solve(5, -3, 16);
solve(-3, -5, -22.5);