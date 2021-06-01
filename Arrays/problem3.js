// Sum First Last
// Write a function that calculates and return the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function and should be a number.

function sumOfTheFirstAndLastElement(arr) {
    let firtsElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);
    let sumOfThe2Elements = firtsElement + lastElement;

    return sumOfThe2Elements;
}

console.log(sumOfTheFirstAndLastElement(['20', '30', '40']));
console.log(sumOfTheFirstAndLastElement(['5', '10']));
