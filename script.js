const display = document.getElementById('display');

function appendValue(value) {
  if (display.value === 'Error' || display.value === 'Cannot divide by 0') {
    display.value = '';
  }
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  if (display.value === 'Error' || display.value === 'Cannot divide by 0') {
    display.value = '';
    return;
  }
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === '') return;

    if (/\/0+(?![0-9.])/.test(display.value)) {
      display.value = 'Cannot divide by 0';
      return;
    }

    const result = eval(display.value);

    if (!isFinite(result) || isNaN(result)) {
      display.value = 'Error';
    } else {
      display.value = Number(result.toFixed(8));
    }
  } catch (error) {
    display.value = 'Error';
  }
}