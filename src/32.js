function includes(array, value) {
  // Change code below this line
  for (const arr of array) {
    if (arr === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
