'use strict';

const Node = require('./StackNode');


// first in, last out
// the next prop refers to the node underneath the current node

class Stack {
  constructor() {
    this.top = null;
  }

  /* =============================
  INSERT
  ============================= */

  push(data) {

    const node = new Node(data, this.top); // create a new node
    this.top = node; // assign this.top to be that new node
  }


  /* =============================
  REMOVE
  ============================= */

  pop() {

    if (!this.top) throw new Error('This stack is empty');
    
    const removedNode = this.top; // find the top of the stack
    this.top = removedNode.next; // set this.top to be the removedNode that's 2nd to the top
    return removedNode.data; // return the removedNode that was removed
  }

}

module.exports = Stack;