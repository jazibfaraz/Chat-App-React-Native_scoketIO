const express = require('express');
const app = express();
const socket = require('socket.io');
const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
    console.log('Server is listening on port ' + port);

})

const io = socket(server);

io.on('connection', (socket) => {
    console.log('connection eastablished with soket io..');

})

