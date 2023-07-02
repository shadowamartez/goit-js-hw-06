const inputStr = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputStr.addEventListener('input', handlerInput);

function handlerInput() {
    textSpan.style.fontSize = `${inputStr.value}px`; 
}
