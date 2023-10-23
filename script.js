let firstOperand = '';
let secondOperand = '';
let shouldResetScreen = false;
let currentOperator = null;

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equalsBtn')
const deleteButton = document.querySelector('.deleteBtn')
const pointButton = document.getElementById('pointBtn')
const screen = document.getElementById('screen')

window.addEventListener('keydown', handleKeyboardInput);
equalsButton.addEventListener('click', evaluate)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
  if (screen.textContent === '0' || shouldResetScreen)
    resetScreen()
  screen.textContent += number
}

function resetScreen() {
  screen.textContent = ''
  shouldResetScreen = false
}

function appendPoint() {
  if (shouldResetScreen) resetScreen()
  if (screen.textContent === '')
    screen.textContent = '0'
  if (screen.textContent.includes('.')) return
  screen.textContent += '.'
}

function deleteNumber() {
  screen.textContent = screen.textContent
    .toString()
    .slice(0, -1)
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate()
  firstOperand = screen.textContent
  currentOperation = operator
  shouldResetScreen = true
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return
  if (currentOperation === '÷' && screen.textContent === '0') {
    screen.textContent = "Error";
    return
  }
  secondOperand = screen.textContent
  screen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  )
  currentOperation = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
  if (e.key === '.') appendPoint()
  if (e.key === '=' || e.key === 'Enter') {
    setCurrentOperator(newOperator)
    evaluate()
    }
  if (e.key === 'Backspace') deleteNumber()
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/'){
    setCurrentOperator(newOperator)
    setOperation(convertOperator(e.key))
  }
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') {
    setCurrentOperator(newOperator)
    return '÷'
    }
  if (keyboardOperator === '*') {
    setCurrentOperator(newOperator)
    return '×'
    }
  if (keyboardOperator === '-') {
    setCurrentOperator(newOperator)
    return '−'
    }
  if (keyboardOperator === '+') {
    setCurrentOperator(newOperator)
    return '+'
    }
}

function add(a, b) {
  return a + b
}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

const ad = document.querySelector('.addition');
const s = document.querySelector('.subtract');
const m = document.querySelector('.multiply');
const d = document.querySelector('.divide');

//keyboards keys
clearButton.onclick = () => {
    ad.classList.remove('active');
    s.classList.remove('active');
    m.classList.remove('active');
    d.classList.remove('active');
};

function setCurrentOperator(newOperator){
    activeOperator(newOperator);
    currentOperator = newOperator;
}

function activeOperator(newOperator){
    if(currentOperator == 'NumpadAdd'){
    ad.classList.remove('active');
    }
    if(currentOperator = 'NumpadMultiply'){
    m.classList.remove('active');
    }
    if(currentOperator = 'NumpadDivide'){
    d.classList.remove('active');
    }
    if(currentOperator = 'NumpadSubtract'){
    s.classList.remove('active');
    }

    if(newOperator == 'NumpadAdd'){
        ad.classList.add('active');
    }
    if(newOperator == 'NumpadMultiply'){
        m.classList.add('active');
    }
    if(newOperator == 'NumpadDivide'){
        d.classList.add('active');
    }
    if(newOperator == 'NumpadSubtract'){
        s.classList.add('active');
    }
}
