const defaultZero = 0;
let currentOperator = '';

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

const nums= document.querySelectorAll('.nums');
nums.forEach(num => {
    num.addEventListener('click', () => {
        answer.innerHTML += num.textContent;
    })
})

//mouse clicks
const answer = document.querySelector('#ans');
answer.innerHTML = defaultZero;

function setCurrentOperator(newOperator){
    activeOperator(newOperator);
    currentOperator = newOperator;
}

ac.onclick = () => {
    plus.classList.remove('active');
    minus.classList.remove('active');
    multiply.classList.remove('active');
    divide.classList.remove('active');
    answer.innerHTML = defaultZero;
};

function activeOperator(newOperator){
    if(currentOperator == 'NumpadAdd'){
    plus.classList.remove('active');
    }
    if(currentOperator = 'NumpadMultiply'){
    multiply.classList.remove('active');
    }
    if(currentOperator = 'NumpadDivide'){
    divide.classList.remove('active');
    }
    if(currentOperator = 'NumpadSubtract'){
    minus.classList.remove('active');
    }

    if(newOperator == 'NumpadAdd'){
        plus.classList.add('active');
    }
    if(newOperator == 'NumpadMultiply'){
        multiply.classList.add('active');
    }
    if(newOperator == 'NumpadDivide'){
        divide.classList.add('active');
    }
    if(newOperator == 'NumpadSubtract'){
        minus.classList.add('active');
    }
}



//keyboards keys
const buttons = document.querySelector('.operator');

window.addEventListener('keydown', (event) => {
    activeOperator(event.code);
    currentOperator = event.code;
})

plus.onclick = () => setCurrentOperator('NumpadAdd');
minus.onclick = () => setCurrentOperator('NumpadSubtract');
multiply.onclick = () => setCurrentOperator('NumpadMultiply');
divide.onclick = () => setCurrentOperator('NumpadDivide');

window.addEventListener('keydown',(event) => {
    if(event.code == "Digit1" || event.code == "Numpad1"){
        answer.innerHTML += 1;
    }
    if(event.code == "Digit2" || event.code == "Numpad2"){
        answer.innerHTML += 2;
    }
    if(event.code == "Digit3" || event.code == "Numpad3"){
        answer.innerHTML += 3;
    }
    if(event.code == "Digit4" || event.code == "Numpad4"){
        answer.innerHTML += 4;
    }
    if(event.code == "Digit5" || event.code == "Numpad5"){
        answer.innerHTML += 5;
    }
    if(event.code == "Digit6" || event.code == "Numpad6"){
        answer.innerHTML += 6;
    }
    if(event.code == "Digit7" || event.code == "Numpad7"){
        answer.innerHTML += 7;
    }
    if(event.code == "Digit8" || event.code == "Numpad8"){
        answer.innerHTML += 8;
    }
    if(event.code == "Digit9" || event.code == "Numpad9"){
        answer.innerHTML += 9;
    }
    if(event.code == "Digit0" || event.code == "Numpad0"){
        answer.innerHTML += 0;
    }
}, true);
