// dependencies : npm install express socket.io nodemon
// to run the app : npx nodemon server.js

const express = require('express')
const path = require('path');
const socketIO = require('socket.io'); // import socket.io module

const SERVER_PORT = process.env.PORT || 3000
const app = express()

app.use(express.static(path.join(__dirname, 'socket/views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'socket/views/client.html'))
})

//start listening to server on PORT
const appServer = app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}/`)
})

// associate socket.io with the socket server
const ioServer = socketIO(appServer);

//on() function listens to connection event
// when the event occurs, callback function is executed
ioServer.on("connection", (socket) => {
    console.log(`Client connected. Client ID: ${socket.id}`);

    //listen to 'ping' event from client
    socket.on('ping', (data) => {
        //perform necessary operations to process the event request
        console.log(`ON SERVER - PING - RECEIVED from Client ${socket.id} with message: ${data}`);

        // emitting event from server back to client
        socket.emit('ping-ack', "Hello from server")
        console.log(`ON SERVER - PING-ACK - SENT to Client ${socket.id}`);
    });

    
    //listener for 'chat-from-client' event
    socket.on('chat-from-client', (data) => {
        console.log(`ON SERVER - CHAT-FROM-CLIENT - RECEIVED - with data : ${data}`);

        //emit the event to all the clients
        socket.emit('chat-ack')
        console.log(`ON SERVER - CHAT-ACK - SENT - chat message received`);
    });

    //listener for 'feedback-from-client' event
    socket.on('feedback-from-client', (data) => {
        console.log(`ON SERVER - FEEDBACK-FROM-CLIENT - RECEIVED - with data : ${JSON.stringify(data)}`);

        //perform necessary operations to process the feedback data

        //emit the event back to client acknowledging feedback receipt
        socket.emit('feedback-ack', `Feedback received from ${data.user} on ${data.date}`);
        console.log(`ON SERVER - FEEDBACK-ACK - SENT - feedback acknowledged to Client ${socket.id}`);
    });

    //when client disconnected
    socket.on("disconnect", () => {
        //perform necessary wind up operations
        console.log(`Client ${socket.id} is disconnected`);
    });
});