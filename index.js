const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const databaseConnection = require('./api/database/database');
const authRoute = require('./api/routes/auth');
const privateRoute = require('./api/routes/user');
const port = process.env.PORT || 3000;
dotenv.config();

//DATABASE
databaseConnection;

//MIDDLEWARE
app.use((req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//ROUTES
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*/', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
} else {
  app.use(express.static('front end'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('front end', 'index.html'));
  });
  app.post('/', (req, res) => res.send(req.body));
}

app.use('/auth', authRoute);
app.use('/user', privateRoute);

app.listen(port, () => {
  console.log('Running on localhost:' + port);
});
