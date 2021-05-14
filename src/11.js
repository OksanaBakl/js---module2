function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  return message.split(' ').length * pricePerWord;
  // Change code above this line
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
