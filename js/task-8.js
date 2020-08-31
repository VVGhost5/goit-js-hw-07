"use strict";

const Refs = {
    input: document.querySelector("#controls input"),
    boxes: document.querySelector("#boxes"),
    buttonRender: document.querySelector('button[data-action="render"]'),
    buttonDestroy: document.querySelector('button[data-action="destroy"]'),
};

let quantityOfObjects = 0;

const boxSizes = {
    Width: 30,
    Height: 30,
    WidthIncrement: 10,
    HeightIncrement: 10,
};

const createBox = () => {
    const newBox = document.createElement("div");
    Refs.boxes.appendChild(newBox);
    newBox.style.border = "1px solid black";
    newBox.style.width = `${boxSizes.Width}px`;
    newBox.style.height = `${boxSizes.Height}px`;

    const changeSize = () => {
        boxSizes.Width += boxSizes.WidthIncrement;
        boxSizes.Height += boxSizes.HeightIncrement;
    };
    changeSize();

    const randomizeColor = () => {
        newBox.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * Math.floor(256)
    )}, ${Math.floor(Math.random() * Math.floor(256))}, ${Math.floor(
      Math.random() * Math.floor(256)
    )})`;
    };
    randomizeColor();
};

const destroyBox = () => {
    if (Refs.boxes.children.length) {
        Refs.boxes.removeChild(Refs.boxes.lastChild);
        boxSizes.Width -= boxSizes.WidthIncrement;
        boxSizes.Height -= boxSizes.HeightIncrement;
    }
};

const onClick = () => {
    for (let i = 0; i < quantityOfObjects; i++) {
        createBox(i);
    }
};

const inputHandler = (event) => {
    quantityOfObjects = Number(event.target.value);
};

Refs.buttonRender.addEventListener("click", onClick);
Refs.buttonDestroy.addEventListener("click", destroyBox);
Refs.input.addEventListener("input", inputHandler);