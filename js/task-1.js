'use strict'

const categoriesRef = document.querySelector('#categories');
const CategoriesItemRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.children.length} элементов`);

CategoriesItemRef.forEach(el => {
    console.log(`Категория : ${el.children[0].textContent}`);
    console.log(`Количество элементов : ${el.children[1].children.length}`);
});