const inputEl = document.querySelector('#controls input');
const renderButtonEl = document.querySelector('#controls button[data-action="render"]');
const destroyButtonEl = document.querySelector('#controls button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

renderButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);


function createBoxes() {
    const boxesContainer = [];
    const preArray = [...Array(Number(inputEl.value)).keys()];
    
    preArray.map((box, idx) => {
        box = document.createElement('div');
        box.style.backgroundColor =
        '#' + String(Math.random()).substring(2, 8);
        box.style.width = `${30 + idx * 10}px`;
        box.style.height = `${30 + idx * 10}px`;
        box.style.margin = '10px';
        boxesContainer.push(box);
    });
    boxesEl.append(...boxesContainer);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
