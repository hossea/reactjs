const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New WS Connection...');

    // Listen for chatMessage
    socket.on('chatMessage', (msg) => {
        io.emit('message',msg);
    });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;

// Start the server, listening on the defined port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});







