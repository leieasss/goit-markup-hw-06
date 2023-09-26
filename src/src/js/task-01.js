const ulCategories = document.querySelector("#categories");
const f = (element) => {

    const liChild = [...element.children]
   
    console.log(`Number of categories: ${liChild.length}`);


    liChild.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length}`);
    })
}

f(ulCategories)


