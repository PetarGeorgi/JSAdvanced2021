// ⦁	Echo Function
// Write a JS function that takes one string parameter and prints on two lines the length of the parameter and then the unchanged parameter itself.

function solve(input) {
    let lenghtOfTheString = input.length
    console.log( lenghtOfTheString);
    console.log(input);
}

solve('Hello, JavaScript!');