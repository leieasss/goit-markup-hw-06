const input = document.querySelector('#validation-input');

function toggleClasses(element, validClass, invalidClass) {
    element.classList.add(validClass);
    element.classList.remove(invalidClass);
}

input.addEventListener('blur', event => {
    const element = event.currentTarget;
    const dataLength = Number(element.dataset.length);

    if (element.value.length === dataLength) {
        toggleClasses(element, 'valid', 'invalid');
    } else {
        toggleClasses(element, 'invalid', 'valid');
    }
});

