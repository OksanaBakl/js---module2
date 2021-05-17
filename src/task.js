// воспользуемся циклом while и выведите в консоль числа от 0 до 50
// let x;
// x = 0;
// while (x <= 49) {
//   console.log(x);
//   console.log((x += 1));
// }
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }
// TASK 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

const age = prompt('Enter your age');

function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
console.log(isAdult(5));
