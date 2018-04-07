'use strict';

const Node = require('./QueueNode');


// first in, first out

class Queue {
  constructor() {
    this.head = null; // farthest left
    this.tail = null; // farthest right
  }

  /* =============================
  INSERT
  ============================= */

  enqueue(data) {
    //create a node with the data that you want to add to the queue
    const node = new Node(data);

    // if the queue is empty 
    if (this.head === null) { 
      this.head = node; 
    }

    // if there is something in the queue...
    if (this.head.next === null) {
      this.head.next = node;
      node.prev = this.head;
    } 
    else {
      this.tail.next = node;
      node.prev = this.tail; 
    }

    // no matter what, the new node will become this.tail
    this.tail = node;

  }


  /* =============================
  REMOVE
  ============================= */

  dequeue() { // no need for an arg, it will only pull from this.head
    
    let removedNode;

    // if the queue is empty
    if (this.head === null) {
      return;
    }

    // if there's only one item in the queue
    if (this.head.next === null) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
      return removedNode.value;
    }

    // if there are multiple items in queue
    removedNode = this.head;
    this.head = this.head.next; 
    this.head.prev = null;
    return removedNode.value;
  }

}

module.exports = Queue;