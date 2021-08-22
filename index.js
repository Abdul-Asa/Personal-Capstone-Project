const express = require('express');
const app = express();
const path = require('path');
const moongose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const privateRoute = require('./routes/app');
const port = process.env.PORT || 3000;
dotenv.config();

//DATABASE
moongose.connect(
  process.env.URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
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

//ROUTES
app.use(express.static('front end'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('front end', 'index.html'));
});
app.use('/users', authRoute);
app.use('/private', privateRoute);

app.listen(port, () => {
  console.log('Running on localhost:' + port);
});
