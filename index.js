let displayVal = '';

function addToDisplay(value) {
  displayVal += value;
  document.getElementById('display').value = displayVal;
}

function clearDisplay() {
  displayVal = '';
  document.getElementById('display').value = displayVal;
}

function calculate() {
  try {
    displayVal = eval(displayVal);
    document.getElementById('display').value = displayVal;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
