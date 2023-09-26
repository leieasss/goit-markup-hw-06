const inputRangeValue = document.querySelector("[type='number']")
const createBtn = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]")
const boxes = document.querySelector("#boxes")

createBtn.addEventListener("click", () => {
  let amount = +inputRangeValue.value;


  
  if (amount > inputRangeValue.getAttribute("max")) {
    amount = inputRangeValue.max;
    inputRangeValue.value = amount
  }

  createBoxes(amount)
})

destroy.addEventListener("click", () => {
  boxes.innerHTML= "";
  inputRangeValue.value = ""
})



function createBoxes (amount) {
  let sizeBox = 30;
  let arrDiv = [];

  for (let i = 0; i < amount; i++) {
    const getColor = getRandomHexColor()
    const html = `
      <div style="background-color: ${getColor}; width: ${sizeBox}px; height: ${sizeBox}px"></div>
    `
    arrDiv.push(html)
    sizeBox +=10
  }

  boxes.insertAdjacentHTML("afterbegin", arrDiv.join(""))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
