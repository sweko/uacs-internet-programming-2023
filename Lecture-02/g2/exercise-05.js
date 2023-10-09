document.addEventListener("DOMContentLoaded", function () {
  let previousValue = 0;
  let operation = "";

  function displayValue(value) {
    document.getElementById("result").value = value;
  }

  function getValue() {
    const value = Number(document.getElementById("result").value);
    return value;
  }

  function clear() {
    displayValue(0);
  }

  function addDigit(event) {
    const digit = Number(event.target.attributes['data-value'].value);
    const value = getValue();
    const newValue = value * 10 + digit;
    displayValue(newValue);
  }

  function executeAddition() {
    const value = getValue();
    previousValue = value;
    operation = "+";
    displayValue(0);
  }

  function executeOperation() {
    const value = getValue();
    if (operation === "+") {
      const result = value + previousValue;
      operation = "";
      previousValue = 0;
      displayValue(result);
    }
  }

  // function addOne() {
  //   const value = getValue();
  //   const newValue = value * 10 + 1;
  //   displayValue(newValue);
  // }

  // function addTwo() {
  //   const value = getValue();
  //   const newValue = value * 10 + 2;
  //   displayValue(newValue);
  // }

  // function addThree() {
  //   const value = getValue();
  //   const newValue = value * 10 + 3;
  //   displayValue(newValue);
  // }

  document.getElementById("clear").addEventListener("click", clear);
  document.getElementById("add").addEventListener("click", executeAddition);
  document.getElementById("equals").addEventListener("click", executeOperation);
  // document.getElementById("one").addEventListener("click", addDigit);
  // document.getElementById("two").addEventListener("click", addDigit);
  // document.getElementById("three").addEventListener("click", addDigit);

  const digits = document.getElementsByClassName("digit");
  for (const digitButton of digits) {
    digitButton.addEventListener("click", addDigit);
  }
  
});