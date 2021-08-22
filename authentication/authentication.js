const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('access denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = verified;
    res.send(req.user);
  } catch (err) {
    res.status(400).send({ err, message: err.message });
  }
  next();
}

module.exports = { authentication };
