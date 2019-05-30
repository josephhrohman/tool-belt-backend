const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      PORT = process.env.PORT || 4000,
      app = express();

const corsOptions = {
      origin: 'CHANGE ME',
      credentials: true}

app.options('CHANGE ME', cors());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({
      secret: process.env.SESSION_SECRET || 'Double secrete probation',
      resave: false,
      saveUninitialized: false }));

// ------------ WEB ROUTES ------------
app.get('/', (req, res) => { res.send('<p>api page</p>'); });

// ------------ API ROUTES ------------
// // users
// app.use('/api/v1/users', usersCtrl);
// // posts
// app.use('/api/v1/posts', postsCtrl);
// // all auth
// app.use('/api/v1/auth', authCtrl);
// // cities
// app.use('/api/v1/cities', cityCtrl);

// ------------ START SERVER ------------
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});