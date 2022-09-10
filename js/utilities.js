function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  if (isNaN(inputFieldValueString)) {
    alert("Show Only Number!");
  }
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (inputFieldValue < 0 ) {
    alert("give me Real Amount!");

  }
  else {
    return inputFieldValue;
  }

}

// function getTextElementValueById(elementId) {
//   const textElement = document.getElementById(elementId);
//   const textElementValueString = textElement.innerText;
//   const textElementValue = textElementValueString;
//   textElementValue;
// }

// function setTextElementValueById(elementId, newValue) {
//   const textElement = document.getElementById(elementId);
//   textElement.value = newValue;
// }
