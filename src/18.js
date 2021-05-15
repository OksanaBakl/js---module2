function calculateTotal(number) {
  let Total = 0;

  for (let i = 0; i <= number; i += 1) {
    Total += i;
  }

  return Total;
}
console.log(calculateTotal(5));
console.log(calculateTotal(3));
console.log(calculateTotal(1));
