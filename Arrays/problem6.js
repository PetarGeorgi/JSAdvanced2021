// Bigger Half
// You are given an array of numbers. Write a JS function that sorts the array in ascending order and returns a new array, containing only the second half of the input. 
//If there are an odd number of elements in the input, always take the bigger half. For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – the output is 3.
// The input comes as array of number elements.
// The output is the return value of the function and should be an array of numbers.

function takeTheBiggerHalf (arr) {
    let sortedArray = arr.sort((a, b) => a - b)
    if (sortedArray.length % 2 == 0) {
        return sortedArray.slice(sortedArray.length/2, sortedArray.length);
    } else {
        return sortedArray.slice(sortedArray.length/2, sortedArray.length);
    }
}

console.log(takeTheBiggerHalf([4, 7, 2, 5]));
console.log(takeTheBiggerHalf([3, 19, 14, 7, 2, 19, 6]));


