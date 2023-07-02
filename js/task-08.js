const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget.elements);
    const { email, password } = evt.currentTarget.elements; 

    if (email.value === "" || password.value === "") {
        const message = "Please fill in all the fields!";
        alert(message);
    } else {
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(data);
    }
    evt.currentTarget.reset();
}

