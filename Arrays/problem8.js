// Process Odd Positions
// You are given an array of numbers. 
// Write a JS function that return the elements at odd positions from the array, doubled and in reverse order.
// The input comes as array of number elements.
// The output is return on the console on a single line, separated by space.

function returnElementsAtOddsPostions(arr) {
    let foundedElements = arr.map((x) => x * 2).filter(function(arr, ind){
        return ind % 2 == 1;
    });
    return foundedElements.reverse();
}

console.log(returnElementsAtOddsPostions([10, 15, 20, 25]));
console.log(returnElementsAtOddsPostions([3, 0, 10, 4, 7, 3]));