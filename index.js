const express = require('express');
const path = require('path');
const email_api = require('./routes/mailer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Need to make a post request to fill in data
//Email, Name, Message

//Used to send email api to the server
app.use('/api',email_api);


//for production aka heroku
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

const port = process.env.PORT || 5000;

console.log(`Listening on ${port}`);
app.listen(port);