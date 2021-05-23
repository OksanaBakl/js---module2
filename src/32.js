// function includes(array, value) {
//   // Change code below this line
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// ========== polindrom ==========
const str0 = 'Tenet'; // true
const str1 = 'Лёша на полке клопа нашёл'; // true
// const str2 = 'Искать такси'; // true
// const str3 = 'Существуют разновидности'; // false

const str = str1.toLowerCase().replaceAll(' ', '');
const letters = str.split('');
const newArr = [];

for (let i = letters.length - 1; i >= 0; i -= 1) {
  newArr.push(letters[i]);
}

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === ' ') {
    newArr.splice(i, 0, ' ');
  }
}
console.log(newArr);

let reversedStr = newArr.join('');
const isPolindrome = str1.toLowerCase() === reversedStr;

console.log(str1);
console.log(reversedStr);
console.log('isPolindrome:', isPolindrome);

// =========== concat ==========
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);
// const allClients2 = [1, 2, 3, ...oldClients, 4, 5, 6, ...newClients];

// console.log(allClients);
// console.log(allClients2);
