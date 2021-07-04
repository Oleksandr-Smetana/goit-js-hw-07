const inputEl = document.querySelector('#controls input');
const renderButtonEl = document.querySelector('#controls button[data-action="render"]');
const destroyButtonEl = document.querySelector('#controls button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');
console.dir(inputEl);

// const createBoxes = function () {
//     const boxesArray = [];
//     boxesArray.length = inputEl.value;
//     console.log(boxesArray);
// };

// renderButtonEl.addEventListener("click", event => createBoxes(inputEl.value));