#!/usr/bin/env node
const { validateLicense } = require('../src/validator');

const [,, filePath] = process.argv;
// Пример регулярки: ищем фразу "Copyright (c) Code Masters"
const LICENSE_REGEX = /\/\*[\s\S]*?Copyright \(c\) Code Masters[\s\S]*?\*\//;

async function run() {
    if (!filePath) {
        console.error('Ошибка: Укажите путь к файлу.');
        process.exit(1);
    }

    try {
        const result = await validateLicense(filePath, LICENSE_REGEX);
        if (!result.valid) {
            console.error(`Ошибка валидации: ${result.message} в файле ${filePath}`);
            process.exit(1);
        }
        console.log('Валидация пройдена успешно.');
        process.exit(0);
    } catch (err) {
        console.error(`Ошибка чтения файла: ${err.message}`);
        process.exit(1);
    }
}

run();
