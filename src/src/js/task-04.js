const incrementBtn = document.querySelector("button[data-action='increment']")
const decrementBtn = document.querySelector("button[data-action='decrement']")
const elValue = document.querySelector("#value")


let counterValue = 0;

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    elValue.textContent = counterValue 
})
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    elValue.textContent = counterValue
})