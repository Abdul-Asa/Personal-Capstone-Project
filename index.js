const express = require('express');
const app = express();
const moongose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');
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
app.get('/', (req, res) => {
  res.send('don"t waste  my time');
});
app.use('/users', authRouter);

app.listen(port, () => {
  console.log('Running on localhost:' + port);
});
