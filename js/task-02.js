const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients"); // Отримуємо посилання на список ul#ingredients

// Проходимо по масиву ingredients та додаємо кожен інгредієнт до списку
ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Створюємо новий елемент li
  li.textContent = ingredient; // Додаємо текстовий вміст до li
  li.classList.add("item"); // Додаємо клас "item" до li
  ul.appendChild(li); // Додаємо li до списку ul
});



// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

