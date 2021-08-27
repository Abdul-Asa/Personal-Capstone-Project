const jwt = require('jsonwebtoken');
//Add admin authentication

function userAuthentication(req, res, next) {
  const token = req.header('token');
  if (!token) return res.send('access denied');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    if (req.user._id !== req.params.id) {
      res.send('wrong user');
    }
  } catch (err) {
    res.send({ err, message: err.message });
  }
  next();
}

function adminAuthentication(req, res, next) {
  const token = req.header('token');
  if (!token) return res.send('access denied');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    // req.user = verified;
    // if (verified.id === req.params.id) {
    //   res.send('wrong user');
    // }
    // res.send(verified);
  } catch (err) {
    res.send({ err, message: err.message });
  }
  next();
}

module.exports = { userAuthentication, adminAuthentication };
