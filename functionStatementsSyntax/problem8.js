// ⦁	Square of Stars
// Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
// The input comes as a single number argument.
// The output is a series of lines printed on the console, forming a rectangle of variable size

function drawSquer(input) {
    let result = '';
    if (input == 1 || input == 2 || input == 3 || input == 4 || input == 5 ) {
        for (i = 0; input > i ; i++) {
            
            for (let j = 0; j < input; j++) {
              
                result += '* ';
                
                }
            console.log(`${result}`);
            result = '';
        }
        
       
    }else {
        for (i = 0; 5 > i ; i++) {
            
            for (let j = 0; j < 5; j++) {
              
                result += '* ';
                
                }
            console.log(`${result}`)
            result = '';
        }
    }
}

drawSquer(null);