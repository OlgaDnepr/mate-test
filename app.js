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

const lotsOfDecimal = 1.766584958675746364;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
myNumber += 35.7;
console.log(myNumber);
console.log(typeof myNumber);

let myNumber1 = "74"; // это рядок, а не число
myNumber1 = Number(myNumber1) + 35.7; //перевели рядок в число с помощью команды Number
console.log(myNumber1);
console.log(typeof myNumber1); //проверяем какой тип данных имеет myNumber1

const ss = 5;
let sum1 = 0;



for (let i = 1; i <= ss; i++) {
  sum1 += i;
  console.log(i);
  
}
console.log(sum1);

// debugger;


function calculateProfit(amount, percent, period) {
  let sum = amount;
 
  for (let i = 1; i <= period; i++) {
    sum += sum * (percent / 100);
    console.log(sum);
  }
  return sum;
}
let ttt = calculateProfit(1000, 5.5, 7);
console.log(ttt);


function splitString(str) {
  let length = str.length % 2;
  let pairing = str;
  
  if (length !== 0) {
     pairing = `${str}_`;
  } 
  console.log(pairing);
  let pr = '';
  let res = [];
  for (let i = 0; i < pairing.length; i = i + 2) {
    // pairing.split()
    pr = pairing[i] + pairing[i + 1];
    res.push(pr);
  }
  return res;
}
let result2 = splitString('gvfg hsfc');
console.log(result2);

let i = 2
for (; i > 1; i++) {
  if (i === 9) {
    break;
  }

}
console.log(i);


for (let i = 2; i > 1; i++) {
  if (i === 9) {
    break;
  }

  console.log(i);
}


for (let i = 20; i <= 30; i++) {
  if (i === 25) {
    continue;
  }

  console.log(i);
}
function name(qqq) {
  
  let result = 0;
  for (let i = 1; i <= qqq; i++) {
    if (i === 5) {
      continue;
    }
    result += i;
    console.log(result);
    
  }
  return result;
}
let rrr = name(22);
console.log(rrr);
 
// debugger
let result22 = 0;
for (let i = 1; i <= 7; i++) {
  if (i === 5) {
    continue;
  }
  result22 += i;
  console.log(i);
  console.log(result22);
  
}
let guestList = `Guests:
 John
 ete
 Mary
`;
console.log(guestList); // перенос строки

guestList = 'Guests:\n John, ete Mary';
console.log(guestList); //перенос строки

guestList = 'Guests:\t John, ete Mary';
console.log(guestList);

let str = '';

for (let i = 1; i <= 1500; i++) {
  str += String.fromCodePoint(i);
}
// alert(str);
console.log(str);
console.log('xГ'.codePointAt(1));

const word = 'елка';
const word1 = 'ёлка';
console.log(word.localeCompare(word1));



