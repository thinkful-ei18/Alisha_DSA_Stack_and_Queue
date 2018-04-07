'use strict';

const Queue = require('./Queue');
const { display } = require('./supplementalQFunctions');

/*
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.
*/

let dancers = new Queue();

const DANCERS = [
  { name: 'Beyonce Knowles', gender: 'female' },
  { name: 'Jay-Z', gender: 'male' },
  { name: 'Michelle Obama', gender: 'female' },
  { name: 'Vivica Fox', gender: 'female' },
  { name: 'Halle Berry', gender: 'female' },
  { name: 'Barack Obama', gender: 'male' },
  { name: 'Gabrielle Union', gender: 'female' },
  { name: 'Dwayne Johnson', gender: 'male' },
];

DANCERS.map(dancer => dancers.enqueue(dancer));

const squareDance = queue => {
  let pairs = new Queue;
  let spares = new Queue;

  pairs.enqueue(dancers.dequeue());

  // if the two genders match, add to spares
  // if the two genders != and spares is empty, add that dancer to pairs
  // if the two genders != and spares head is a diff gender, add the dancer to pairs
  // if the two genders != and spares head is the same gender, add the spare to pairs and the dancer to spares
  
  while (dancers.head !== null) {
    console.log(dancers.head.value.gender);
    
    if (pairs.tail.value.gender === dancers.head.value.gender) {
      spares.enqueue(dancers.dequeue());
      console.log('spares');
    }
    else if ((pairs.tail.value.gender !== dancers.head.value.gender) && !spares.head) {
      pairs.enqueue(dancers.dequeue());
      console.log('pair dancer 1');
    }
    else if ((pairs.tail.value.gender !== dancers.head.value.gender) && (spares.head.value.gender !== dancers.head.value.gender)) {
      pairs.enqueue(dancers.dequeue());
      console.log('pair dancer 2');
    }
    else if ((pairs.tail.value.gender !== dancers.head.value.gender) && (spares.head.value.gender === dancers.head.value.gender)) {
      pairs.enqueue(spares.dequeue());
      spares.enqueue(dancers.dequeue());
      console.log('spare to pair');
    }
  }

  console.log('PAIRS:', display(pairs));
  console.log('');
  console.log('SPARES:', display(spares));
  console.log('');
  console.log('DANCERS:', display(dancers));

  
  let inLine = '';
  while (spares.head) {
    if (!spares.head.next) {
      inLine += `& ${spares.head.value.name} `;
    } else {
      inLine += `${spares.head.value.name}, `;
    }
    spares.dequeue();
  }

  let onTheFloor = '';
  while (pairs.head) {
    if (!pairs.head.next) {
      onTheFloor += `& ${pairs.head.value.name} `;
    } else {
      onTheFloor += `${pairs.head.value.name}, `;
    }
    pairs.dequeue();
  }

  console.log(inLine);
  console.log(onTheFloor);

  return `${onTheFloor} are on the floor dancing while ${inLine} are still waiting for a pair!`;

};

console.log(squareDance(dancers));

