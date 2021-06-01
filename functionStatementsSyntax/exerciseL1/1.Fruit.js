// Write a function that calculates how much money you need to buy fruit.
//  You will receive a string for the type of fruit you want to buy, a number for weight in grams and another number for the price per kilogram. 

function printParam(fruit, weight, price) {
    weightKg = weight/1000
    console.log(`I need $${Number(price * weightKg).toFixed(2)} to buy ${Number(weightKg).toFixed(2)} kilograms ${fruit}.`)
}

printParam('orange', 2500, 1.80);
printParam('apple', 1563, 2.35);