'use strict'; 

const age = 11;
let message2 = '';

if (age < 7) {
  message2 = 'baby';
} else if (age < 15) {
  message2 = 'tin';
} else if (age < 18) {
  message2 = 'Child';
} else {
  message2 = 'Adult';
}
console.log(message2);


const message = (age < 7) 
  ? 'baby'
  : (age < 15)
    ? 'tin'
    : (age < 18)
      ? 'Child'
      : 'Adult';
console.log(message);

let number = 0;
number++;
++number;
console.log(number);

function(x) {
  return x++
}

const y = Increment (2);
console.log(y);




