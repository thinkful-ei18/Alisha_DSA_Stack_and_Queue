'use strict';

const Queue = require('./Queue');
const queue = new Queue();

// Implement a peek() function outside to Queue class that lets you take a peek at what's the first item in the queue
const peek = queue => {
  return queue.head.value;
};


// Implement a display() function outside the Queue class that lets you display what's in the queue.
const display = queue => {
  return queue.head;
};

module.exports = { peek, display };
