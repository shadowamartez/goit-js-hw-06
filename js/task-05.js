const nameInput = document.querySelector('#name-input'); 
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', nameInputin)

function nameInputin(evt) {
    nameOutput.textContent = evt.currentTarget.value;

    if (nameOutput.textContent == "") {
        nameOutput.innerHTML = "Anonymous";
    }
}