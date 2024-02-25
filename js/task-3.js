const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim(); // Очищаємо значення від пробілів по краях
    if (trimmedValue) {
      nameOutput.textContent = trimmedValue; // Якщо значення не порожнє, встановлюємо його в span
    } else {
      nameOutput.textContent = 'Anonymous'; // Якщо значення порожнє або складається лише з пробілів, встановлюємо "Anonymous"
    }
  });