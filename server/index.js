const express = require ('express');
const bodyParser = require('body-parser');
const session = require ('express-session');
require('dotenv').config();
const checkForSession = require ('./middlewares/checkForSession');





app = express();
app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use( checkForSession );








const port = process.env.SERVER_PORT || 3000;
app.listen( port, () => {
    console.log(`Server is Listening on port ${port}`);
});