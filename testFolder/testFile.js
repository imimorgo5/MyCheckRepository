/**
 * Генерирует случайный пароль.
 * @param {number} length - Длина пароля (по умолчанию 12).
 * @param {Object} options - Настройки наборов символов.
 * @returns {string} Сгенерированный пароль.
 */
function generatePassword(length = 12, options = {}) {
  const {
    includeUppercase = true,
    includeNumbers = true,
    includeSpecial = true
  } = options;

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+~`|}{[]:;?><,./-=\\';

  let characterPool = lowercase;
  let guaranteedCharacters = [];

  // Гарантируем наличие хотя бы одного символа из выбранных категорий
  if (includeUppercase) {
    characterPool += uppercase;
    guaranteedCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  }
  if (includeNumbers) {
    characterPool += numbers;
    guaranteedCharacters.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (includeSpecial) {
    characterPool += special;
    guaranteedCharacters.push(special[Math.floor(Math.random() * special.length)]);
  }

  // Заполняем оставшуюся длину случайными символами из общего пула
  const remainingLength = length - guaranteedCharacters.length;
  const randomCharacters = Array.from({ length: remainingLength }, () => {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    return characterPool[randomIndex];
  });

  // Объединяем и перемешиваем итоговый массив символов
  return [...guaranteedCharacters, ...randomCharacters]
    .sort(() => Math.random() - 0.5)
    .join('');
}

// Примеры использования:
console.log('Стандартный пароль:', generatePassword()); 
// Вывод: например, "xG8!pQ2mZ9vA"

console.log('Длинный пароль только из букв:', generatePassword(20, { includeNumbers: false, includeSpecial: false }));
// Вывод: например, "jKnsDfYgHjKlMnOpQrSt"
