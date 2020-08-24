'use strict'

const valInput = document.querySelector('#validation-input');
const neededValue = document.querySelector('#validation-input[data-length="6"]');

const checkQuantity = function () {
    if (valInput.value.length >= valInput.dataset.length) {
        valInput.classList.add("valid");
        valInput.classList.replace("invalid", "valid");
    } else if (valInput.value.length === 0) {
        valInput.classList.remove("valid", "invalid");

    } else {
        valInput.classList.add("invalid");
        valInput.classList.replace("valid", "invalid");
    }
}

valInput.addEventListener('change', checkQuantity);