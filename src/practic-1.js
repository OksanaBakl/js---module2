let total = 0;

while (true) {
  const enterSth = prompt('Введи число');
  let result;
  if (enterSth === null) {
    result = `Общая сумма чисел равна ${total}`;
    break;
  } else if (!isNaN(enterSth)) {
    result = `Общая сумма чисел равна ${(total += +enterSth)}`;
  } else {
    result = 'Введите число';
  }
  console.log(result);
}
// Task 5
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как
// пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Сделать проверку на то что пользователь ввел именно число.
// let input;
// let total = 0;
