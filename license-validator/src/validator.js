const fs = require('fs').promises;

async function validateLicense(filePath, headerRegex) {
    const content = await fs.readFile(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Проверяем первые 5 строк на наличие заголовка
    const searchArea = lines.slice(0, 5).join('\n');
    
    if (!headerRegex.test(searchArea)) {
        return { valid: false, message: 'Отсутствует обязательный заголовок лицензии' };
    }
    
    return { valid: true };
}

module.exports = { validateLicense };
