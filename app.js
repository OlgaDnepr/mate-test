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


const title = ' Mate academy ';
console.log(title, title.length);

console.log(title.toLowerCase());
console.log(title, title.length);

let title1 = title.toUpperCase();
console.log(title1);

function summ(a, b, ...rest) {
  console.log(a, b, rest);
  console.log('длина rest:', rest.length);
}
summ()
summ(1, 2, 3, 4, 5,)
summ(1, 2)

function canTheyBook(adultsCount, childrenCount = 0, babiesCount = 0) {

  if (adultsCount < 1) {
   return false; 
  }
 let count = adultsCount + childrenCount;
 if (babiesCount > 1) {
   count += babiesCount - 1;
 }
  if (count > 8) {
   return false;
 }

if (childrenCount > adultsCount * 2 ) {
    return false;
}
    if (babiesCount > adultsCount) {
      return false;
    }
 if (childrenCount + babiesCount > adultsCount * 2) {
    return false;
}
    return true;
}


console.log(canTheyBook(1, 0, 2));

function recommendRoom(adultsCount, childrenCount = 0, babiesCount = 0) {
  // write code here
  let totalCount = adultsCount + childrenCount + babiesCount;

  if (adultsCount < 1) {
    return false;
  }

  if (babiesCount > adultsCount) {
    return false;
  }

  if (childrenCount + babiesCount > 2 * adultsCount) {
    return false;
  }

if (childrenCount > 2 * adultsCount) {
    return false;
  }
if (totalCount <= 4) {
return 'small room';
}

if (totalCount === 5 && babiesCount > 0) {
return 'small room + extra bed';
}

if (totalCount === 9 && babiesCount > 0) {
return 'big room + extra bed';
}

if (totalCount <= 8) {
return 'big room';
}
}
console.log(recommendRoom(2, 0, 2));

const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 20
};

if (user['age']) {
  console.log('property');
}
console.log(user['age']);

console.log(user); // { firstName: 'John', lastName: 'Smith', age: 20 }

const users = {
  firstName: 'John',
  lastName: 'Smith',
  age: 20,
};
for (const key of Object.keys(users)) {
  console.log(key, user[key]); 
}

for (const value of Object.values(users)) {
  console.log(value); 
}

for (const entry of Object.entries(users)) {
  console.log(`${entry[0]} is ${entry[1]}`); 
}
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.values(object1));


const object2 = {
  a: 'somestring',
  b: 42,
};

for (const [key, value] of Object.entries(object2)) {
  console.log(`${key}: ${value}`);
}

const robot = {
  version: 16,
  name: 'Cleaner 3000',
  released: true,
  author: { name: 'Vlad' },
};

function getRobotSchema(robot) {
  const rob = {};
   for (const key of Object.keys(robot)) {
         rob[key] = typeof robot[key];
   } 
    return rob;
 }
 const robotSchema = getRobotSchema(robot);
 console.log(robotSchema);

 const robot1 = {
  version: 16,
  name: 'Cleaner 3000',
  released: true,
  author: { name: 'Vlad' },
   
};
const key1 = Object.keys(robot1);
console.log(key1);

