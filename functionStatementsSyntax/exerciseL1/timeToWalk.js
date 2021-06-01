// Time to Walk
// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// The first is the number of steps the student takes from their home to the university
// Тhe second number is the length of the student's footprint in meters
// Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1 minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
// The input comes as three numbers.
// The output should be printed on the console.

function timeToWalk(numberOfSteps, lengthOfTheFootprint, speed) {
    let distanceM = numberOfSteps * lengthOfTheFootprint
    console.log(distanceM)
    let distanceKm = distanceM / 1000;
    console.log(distanceKm);
    let minutesBreak = (distanceM / 500);
    let t = distanceKm / speed;
    console.log(t - minutesBreak / 60);
}

timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);