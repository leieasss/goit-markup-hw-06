const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", event => {
    const element = event.currentTarget
    nameOutput.textContent = element.value.trim()
    if (!nameOutput.textContent) {
        nameOutput.textContent = "Anonymous"
    }
})