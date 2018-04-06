'use strict';
const Stack = require('./Stack');
const stack = new Stack();

/*
A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; 
“A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a 
numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template 
as a starting point.
*/

const is_palindrome = str => {
  // put the str in a stack
  // remove that str from the stack one by one
  // see if the two variables === 

  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  for (let i=0; i<str.length; i++) {
    stack.push(str[i]);
  }
  
  let stackToString = '';

  for (let i = 0; i < str.length; i++) {
    stackToString += stack.pop();
  }

  return str === stackToString;

};

// console.log(JSON.stringify(is_palindrome('hello')));

console.log(JSON.stringify(is_palindrome('dad')));
console.log(JSON.stringify(is_palindrome('A man, a plan, a canal: Panama')));
console.log(JSON.stringify(is_palindrome('1001')));
console.log(JSON.stringify(is_palindrome('Tauhida')));