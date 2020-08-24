"use strict";


const incrementButtonRef = document.querySelector('button[data-action="increment"]');

const decrementButtonRef = document.querySelector('button[data-action="decrement"]');

const valueRef = document.querySelector('#value');
let CounterValue = +valueRef.textContent;

const increment = function () {
    CounterValue++;
    return valueRef.textContent = CounterValue;
}

const decrement = function () {
    CounterValue--;
    return valueRef.textContent = CounterValue;
}


incrementButtonRef.addEventListener('click', increment);
decrementButtonRef.addEventListener('click', decrement);