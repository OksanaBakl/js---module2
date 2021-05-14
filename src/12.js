function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

  string = array.join(delimeter);

  // Change code above this line
  return string;
}

console.log(
  makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '),
);
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
