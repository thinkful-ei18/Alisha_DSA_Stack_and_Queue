'use strict';

const Queue = require('./Queue');
const { peek, display } = require('./supplementalQFunctions');


const starTrekQ = () => {
  const queue = new Queue();

  queue.enqueue('Kirk');
  queue.enqueue('Spock');
  queue.enqueue('Uhura');
  queue.enqueue('Sulu');
  queue.enqueue('Checkov');

  // return peek(queue);

  queue.dequeue('Kirk');
  queue.dequeue('Spock');

  return display(queue);

};

console.log(starTrekQ());
