const inputNumb = document.querySelector('#validation-input');
const atrData = Number(inputNumb.getAttribute('data-length'));

inputNumb.addEventListener('blur', handlerBlur);

function handlerBlur(evt) {
    if (inputNumb.value.length == atrData) {
        inputNumb.classList.remove("invalid");
        inputNumb.classList.add("valid")
    } else {
        inputNumb.classList.remove("valid");
        inputNumb.classList.add("invalid")
    }
};