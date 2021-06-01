let myFamily = ['Elena', 'Georgi', 'Michail'];
console.log(myFamily);
console.log('*******************');
console.log('*******************');
console.log('*******************');
//destructuring an array
let [myWife, Kid1, Kid2] = myFamily;
console.log('*******************');
console.log('*******************');
console.log('*******************');
//print each element on new line
console.log(`myWife,
Kid1, 
Kid2`);

console.log(myWife);
console.log('*******************');
console.log('*******************');
console.log('*******************');
//using REST operator
let [wife, ...kids] = myFamily;
console.log(kids);
console.log(wife);

//using spread operator
let myFamily2 = [...myFamily];
myFamily2[myFamily2.length] = 'dog';
console.log(myFamily2);
console.log(myFamily);


//using mutating methods pop(), push(), shift(), unshift(), reverse(), sort() /(a,b) => (a-b). (a, b) => a.localeCompare(b) /
//pop()
theLastFamalyMember = myFamily2.pop();
console.log(theLastFamalyMember);
console.log(myFamily2);

//push()
let newDog = 'Puppy';

myFamily2.push(newDog);
console.log(myFamily2);

// newDog = 'Puppy';
console.log(myFamily2);


//Accesors methods - methods that not mutate arrays
//join(), concat(), slice(), include(), indexOf()

//1.join()

myFamily = ['Elena', 'Georgi', 'Michail'];
console.log(myFamily);
console.log(myFamily.join());
console.log(myFamily.join(''));
console.log(myFamily.join(', '));
console.log(myFamily.join('-'));
console.log(myFamily.join('.'));


//2.concat()
let myRlatievs = ['Cvetanka', 'Simeonka', 'Nikolai', 'Vesela', 'Anjela', 'Teodora', 'Simona'];
let myAllFamily = myFamily.concat(myRlatievs);
console.log(myAllFamily);
console.log(myFamily);

//3.slice() - create a new array without change his parent array
let myNewFamily = myAllFamily.slice(0, 3);
console.log(myNewFamily);

//4.include()

if (myAllFamily.includes('dog')) {
    console.log('Super')
}else {
    console.log('Miss me')
}

//5.indexOf()
console.log(myAllFamily.indexOf('Georgi'));


//iteration method - forEach(), some(), find(), filter(),