const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        credentials: true
    }
});
const path = require('path');
const cors = require('cors');

const Datastore = require('nedb');

const chats = new Datastore({
    filename: path.resolve(__dirname, 'chats.db'),
    autoload: true,
});

const profile = new Datastore({
    filename: path.resolve(__dirname, 'profile.db'),
    autoload: true,
});

app.use(express.json());
app.use(cors());

app.get('/chats', (req, res) => {
    chats.find( {}, (err, docs) => {
        if (err){ 
            return res.status(500).json({message: 'Unexpected error'})
        }
        res.json(docs);
    });
})

app.delete('/chats/:id', (req, res) => {
    chats.remove({_id: req.params.id}, (err) => {
        if (err){
            return res.status(500).json({message: 'Unexpected error'})
        }
        res.json({message: 'succes'})
    })
})

app.get('/profile', (req, res) => {
    profile.findOne({}, (err, doc) => {
        if (err){
            return res.status(500).json({message: 'Unexpected error'})
        }
        res.json(doc);
    });
});

app.post('/profile', (req, res) => {
    profile.findOne({}, (err, doc) => {
        if (err){
            return res.status(500).json({message: 'Unexpected error'})
        }
        if (doc){
            profile.update({}, req.body, {}, (err, numReplaced) => {
                if (err || numReplaced <= 0){
                    return res.status(500).json({message: 'Unexpected error'})
                }
                return res.status(500).json({message: 'Succes'})
            });
        }else{
            profile.insert(req.body, (err, newDoc) => {
                if (err){
                    return res.status(500).json({message: 'Unexpected error'}) 
                }
                res.status({message: 'Succes'})
            });
        };
    });
});
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnected', () => {
        console.log('user disconnected');
    });

    socket.on('new chat', (body) => {
        chats.insert({...body, messages: []}, (err, newDoc) => {
            socket.broadcast.emit('new chat', newDoc);
            socket.emit('new chat', newDoc);
        });
    });

    socket.on('chat message', (body) => {
        const { chatId, ...message } = body;
        chats.update({_id: chatId}, {$push: {messages: message}}, {},() => {
            socket.broadcast.emit('chat message', body);
            socket.emit('chat message', body);

            setTimeout(() => {
                const botMessage = {chatId, author: 'Bot', text: `Hello ${body.author}! The bot is connected`}
                chats.update({_id: chatId}, {$push: {messages: botMessage}}, {},() =>{
                    socket.broadcast.emit('chat message', botMessage);
                    socket.emit('chat message', botMessage);
                })
            }, 2000)
            
        })
    });
});

http.listen(3000, function (){
    console.log(`Listening on 3000 port`);
})
