require('dotenv').config();
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const { log } = console;
const app = express();
const PORT = process.env.PORT || 3000;

//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'questionnaire.html'));
// });

// email, subject, text
app.post('/email', (req, res) => {
    const {email, subject, text} = req.body;
    log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
        }
        log(email)
        log('Email sent!!!');
        return res.json({ message: 'Email sent!!!!!' });
    });
});

// Render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'questionnaire.html'));
});

// Error page
app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

// Email sent page
app.get('/email/sent', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'emailMessage.html'));
});


app.listen(PORT, () => log("server is starting on Port", 3000));