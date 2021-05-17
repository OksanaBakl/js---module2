// Task 1

// const a = 15

// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
const a = prompt('Введи число');
userInput =
  Number(userInput) === 10
    ? 'Верно'
    : Number.isNaN(a)
    ? 'Это не число'
    : 'Неверно';
console.log(userInput);
