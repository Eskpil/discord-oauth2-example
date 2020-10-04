require('dotenv').config();
require('./strategies/discordstrategy');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const db = require('./database/database');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors') 

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.use( cors( {
    origin: [ 'http://localhost:3000' ],
    credentials: true,
    optionsSuccessStatus: 200 
})) 

db.then(() => console.log('Connected to MongoDB.')).catch(err => console.log(err));
// Routes
const authRoute = require('./routes/auth');
const { Http2ServerRequest } = require('http2');


app.use(session({
    secret: 'some random secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    resave: false,
    name: 'discord.oauth2',
    store: new MongoStore({ mongooseConnection:  mongoose.connection })
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use('/auth', authRoute).catch((err) => console.log(err)) 



app.listen(PORT, () => console.log(`Now listening to requests on port ${PORT}`));

// https://discordapp.com/developers/docs/topics/permissions