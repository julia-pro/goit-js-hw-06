function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Отримуємо посилання на необхідні елементи DOM
const widget = document.querySelector('.widget');
const colorText = widget.querySelector('.color');
const changeColorButton = widget.querySelector('.change-color');

// Функція, яка змінює колір фону та відображає значення кольору
function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}

// Додаємо обробник події для кнопки "Change color"
changeColorButton.addEventListener('click', changeBackgroundColor);

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }