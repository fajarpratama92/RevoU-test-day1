// Get the input elements
const inputBase = document.getElementById('input-base');
const inputHeight = document.getElementById('input-height');
const resultBox = document.createElement('div'); // Create a new div element for displaying the result

// Get the buttons
const calculateButton = document.getElementById('calculate-Area');
const resetButton = document.getElementById('reset-area');

// Attach event listeners to the buttons
calculateButton.addEventListener('click', calculateArea);
resetButton.addEventListener('click', resetFields);

// Function to calculate the area of a triangle
function calculateArea() {
  const baseValue = Number(inputBase.value); // Convert input values to numbers
  const heightValue = Number(inputHeight.value);

  if (!isNaN(baseValue) && !isNaN(heightValue) && baseValue !== 0 && heightValue !== 0) { // Check if inputs are valid numbers
    const areaValue = (baseValue * heightValue) / 2; // Calculate the area

    // Create an empty array for storing calculation steps
    const calculationSteps = [];

    // Add the calculation steps to the array
    calculationSteps.push('Calculation steps:');
    calculationSteps.push('A = 1/2 x b x h');
    calculationSteps.push(`A = 1/2 x ${baseValue} x ${heightValue}`);
    calculationSteps.push(`A = ${areaValue}`);

    // Combine the calculation steps into a single string with HTML line breaks
    const calculationText = calculationSteps.join('\n').replace(/\n/g, '<br>');

    // Create a new div for displaying the calculation steps
    const calculationStepsDiv = document.createElement('div');
    calculationStepsDiv.style.textAlign = 'start'; // Set text alignment to center

    // Display the calculation text in the calculation div
    calculationStepsDiv.innerHTML = calculationText;

    // Clear the result box
    resultBox.textContent = '';

    // Append the calculation div to the result box
    resultBox.appendChild(calculationStepsDiv);
  } else {
    resultBox.textContent = 'Invalid input. Please enter valid numbers.'; // Display error message
  }

  // Append the result box to the main section
  const mainSection = document.querySelector('.input-luas-section');
  mainSection.insertBefore(resultBox, document.querySelector('.buttons'));
}

// Function to reset the input fields and result box
function resetFields() {
  inputBase.value = '';
  inputHeight.value = '';
  resultBox.textContent = ''; // Clear the result box
  resultBox.parentNode.removeChild(resultBox); // Remove the result box from the DOM
}
