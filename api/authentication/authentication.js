const jwt = require('jsonwebtoken');

function userAuthentication(req, res, next) {
  const token = req.header('token');
  if (!token) return res.send({ message: 'access denied' });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    if (req.user._id !== req.params.id) {
      res.send({ message: 'wrong user' });
    }
  } catch (err) {
    res.send({ err, message: err.message });
  }
  next();
}

function adminAuthentication(req, res, next) {
  const token = req.header('token');
  if (!token) return res.send({ message: 'access denied' });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    // if (req.user._id !== req.params.id) {
    //   res.send('wrong user');
    // }
    if (req.user.role !== 'admin') {
      res.send({
        message: "You don't have the authority to access this route",
      });
    }
    // res.send(verified);
  } catch (err) {
    res.send({ err, message: err.message });
  }
  next();
}

module.exports = { userAuthentication, adminAuthentication };
