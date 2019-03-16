const express = require ('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
require('dotenv').config();


app = express();
app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// app.get('/' ,(request, response) => {
//     request.session.name = 'amir'
//     response.send('hello')
//     console.log (req.session); 

// })

const port = process.env.SERVER_PORT || 3000;
app.listen( port, () => {
    console.log(`Server is Listening on port ${port}`);
});