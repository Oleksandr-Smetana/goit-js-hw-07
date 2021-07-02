const counterValue = document.querySelector('#value');
const decrementButtonEl = document.querySelector('#counter button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('#counter button[data-action="increment"]');

// console.log(counterValue);
// console.log(decrementButtonEl);
// console.log(incrementButtonEl);

let value = 0;

decrementButtonEl.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
});

incrementButtonEl.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
});

