// middleware/apiKeyAuth.js

module.exports = function (req, res, next) {
  const userKey = req.headers['x-api-key'];

  if (!userKey || userKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }

  next(); // all good, move on to the real route
};
