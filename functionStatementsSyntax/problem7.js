// ⦁	Day of Week
// Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
// The input comes as a single string argument.
// The output should be returned as a result.

function printDayOfTheWeek(day) {
    let result = '';
    if (day == 'Monday' || day == 'Tuesday' || day == 'Wendesday' || day == 'Thursday' || day == 'Friday' || day == 'Saturday' || day == 'Sunday') {
        switch (day) {
            case 'Monday': result = 1; break;
            case 'Tuesday': result = 2; break;
            case 'Wendesday': result = 3; break;
            case 'Thursday': result = 4; break;
            case 'Friday': result = 5; break;
            case 'Saturday': result = 6; break;
            case 'Sunday': result = 7; break;
        }
        console.log(result);
    } else {
        console.log('error')
    }
}

printDayOfTheWeek('Monday');
printDayOfTheWeek('Tuesday');
printDayOfTheWeek('JS');