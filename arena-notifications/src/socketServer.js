const socketIo = require('socket.io');

function initSocketServer(server) {
    const io = socketIo(server, { cors: { origin: "*" } });

    io.on('connection', (socket) => {
        console.log(`Участник подключен: ${socket.id}`);

        // Слушаем событие решения задачи
        socket.on('user_solved', (data) => {
            const { userId, timeTaken, arenaId } = data;
            
            console.log(`Пользователь ${userId} решил задачу за ${timeTaken} сек в арене ${arenaId}`);

            // Оповещаем всех участников конкретной арены
            io.to(arenaId).emit('opponent_solved', {
                userId,
                timeTaken,
                timestamp: Date.now()
            });
        });

        // Подключение к комнате (арене)
        socket.on('join_arena', (arenaId) => {
            socket.join(arenaId);
        });

        socket.on('disconnect', () => {
            console.log(`Участник отключен: ${socket.id}`);
        });
    });
}

module.exports = initSocketServer;
