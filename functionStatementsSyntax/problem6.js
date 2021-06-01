// ⦁	Sum of Numbers N…M
// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
// The input comes as two string elements that need to be parsed as numbers.
// The output should return the sum.

function sumOfNumbers(n, m) {
   let result = 0;
   let num1 = Number(n);
   let num2 = Number(m);

   for (let i = num1 ; i <= num2 ; i++) {
        result += i;
   }

   return result;

}

console.log(sumOfNumbers('1', '5' ));
