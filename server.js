const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      helmet = require('helmet');
      // multer = require('multer'),
      cors = require('cors'),
      PORT = process.env.PORT || 4000,
      app = express();

const auth = require('./controllers/auth'),
      projects = require('./controllers/project'),
      tools = require('./controllers/tool'),
      users = require('./controllers/user');

app.use(helmet());

app.use(session({
      secret: process.env.SESSION_SECRET || 'double secret probation',
      resave: false,
      saveUninitialized: false}));
      
const corsOptions = {
      origin: ['http://localhost:3000'],
      credentials: true, //this sends the cookie in the header if true
      optionsSuccessStatus: 200 //for smart devises and super old OSs (legacy browsers)
      };
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
      res.send('<p>API TOWN</p>');});

app.use('/api/v1/auth', auth);
app.use('/api/v1/projects', projects);
app.use('/api/v1/tools', tools);
app.use('/api/v1/users', users);

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)});