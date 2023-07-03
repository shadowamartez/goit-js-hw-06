const inputNumb = document.querySelector('#validation-input');
const atrData = Number(inputNumb.getAttribute('data-length'));

inputNumb.addEventListener('blur', handlerBlur);

function updateInput(addClass, removeClass) {
    inputNumb.classList.add(addClass);
    inputNumb.classList.remove(removeClass);
}

function handlerBlur(evt) {
    if (inputNumb.value.length === atrData) {
        updateInput("valid", "invalid")
    } else {
        updateInput("invalid", "valid")
    }
};

