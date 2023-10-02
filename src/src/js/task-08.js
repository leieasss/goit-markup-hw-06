const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const currentForm = event.currentTarget;
    const { email, password } = currentForm.elements;

    if (!email.value.trim() || !password.value.trim()) {
        alert("Please fill in all fields");
        return; 
    }

    const formData = {
        email: email.value,
        password: password.value
    };

    console.log(formData);
    currentForm.reset();
});






