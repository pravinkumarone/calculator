const defaultZero = 0;

let currentOperator = '';

function setCurrentOperator(newOperator){
    activeOperator(newOperator);
    currentOperator = newOperator;
}

const one = document.getElementById('num-1');
const two = document.getElementById('num-2');
const three = document.getElementById('num-3');
const four = document.getElementById('num-4');
const five = document.getElementById('num-5');
const six = document.getElementById('num-6');
const seven = document.getElementById('num-7');
const eight = document.getElementById('num-8');
const nine = document.getElementById('num-9');
const zero = document.getElementById('num-0');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

plus.onclick = () => setCurrentOperator('plus');
minus.onclick = () => setCurrentOperator('minus');
multiply.onclick = () => setCurrentOperator('multiply');
divide.onclick = () => setCurrentOperator('divide');

const dot = document.getElementById('num-.');
const equals = document.getElementById('equals');
const ac = document.getElementById('_AC');
const plusMinus = document.getElementById('_plus-minus');
const percentage = document.getElementById('_percentage');


const answer = document.querySelector('#ans');
answer.innerHTML = defaultZero;


function activeOperator(newOperator){
    if(currentOperator == 'plus'){
    plus.classList.remove('active');
    }
    if(currentOperator = 'multiply'){
    multiply.classList.remove('active');
    }
    if(currentOperator = 'divide'){
    divide.classList.remove('active');
    }
    if(currentOperator = 'minus'){
    minus.classList.remove('active');
    }

    if(newOperator == 'plus'){
        plus.classList.add('active');
    }
    if(newOperator == 'multiply'){
        multiply.classList.add('active');
    }
    if(newOperator == 'divide'){
        divide.classList.add('active');
    }
    if(newOperator == 'minus'){
        minus.classList.add('active');
    }
}

