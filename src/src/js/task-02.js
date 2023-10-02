const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients");



const renderIngredients = (ingredients, element) => {
  const liItems = ingredients.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.classList.add("item");
    return li
  })
  
  ulIngredients.append(...liItems)
}

renderIngredients(ingredients, ulIngredients)