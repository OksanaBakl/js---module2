function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const item of order) {
    total += item;
  }
  // Change code above this line
  return total;
}

console.log(calculateTotalPrice([5, 10, 15, 20]));
console.log(calculateTotalPrice([1, 2, 3]));
// Напиши функцию calculateTotalPrice(order),
// которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.
// Общая сумма элементов должна сохраняться в переменной total,
//     которая возвращается, как результат работы функции.

// Тесты
