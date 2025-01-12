'use strict'; 

// const age = 11;
// let message2 = '';

// if (age < 7) {
//   message2 = 'baby';
// } else if (age < 15) {
//   message2 = 'tin';
// } else if (age < 18) {
//   message2 = 'Child';
// } else {
//   message2 = 'Adult';
// }
// console.log(message2);


// const message = (age < 7) 
//   ? 'baby'
//   : (age < 15)
//     ? 'tin'
//     : (age < 18)
//       ? 'Child'
//       : 'Adult';
// console.log(message);

// let number = 0;
// number++;
// ++number;
// console.log(number);

// function(x) {
//   return x++
// }

// const y = Increment (2);
// console.log(y);


// function getCentury(year) {
//   if (year === 0) {
//   return 1;
//   }
//   return Math.ceil(year / 100)
// }
// const result = getCentury(1876);
// console.log(result);


function countNetworking(quarantineLength, frequency) {
  return Math.floor((12 - quarantineLength) / frequency);
  }

// const result = countNetworking(3, 2);
const result = countNetworking(3, 5);
console.log(result);

const number = '1e23, 10';
console.log(parseInt(number));

const number1 = '1e23, 10';
console.log(parseFloat(number1));

const number2 = '0x123aa';
console.log(parseFloat(number2));
