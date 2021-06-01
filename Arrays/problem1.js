// Even Position Element
// Write a function that finds the elements at even positions in an array.
// The input comes as array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

function findsElementsAtEvenPosition(arr) {
    let result = " ";
    for (let i = 0; i < arr.length; i++) {
        if ( i % 2 == 0 ) {
            result += ` ${arr[i]}`;
      }
    }
    console.log(result);
}


findsElementsAtEvenPosition(['20', '30', '40', '50', '60']);
