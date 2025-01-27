const input = document.querySelector("input");

let firstThreeNum = '';
let previousVal = '';

input.addEventListener('input', (e) => {
    const inputValue = e.target.value;
    
    if (inputValue.length === 4 && previousVal.length < inputValue.length) {
        firstThreeNum = inputValue.substring(0,3);
        input.value = `+(${firstThreeNum}) - ${inputValue[inputValue.length-1]}`;
    }

    previousVal = inputValue;
})