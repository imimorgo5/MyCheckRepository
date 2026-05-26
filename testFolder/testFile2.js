// Функция для фильтрации четных чисел
function getEvenNumbers(numbersArray) {
  const result = []; // Создаем пустой массив для результата

  // Цикл обходит каждый элемент переданного массива
  for (let i = 0; i < numbersArray.length; i++) {
    const currentNumber = numbersArray[i];

    // Проверяем, делится ли число на 2 без остатка
    if (currentNumber % 2 === 0) {
      result.push(currentNumber); // Добавляем четное число в массив
    }
  }

  return result; // Возвращаем итоговый массив
}

// Исходные данные
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Вызов функции и сохранение результата
const evenNumbers = getEvenNumbers(myNumbers);

// Вывод результата в консоль: [2, 4, 6, 8, 10]
console.log("Четные числа:", evenNumbers);
