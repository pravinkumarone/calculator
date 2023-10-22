const defaultZero = 0;
const addition = 'addition+';
const subtraction = 'subtraction-';
const multiplication = 'multiplication*';
const division = 'division/';

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

const dot = document.getElementById('num-.');
const equals = document.getElementById('equals');
const ac = document.getElementById('_AC');
const plusMinus = document.getElementById('_plus-minus');
const percentage = document.getElementById('_percentage');



const percent = 'percentage';
const clear = 'clear';
const plusminus = 'plus-minus';
const decimal = 'decimal';

plus.onclick = () => setCurrentOperator('addition+');
minus.onclick = () => setCurrentOperator('subtraction-');
multiply.onclick = () => setCurrentOperator('multiplication*');
divide.onclick = () => setCurrentOperator('division/');

const answer = document.querySelector('#ans');
answer.innerHTML = defaultZero;


function activeOperator(newOperator){
    if(currentOperator == 'addition+'){
        plus.classList.remove('active');
    } else if(currentOperator = 'subtraction-'){
        minus.classList.remove('active');
    } else if(currentOperator = 'multiplication*'){
        multiply.classList.remove('active');
    } else if(currentOperator = 'division/'){
        divide.classList.remove('active');
    }

    if(newOperator == 'addition+'){
        plus.classList.add('active');
    } else if(newOperator == 'subtraction-'){
        minus.classList.add('active');
    } else if(newOperator == 'multiplication*'){
        multiply.classList.add('active');
    } else if(newOperator == 'division/'){
        divide.classList.add('active');
    }
}

