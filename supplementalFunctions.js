'use strict';

const Stack = require('./Stack');
const stack = new Stack();

// peek: allows you to look at the top of the stack without removing it
const peek = stack => {
  return stack.top.data;
};

// display: to display the stack. What is the first item in your stack?
const display = stack => {
  return stack.top;
};

module.exports = { peek, display};
