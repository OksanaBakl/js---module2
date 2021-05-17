function filterArray(numbers, value) {
  // Change code below this line
  const newNumbers = [];
  for (const number of numbers) {
    if (number > value) {
      newNumbers.push(number);
    }
  }
  return newNumbers;
  // Change code above this line
}

// Напиши функцию filterArray(numbers, value),
// которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).
console.log(filterArray([1, 2, 3, 4, 5, 6, 8], 2));
