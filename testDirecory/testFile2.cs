using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CSharpExample;

// 1. Определение модели данных с помощью modern C# (Record)
public record TaskItem(int Id, string Title, bool IsCompleted);

class Program
{
    // Асинхронная точка входа в программу
    static async Task Main(string[] args)
    {
        Console.WriteLine("=== Старт программы на C# ===");

        // 2. Создание и инициализация коллекции (списка)
        var tasks = new List<TaskItem>
        {
            new TaskItem(1, "Изучить синтаксис JSON", true),
            new TaskItem(2, "Написать скрипт на JavaScript", false),
            new TaskItem(4, "Попрактиковать основы C# и .NET", false)
        };

        // 3. Вывод данных с фильтрацией (LINQ) и интерполяцией строк
        Console.WriteLine("\nСписок невыполненных задач:");
        foreach (var task in tasks)
        {
            if (!task.IsCompleted)
            {
                // Использование знака $ для подстановки переменных в строку
                Console.WriteLine($"- [{task.Id}] {task.Title}");
            }
        }
    }

    // 5. Пример асинmanaged-метода (Async/Await)
    private static async Task SendReportAsync(int count)
    {
        // Имитируем задержку сетевого запроса на 1.5 секунды
        await Task.Delay(2000);
        Console.WriteLine($"Отчет по {count} задачам успешно отправлен!");
    }
}
