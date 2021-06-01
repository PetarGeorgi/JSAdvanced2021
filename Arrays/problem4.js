// Negative / Positive Numbers
// Write a JS function that processes the elements in an array one by one and produces a new array.
//  Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
// The input comes as array of number elements.
// The output is printed on the console, each element on a new line

function arrangeTheElemnts(arr) {
    let newArrangedArray = [];
    for(const element of arr) {
        if (element < 0) {
            newArrangedArray.unshift(element);
        }else {
            newArrangedArray.push(element);
        }
    } 

    for (const element of newArrangedArray) {
        console.log(element);
    }
}

arrangeTheElemnts([7, -2, 8, 9]);
arrangeTheElemnts([3, -2, 0, -1]);
