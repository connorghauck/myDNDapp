const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const login = require('./routes/login');
const register = require('./routes/register');
const charactersheet = require('./routes/charactersheet');
const alignments = require('./routes/alignments');
const characters = require('./routes/characters');
const update = require('./routes/update');
const classes = require('./routes/charclass');
const races = require('./routes/races');
const auth = require('./auth/setup');
const passport = require('passport');
const session = require('express-session');

auth.setup();

const sessionConfig = {
    secret: 'super secret key goes here', // TODO this should be read from ENV
    key: 'user',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60 * 1000,
        secure: false
    }
};


// auth.setup();

const app = express();


app.use(session(sessionConfig));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(passport.initialize());
app.use(passport.session());

app.use('/login', login);
app.use('/register', register);
app.use('/charactersheet', charactersheet);
app.use('/alignments', alignments);
app.use('/races', races);
app.use('/charclass', classes);
app.use('/characters', characters);
app.use('/update', update);

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

// everything beyond this point must be authenticated
app.use(ensureAuthenticated);

app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}

var server = app.listen(3000, function() {
  console.log('Listening on port', server.address().port);
});
