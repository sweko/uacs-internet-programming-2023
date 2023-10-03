document.addEventListener("DOMContentLoaded", () => {
  let currentValue = 0;
  let previuosValue = 0;
  let currentOperation;

  const result = document.getElementById("result");

  const displayValue = (value) => {
    result.value = value;
  };

  const clearValues = () => {
    currentValue = 0;
    previuosValue = 0;
    displayValue(currentValue);
  };

  const addDigitToValue = (event) => {
    const dataValue = Number(event.target.attributes['data-value'].value);
    currentValue = currentValue * 10 + dataValue;
    displayValue(currentValue);
  };

  const operationAdd = () => {
    previuosValue = currentValue;
    currentValue = 0;
    currentOperation = "+";
    displayValue(currentValue);
  }

  const executeEquals = () => {
    if (currentOperation === "+") {
        const result = currentValue + previuosValue;
        currentValue = result;
        previuosValue = 0;
    }
    displayValue(currentValue);
  }

  document.getElementById("clear").addEventListener("click", clearValues);
  const digitButtons = document.getElementsByClassName("digit");
  for (const digitButton of digitButtons) {
    digitButton.addEventListener("click", addDigitToValue)
  }

  document.getElementById("add").addEventListener("click", operationAdd)

  document.getElementById("equals").addEventListener("click", executeEquals)
});
