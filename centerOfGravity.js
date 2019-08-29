function calculateResults(top, bottom, height) {
  const t = parseInt(top);
  const b = parseInt(bottom);
  const h = height * 12;
  const rawResult = (h * (b + (t * 2)))/(3 * (b + t)) / 12;
  const resultFeet = Math.floor(rawResult);
  const feetString = (resultFeet == 1 ? ' foot ' : ' feet ');
  const resultInches = Math.floor((rawResult % resultFeet) * 12);
  const inchString = (resultInches == 1 ? ' inch' : ' inches')
  return resultFeet + feetString + resultInches + inchString;
}

const calculateButton = document.querySelector('#calculate');
const resultDisplay = document.querySelector('#result');
const topTextBox = document.querySelector('#topWidth');
const bottomTextBox = document.querySelector('#bottomWidth');
const heightTextBox = document.querySelector('#height');

calculateButton.addEventListener('click', function() {
  const topWidth = topTextBox.value;
  const bottomWidth = bottomTextBox.value;
  const height = heightTextBox.value;
  const result = calculateResults(topWidth, bottomWidth, height);
  resultDisplay.innerHTML = result;
  topTextBox.value = "";
  bottomTextBox.value = "";
  heightTextBox.value = "";
  topTextBox.focus();
});
