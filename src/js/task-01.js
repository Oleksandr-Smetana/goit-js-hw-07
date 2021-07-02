const listEl = document.querySelector('#categories');
console.log(`В списке ${listEl.children.length} категории.`);
// console.log(listEl);

// const firstItemEl = listEl.firstElementChild;
// // console.log(firstItemEl);
// console.log(`Категория: ${firstItemEl.querySelector('h2').textContent}`);
// console.log(`Количество элементов: ${firstItemEl.querySelectorAll('li').length}`);

// const secondItemEl = firstItemEl.nextElementSibling;
// // console.log(secondItemEl);
// console.log(`Категория: ${secondItemEl.querySelector('h2').textContent}`);
// console.log(`Количество элементов: ${secondItemEl.querySelectorAll('li').length}`);

// const thirdItemEl = listEl.lastElementChild;
// // console.log(thirdItemEl);
// console.log(`Категория: ${thirdItemEl.querySelector('h2').textContent}`);
// console.log(`Количество элементов: ${thirdItemEl.querySelectorAll('li').length}`);


const itemsEl = listEl.querySelectorAll('.item');
// console.log(itemsEl);

itemsEl.forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
