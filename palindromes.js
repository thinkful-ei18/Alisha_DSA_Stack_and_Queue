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

  /******* THIS VERSION CHECKS THE FIRST HALF OF THE STRING VS THE TOP HALF OF THE STACK(top half of stack = 2nd half of string) *******/
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== stack.pop()) { // if the first letter in the string != the top letter in the stack
      return false; 
      // as soon as you find one set of letter's that don't match, the string is not a palindrome
    }
  }

  return true; 
  // if we make it through the first half of the str w/o hitting a false, the str is a palindrome



  /******* THIS VERSION CHECKS THE ENTIRE STRING VS THE ENTIRE STACK *******/
  // for (let i=0; i<str.length; i++) {
  //   stack.push(str[i]);
  // }

  // let stackToString = '';

  // for (let i=0; i<str.length; i++) {
  //   stackToString += stack.pop();
  // }

  // return str === stackToString;

};

console.log(JSON.stringify(is_palindrome('hello')));

// console.log(JSON.stringify(is_palindrome('dad')));
console.log(JSON.stringify(is_palindrome('A man, a plan, a canal: Panama')));
// console.log(JSON.stringify(is_palindrome('1001')));
