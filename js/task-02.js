const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const liArray = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li')
  item.textContent = ingredient
  item.className = 'item'
  liArray.push(item)
})
list.append(...liArray)
