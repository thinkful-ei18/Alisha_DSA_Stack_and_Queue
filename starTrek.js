'use strict';

const Stack = require('./Stack');
const supplementalFunctions = require('./supplementalFunctions');

const stack = new Stack();


const starTrek = () => {
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');

  // return stack;

  // return supplementalFunctions.peek(stack);
 
  // return supplementalFunctions.display(stack);
};


// console.log(JSON.stringify(starTrek()));
// console.log('peek:', JSON.stringify(starTrek()));
console.log('display:', JSON.stringify(starTrek()));