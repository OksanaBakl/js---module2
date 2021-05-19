function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const value of order) {
    total += value;
  }

  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([164, 48, 291]));
