'use strict';

const Queue = require('./Queue');


const starTrekQ = () => {
  const queue = new Queue();

  queue.enqueue('Kirk');
  queue.enqueue('Spock');
  queue.enqueue('Uhura');
  queue.enqueue('Sulu');
  queue.enqueue('Checkov');

  return queue;

};

console.log(starTrekQ());
