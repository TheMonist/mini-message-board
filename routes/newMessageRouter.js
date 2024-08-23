const express = require('express');
const newMessageRouter = express.Router();

newMessageRouter.use('/', (req, res, next) => {
    res.render('messages', { title: 'New Message', messages: messages[req.params.id] });
    next();
});

newMessageRouter.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
});

module.exports = newMessageRouter;