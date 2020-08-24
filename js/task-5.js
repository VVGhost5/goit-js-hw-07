'use strict'

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const inputName = (name) => {
    if (name.target.value === '') {
        return outputRef.textContent = 'незнакомец';
    }
    return outputRef.textContent = name.target.value;
}

inputRef.addEventListener('input', inputName);