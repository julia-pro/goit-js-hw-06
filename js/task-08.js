document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Зупиняємо стандартну поведінку форми
  
      // Отримуємо значення полів форми
      const email = form.elements.email.value;
      const password = form.elements.password.value;
  
      // Перевіряємо, чи всі поля заповнені
      if (email.trim() === '' || password.trim() === '') {
        alert('Будь ласка, заповніть всі поля форми.');
      } else {
        // Створюємо об'єкт з даними користувача
        const userData = {
          email,
          password,
        };
  
        // Виводимо об'єкт у консоль
        console.log(userData);
  
        // Очищаємо значення полів форми
        form.reset();
      }
    });
  });


  
//   Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.