const http = require('http');
const initSocketServer = require('./src/socketServer');

const server = http.createServer();
initSocketServer(server);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Сервер уведомлений запущен на порту ${PORT}`);
});
