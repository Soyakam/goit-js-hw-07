// Функція для генерування випадкового кольору у hex-форматі
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');

    // Обробник події для кліку на кнопку
    button.addEventListener('click', function() {
      // Генеруємо випадковий колір
      const randomColor = getRandomHexColor();
      
      // Змінюємо колір фону елемента <body>
      document.body.style.backgroundColor = randomColor;

      // Задаємо текстовий вміст span.color
      colorSpan.textContent = randomColor;
    });
  });