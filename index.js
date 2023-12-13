document.addEventListener("DOMContentLoaded", function () {
  // Start number bank array
  const numberBank = [];

  // Function to update the number bank display
  function updateNumberBankDisplay() {
    const outputElement = document.querySelector("#numberBank output");
    outputElement.textContent = numberBank.join(", ");
  }

  // Function to update the odd and even categories display
  function updateCategoriesDisplay(oddNumbers, evenNumbers) {
    document.querySelector("#odds output").textContent = oddNumbers.join(", ");
    document.querySelector("#evens output").textContent =
      evenNumbers.join(", ");
  }

  // Function to check if a number is odd
  function isOdd(number) {
    return number % 2 !== 0;
  }

  // Add Number button click Event
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const inputElement = document.querySelector('input[name="number"]');
    const inputValue = parseInt(inputElement.value);

    // Check if the input is a valid intiger
    if (!isNaN(inputValue)) {
      // Add the number to the number bank
      numberBank.push(inputValue);

      // Update the number bank display
      updateNumberBankDisplay();

      // Clear the input box
      inputElement.value = "";
    }
  });

  // Sort 1 button click event
  document.querySelector("#sortOne").addEventListener("click", function () {
    if (numberBank.length > 0) {
      const firstNumber = numberBank.shift();
      const oddNumbers = isOdd(firstNumber) ? [firstNumber] : [];
      const evenNumbers = isOdd(firstNumber) ? [] : [firstNumber];

      // Update displays
      updateNumberBankDisplay();
      updateCategoriesDisplay(oddNumbers, evenNumbers);
    }
  });

  // Sort All button click event
  document.querySelector("#sortAll").addEventListener("click", function () {
    const oddNumbers = [];
    const evenNumbers = [];

    // Sort all numbers then place in proper catogory
    while (numberBank.length > 0) {
      const currentNumber = numberBank.shift();

      if (isOdd(currentNumber)) {
        oddNumbers.push(currentNumber);
      } else {
        evenNumbers.push(currentNumber);
      }
    }

    // Add everything to display
    updateNumberBankDisplay();
    updateCategoriesDisplay(oddNumbers, evenNumbers);
  });
});
