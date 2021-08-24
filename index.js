const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const moongose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./api/routes/auth');
const privateRoute = require('./api/routes/app');
const port = process.env.PORT || 3000;
dotenv.config();

//DATABASE
moongose.connect(
  process.env.URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err);
    console.log('connected to db!');
  }
);

//MIDDLEWARE
app.use((req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//ROUTES
// app.use(express.static('front end'));
app.get('/', (req, res) => {
  // res.sendFile(path.resolve('front end', 'index.html'));
  res.send('welcome');
});
app.post('/', (req, res) => res.send(req.body));
app.use('/users', authRoute);
app.use('/private', privateRoute);

app.listen(port, () => {
  console.log('Running on localhost:' + port);
});
