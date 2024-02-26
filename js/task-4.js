
const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми (перезавантаження сторінки)

    // Отримуємо всі поля форми
    const elements = new elements(loginForm);

    // Створюємо об'єкт для збереження значень полів форми
    const formValues = {};

    // Перебираємо всі елементи форми
    elements.forEach((value, key) => {
      // Очищаємо значення від пробілів по краях і зберігаємо їх у об'єкт formValues
      formValues[key] = value.trim();
    });

    // Перевіряємо, чи всі поля заповнені
    const allFieldsFilled = Object.values(formValues).every(value => value !== '');

    if (!allFieldsFilled) {
      // Якщо не всі поля заповнені, виводимо alert
      alert('All form fields must be filled in');
    } else {
      // Інакше виводимо об'єкт з введеними даними в консоль
      console.log(formValues);
      // Очищаємо значення полів форми
      loginForm.reset();
    }
  });