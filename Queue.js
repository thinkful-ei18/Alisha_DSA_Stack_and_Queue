'use strict';

const Node = require('./QueueNode');


// first in, first out

class Queue {
  constructor() {
    this.first = null; // farthest left
    this.last = null; // farthest right
  }

  /* =============================
  INSERT
  ============================= */

  enqueue(data) {
    //create a node with the data that you want to add to the queue
    const node = new Node(data);

    // if the queue is empty 
    if (this.first === null) { 
      this.first = node; 
    }

    // if there is something in the queue...
    if (this.first.next === null) {
      this.first.next = node;
      node.prev = this.first;
    } 
    else {
      this.last.next = node;
      node.prev = this.last; 
    }

    // no matter what, the new node will become this.last
    this.last = node;

  }


  /* =============================
  REMOVE
  ============================= */

  dequeue() { // no need for an arg, it will only pull from this.first
    
    let removedNode;

    // if the queue is empty, exit the function
    if (this.first === null) {
      return;
    }

    // if there's only one item in the queue, set first/last back to null and return that item 
    if (this.first.next === null) {
      removedNode = this.first;
      this.first = null;
      this.last = null;
      return removedNode.value;
    }

    // if there are multiple items in queue, make this.first point to the 2nd item in the list && return the item
    removedNode = this.first;
    this.first = this.first.next; 
    return removedNode.value;

  }

}

module.exports = Queue;