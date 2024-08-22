const express = require('express');

const indexRouter = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: 0
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: 1
    }
];

indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get('/', (req, res) => {
    res.render('index', {title: 'Mini Message Board', messages: messages });
});

indexRouter.get('/new', (req, res) =>{
    res.render('form');
});

indexRouter.post('/new', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    messages.push({
        text: message,
        user: username,
        added: new Date(),
        id: messages.length
    });
    res.redirect('/');
});

indexRouter.get('/messages', (req, res) => {
    res.render('messages', { message: messages[req.params.id] })
});

console.log(messages);

module.exports = indexRouter;