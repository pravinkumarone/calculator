  let firstOperand = '';
  let secondOperand = '';
  let currentOperator = null;
  let shouldResetScreen = false;

  const screen = document.getElementById('screen');
  const numberButtons = document.querySelectorAll('[data-number]');
  const operatorButtons = document.querySelectorAll('[data-operator]');
  const equalsButton = document.getElementById('equalsBtn');
  const allClearButton = document.querySelector('.allclearBtn');

  numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
  });

  operatorButtons.forEach((button) => {
    button.addEventListener('click', () => setOperator(button.textContent));
  });

  equalsButton.addEventListener('click', evaluate);
  allClearButton.addEventListener('click', clear);

  document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
      appendNumber(key);
    } else if (key === '.' && !screen.textContent.includes('.')) {
      appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      setOperator(key);
    } else if (key === 'Enter') {
      evaluate();
    } else if (key === 'Backspace') {
      clear();
    }
  });

  function appendNumber(number) {
    if (screen.textContent === '0' || shouldResetScreen) {
      resetScreen();
    }

    if (screen.textContent.replace(/\D/g, '').length >= 10) {
      return;
    }

    if (screen.scrollWidth > screen.clientWidth) {
      return;
    }

    screen.textContent += number;
    allClearButton.innerHTML = 'C';
  }

  function resetScreen() {
    screen.textContent = '';
    shouldResetScreen = false;
  }

  function setOperator(operator) {
    if (currentOperator !== null) {
      evaluate();
    }

    if (operator === '+/-') {
      if (screen.textContent !== '0') {
        // Check if the current number is positive or negative
        if (screen.textContent.startsWith('-')) {
          // If it's negative, make it positive
          screen.textContent = screen.textContent.slice(1);
        } else {
          // If it's positive, make it negative
          screen.textContent = '-' + screen.textContent;
        }
      }
    } else if (operator === '%') {
      screen.textContent = (parseFloat(screen.textContent) / 100).toString();
    } else {
      firstOperand = screen.textContent;
      currentOperator = operator;
      shouldResetScreen = true;
      activateOperatorButton(operator);
    }
  }

  function evaluate() {
    if (currentOperator === null || shouldResetScreen) {
      return;
    }
  
    secondOperand = screen.textContent;
  
    if (currentOperator === '÷' && secondOperand === '0') {
      screen.textContent = 'Error';
    } else {
      const result = calculate(firstOperand, currentOperator, secondOperand);
      if (!isNaN(result)) {
        screen.textContent = limitToTenDigits(result);
      } else {
        screen.textContent = 'Error';
      }
      deactivateOperatorButtons();
    }
  
    currentOperator = null;
  }

  function limitToTenDigits(number) {
    const strNumber = number.toString();
    if (strNumber.includes('.') && strNumber.length > 11) {
      return parseFloat(number).toPrecision(10);
    } else if (strNumber.length > 10) {
      return parseFloat(number).toPrecision(10);
    }
    return number;
  }

  function clear() {
    screen.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
    shouldResetScreen = false;
    deactivateOperatorButtons();
  }

  function calculate(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
      case '+':
        return (a + b).toString();
      case '-':
        return (a - b).toString();
      case '*':
        return (a * b).toString();
      case '/':
        if (b === 0) {
          return 'Error';
        }
        return (a / b).toString();
      default:
        return 'Error';
    }
  }

  function activateOperatorButton(operator) {
    operatorButtons.forEach((button) => {
      if (button.textContent === operator) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  function deactivateOperatorButtons() {
    operatorButtons.forEach((button) => {
      button.classList.remove('active');
    });
  }