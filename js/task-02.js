const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElements = document.querySelectorAll('ul'); 
const liElements = ingredients.map((ingredient) => {
  const itemLi = document.createElement("li");
  itemLi.textContent = ingredient;
  itemLi.classList.add("item");
  return itemLi
});

console.log(liElements);

ulElements.append(...liElements); 
console.log(ulElements);