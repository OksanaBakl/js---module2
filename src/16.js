// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми
// элементами двух исходных firstArray и secondArray.
// Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength,
//     функция должна вернуть копию массива длиной maxLength элементов.
// В противном случае функция должна вернуть новый массив целиком.
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  const newArray = firstArray.concat(secondArray);
  const Array = newArray.slice(0, maxLength);

  return Array;
  // Change code above this line
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 2));

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
