'use strict';

const Stack = require('./Stack');
const stack = new Stack();

/*
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect.

For version 1, the parentheses you need to consider are ( and ). Finding a closed parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize two types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.
*/

const parentheses = parens => {
  // add to stack on '('
  // remove from stack on ')'

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    } else if (parens[i] === ')') {
      stack.pop();
    }
  }

  return stack.top ? 'error' : 'success';

};

console.log(JSON.stringify(parentheses('(3+5)'))); // version 1, equal parens
