const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    console.log(evt.currentTarget.elements);
    const { email, password } = evt.currentTarget.elements; 

    if (email.value.trim() === "" || password.value.trim() === "") {
        const message = "Please fill in all the fields!";
        return alert(message);
    }
    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data);
    }
    evt.currentTarget.reset();


