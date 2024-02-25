const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll("li.item");
console.log('Кількість категорій ', categoriesItem.length);



categoriesItem.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li');
    console.log(`Категорія: ${categoryName}, Кількість елементів: ${categoryItems.length}`);
});