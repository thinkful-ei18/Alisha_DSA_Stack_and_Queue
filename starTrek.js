'use strict';

const Stack = require('./Stack');
const stack = new Stack();

const starTrek = () => {
  stack.push('Kirk');
  stack.push('Spock');
  stack.push('McCoy');
  stack.push('Scotty');
 
  return stack;
};

console.log(JSON.stringify(starTrek()));