// Smallest Two Numbers
// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.

function prints2SmallestElements(arr) {
    let sortedArray = arr.sort((a,b) => a-b );
    let result = sortedArray.slice(0,2);
    console.log(result.join(' '));
}

prints2SmallestElements([30, 15, 50, 5]);
prints2SmallestElements([3, 0, 10, 4, 7, 3]);