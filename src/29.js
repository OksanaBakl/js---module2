function getEvenNumbers(start, end) {
  // Change code below this line
  let mixedArr = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      mixedArr.push(i);
    }
  }
  return mixedArr;
  // Change code above this line
}
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив
// всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).
console.log(getEvenNumbers(6, 12));
