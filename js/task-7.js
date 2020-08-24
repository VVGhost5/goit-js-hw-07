'use strict'

const inputRef = document.querySelector("#font-size-control");
const outputRef = document.querySelector("#text");

console.dir(outputRef);

const changeFontSize = () => {
    inputRef.setAttribute('min', 0);
    inputRef.setAttribute('max', 40);
    outputRef.style.fontSize = `${inputRef.value}px`;
}
inputRef.addEventListener('input', changeFontSize);