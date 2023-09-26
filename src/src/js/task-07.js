const inputRangeValue = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${inputRangeValue.value}px`

inputRangeValue.addEventListener("input", (event) => {
    const element = event.currentTarget;

    spanText.style.fontSize = `${element.value}px`
})