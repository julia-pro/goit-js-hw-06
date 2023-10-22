// Отримуємо посилання на елементи DOM
const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

// Додаємо обробник події input на елементі input#font-size-control
fontSizeControl.addEventListener('input', () => {
  // Отримуємо значення з input
  const fontSize = fontSizeControl.value;

  // Змінюємо розмір шрифту тексту в елементі span#text
  textElement.style.fontSize = fontSize + 'px';
});


// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>