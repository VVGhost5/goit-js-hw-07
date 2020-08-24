"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingridients");

console.log(ingredientsList);

const createItem = (items) =>
  items.forEach((item) => {
    const listItem = document.createElement("li");
    ingredientsList.appendChild(listItem);
    listItem.textContent = item;
  });

console.log(createItem(ingredients));
