// ⦁	String Length
// Write a JS function that takes three string arguments as an input. 

// Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console on two lines.

function solve(one, two, three) {
    let calcSumOfTheArguments = Number(one.length) + Number(two.length) + Number(three.length)
    let calcAvarageLength = Number(calcSumOfTheArguments) / 3

    console.log(calcSumOfTheArguments);
    console.log(Math.floor(calcAvarageLength));
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');