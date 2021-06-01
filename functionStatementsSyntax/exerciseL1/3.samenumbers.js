// Same Numbers
// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function checkEqualityOfDigitsInNumber(numb) {
    let newNumb = numb.toString();
    let n = newNumb.length;
    let sumOfDigits = 0;
    while (n > 0) {

        for (let i = 0; i < newNumb.length; i++) {
            sumOfDigits += Number(newNumb[i]);
            n -= 1;
            if (n == 0) {
                console.log(true);
                console.log(sumOfDigits);
                break;
            }
            if (newNumb[i] == newNumb[i + 1]) {
                continue;
            }
            if (newNumb[i] != newNumb[i + 1]) {
                console.log(false);
                sum = 0;

                while (numb) {
                    sum += numb % 10;
                    numb = Math.floor(numb / 10);
                }

                console.log(sum);
                n = 0;
                break;

            }

        }

    }

}

checkDigitsInNumber(2222222);
// checkDigitsInNumber(233222);
