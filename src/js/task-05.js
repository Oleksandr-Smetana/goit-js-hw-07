const inputEl = document.querySelector('#name-input');
const headerNameEl = document.querySelector('#name-output')

console.log(inputEl);
console.log(headerNameEl);

inputEl.addEventListener('input', () => {
    headerNameEl.textContent = inputEl.value ? inputEl.value : 'незнакомец'
});