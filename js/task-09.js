const btnColor = document.querySelector('.change-color');
const spanClr = document.querySelector('.color');
const bodyColor = document.querySelector('body');

btnColor.addEventListener('click', handlerClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handlerClick() {
  bodyColor.style.backgroundColor = spanClr.textContent = getRandomHexColor();
  console.log(handlerClick);
}