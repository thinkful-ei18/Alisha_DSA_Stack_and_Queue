'use strict';

const Stack = require('./Stack');

/*
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns the position in the expression where a parenthesis is missing or incorrect.

For version 1, the parentheses you need to consider are ( and ). Finding a closed parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

Extension extension exercise: Also recognize two types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.
*/

const parentheses = parens => {
  // add to stack on '('
  // remove from stack on ')'

  const stack = new Stack();

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push({ character: parens[i], index: `${i}` });
    } else if (parens[i] === ')') {
      let compare = stack.top ? stack.pop() : null;
      // if there's a node in the stack, set its value to compare
      // if the stack is empty, return null

      if (compare === null || '(' !== compare.character) {
        return `There is an additional ')' at index: ${i}`;
      }
    }
  }

  return stack.top ? `There is an additional '${stack.top.data.character}' at index ${stack.top.data.index}` : 'success';

};

// console.log('equal:', JSON.stringify(parentheses('(3+5)'))); // version 1, equal parens
// console.log('**(:', JSON.stringify(parentheses('(()'))); // version 1, 1 more open parens
// console.log('**):', JSON.stringify(parentheses('())'))); // version 1, 1 more closed parens





/* =============================
  EXTENSION EXERCISE

Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!
============================= */

const parser = str => {
  // if str[i] is a brackets.key, add to the stack
  // if str[i] is a brackets.value remove from the stack IF stack.top equals corresponding bracket.key
  // if stack.top is null OR another bracket.key, throw an error
  // if you get to the end && the stack is empty, success!

  const stack = new Stack();

  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const keys = Object.keys(brackets); // keys: [ '(', '[', '{' ]
  const values = Object.values(brackets); // values: [ ')', ']', '}' ]
  
  for (let i = 0; i < str.length; i++) {
    if (keys.includes(str[i])) {
      stack.push(str[i]);
    }
    else if (values.includes(str[i])) {
      if (stack.top !== null && keys.indexOf(stack.top.data) === values.indexOf(str[i])) {
        stack.pop();
      }
      else if (stack.top === null) {
        return `There is an extra '${str[i]}' bracket in this string!`;
      }
      else {
        return `'${stack.top.data}' does not match '${str[i]}'`;
      }
    }
  }

  return stack.top ? 'Something has gone wrong...' : 'All brackets are accounted for!';

};


console.log('GOOD:', JSON.stringify(parser('()[]{}')));
console.log('EXTRA:', JSON.stringify(parser('[](){})')));
console.log('BAD:', JSON.stringify(parser('(]{)[}')));
