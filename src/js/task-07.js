const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputRangeEl.value = 16;

const onInputRateChange = (event) => {
    // console.dir(event.target);
    textEl.style.fontSize = event.target.value + "px";
};

inputRangeEl.addEventListener('input', onInputRateChange);
