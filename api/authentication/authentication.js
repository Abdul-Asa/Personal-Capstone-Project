const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.send('access denied');
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    // res.send(req.user);
  } catch (err) {
    res.send({ err, message: err.message });
  }
  next();
}

module.exports = { authentication };
