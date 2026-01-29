//initialize the socket.io for the client using id() functions
const clientIO = io();

const logsDiv = document.getElementById('event-log');

const logEvent = (message) => {
    const logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    logEntry.textContent = message;
    logsDiv.appendChild(logEntry);
    logsDiv.scrollTop = logsDiv.scrollHeight; 
};

clientIO.on("connect", () => {
    logEvent(`Connected with server`)

    document.getElementById('client-id').textContent = `Client ID - ${clientIO.id}`;
}); 

const sendPing = () => {
    logEvent(`\nPing button clicked`);

    
    //send ping event to server
    const message = 'Hello from Client';
    //emit() send the event
    clientIO.emit('ping', message);

    // logEvent(`\nON CLIENT - PING - SENT`)
    logEvent(`\nON CLIENT - PING - SENT - with message: ${message}`);
};

// listen for ping-ack event from server
clientIO.on('ping-ack', (response) => {
    logEvent(`\nON CLIENT - PING - SENT - with message: ${response}`);
});

const sendChatMessage = () => {
    logEvent('\nChat button clicked');

    const message = document.getElementById('message-input').value
    
    if (message.trim()){
        //TODO - send message from client
        clientIO.emit('chat-from-client', message);

        logEvent(`\nON CLIENT - CHAT - SENT - with message : ${message}`);
    }else{
        logEvent(`\nON CLIENT - CHAT - ERROR - Message is empty. Can't send.`);
    }
};

//listener for chat-ack event from server
clientIO.on('chat-ack', (response) => {
    logEvent(`\nON CLIENT - CHAT-ACK - RECEIVED - Server acknowledged chat message with response: ${response}`);
});

const sendFeedback = () =>{
    logEvent('\nSend feedback button clicked');
    const userInput = document.getElementById('feedback-message').value;

    const feedback = {
        date:  new Date(),
        user: clientIO.id,
        message: userInput
    }

    // TODO - send feedback from client
    clientIO.emit('feedback-from-client', feedback);

    logEvent(`\nON CLIENT - FEEDBACK - SENT : ${JSON.stringify(feedback)}`);
};

clientIO.on('feedback-ack', (response) => {
    logEvent(`\nON CLIENT - FEEDBACK-ACK - RECEIVED - Server acknowledged feedback with response: ${response}`);
});

const joinGroup = () => {
    logEvent('\nJoin group button clicked');
    
    // TODO - send group join request

    // logEvent(`\nON CLIENT - JOIN-GROUP - SENT - request sent.`)
};

const leaveGroup = () => {
    logEvent('\Leave group button clicked');

    // TODO - send group leave request

    // logEvent(`\nON CLIENT - LEAVE-GROUP - SENT - request sent.`)
};

const disconnectServer = () => {
    logEvent('\nDisconnect server button clicked');

    // TODO - send disconnect  request

    // logEvent(`\nON CLIENT - DISCONNECT - SENT - request sent.`)
};