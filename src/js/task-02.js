const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

// const potatoEl = document.createElement('li');
// potatoEl.textContent = ingredients[0];
// const mushroomsEl = document.createElement('li');
// mushroomsEl.textContent = ingredients[1];
// const garlicEl = document.createElement('li');
// garlicEl.textContent = ingredients[2];
// const tomatoEl = document.createElement('li');
// tomatoEl.textContent = ingredients[3];
// const greensEl = document.createElement('li');
// greensEl.textContent = ingredients[4];
// const condimentsEl = document.createElement('li');
// condimentsEl.textContent = ingredients[5];

// listEl.append(potatoEl, mushroomsEl, garlicEl, tomatoEl, greensEl, condimentsEl);

const array = [];
ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  array.push(item);
  console.log(item);
});
// console.log(array);

listEl.append(...array);
console.log(listEl);
