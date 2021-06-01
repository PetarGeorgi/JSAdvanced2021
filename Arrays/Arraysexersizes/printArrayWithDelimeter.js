// Print an Array with a Given Delimiter
// The input comes as two parameters – an array of strings and a string.
// The second parameter is the delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others by the given delimiter.


function printArrayWithGivenDelimeter(arr, delimeter) {
    let joinedArray = arr.join(delimeter);
    return joinedArray;
}

console.log(printArrayWithGivenDelimeter(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'));
console.log(printArrayWithGivenDelimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'));