const counterNumber = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]'); 

decrementBtn.addEventListener('click', handlerClick);
incrementBtn.addEventListener('click', handlerClickUp); 

let value = 0;

function handlerClick() {
    value -= 1;
    counterNumber.textContent = `${value}`;
}

function handlerClickUp() {
    value += 1;
    counterNumber.textContent = `${value}`;
}