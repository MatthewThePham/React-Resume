const express = require('express');
const path = require('path');
const email_api = require('./routes/mailer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Need to make a post request to fill in data
//Email, Name, Message

//Used to send email api to the server
app.get('/get', (req, res, next) => {
    //var email_api = require('./routes/mailer');
    //app.use('/',email_api);

    res.send({ express: 'Connected to server' });
    console.log('Connected to react')
    next();

});


app.use('/api',email_api);



const port = process.env.PORT || 5000;

console.log(`Listening on ${port}`);
app.listen(port);