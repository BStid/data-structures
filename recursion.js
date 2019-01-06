function factorial(num) {
  //base case
  if (num === 1) {
    return num;
    //recursive case
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(4));
