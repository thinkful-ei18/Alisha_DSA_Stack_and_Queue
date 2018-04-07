'use strict';


class _Node {
  constructor(value) {
    this.value = value,
    this.prev = null, // item to the left
    this.next = null; // item to the right
  }
}

module.exports = _Node;