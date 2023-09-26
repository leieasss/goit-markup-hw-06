// const body = document.body
const body = document.querySelector("body")
const colorChangeBtn = document.querySelector(".change-color")
const spanText = document.querySelector(".color")


colorChangeBtn.addEventListener("click", () => {
  const getColor = getRandomHexColor()
  body.style.backgroundColor = getColor
  spanText.textContent = getColor
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


