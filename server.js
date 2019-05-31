const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      helmet = require('helmet'),
      cors = require('cors'),
      PORT = process.env.PORT || 4000,
      app = express();

const corsOptions = {
      origin: ['http://localhost:4000'],
      credentials: true,
      optionsSuccessStatus: 200}
app.use(cors(corsOptions));
app.options('CHANGE ME', cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
      secret: process.env.SESSION_SECRET || 'Double secrete probation',
      resave: false,
      saveUninitialized: false }));
app.use(helmet());

// ------------ WEB ROUTES ------------
app.get('/', (req, res) => { res.send('<p>Hi</p>'); });

// ------------ API ROUTES ------------
const ctrl = require('./controllers');
// auth
app.use('/api/v1/auth', ctrl.auth);
// users
app.use('/api/v1/users', ctrl.users);

// ------------ START SERVER ------------
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});