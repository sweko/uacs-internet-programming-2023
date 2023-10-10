function fizzBuzz() {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }
    if (index % 3 === 0) {
      console.log("Fizz");
      continue;
    }
    if (index % 5 === 0) {
      console.log("Buzz");
      continue;
    }
    console.log(index);
  }
}

fizzBuzz();
