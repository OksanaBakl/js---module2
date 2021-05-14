function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';

  // Change code above this line
}

console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 250));
console.log(checkStorage(200, 20));
