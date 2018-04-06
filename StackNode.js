'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next; // node underneath the current one
  }
}

module.exports = _Node;