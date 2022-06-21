const { Redirects } = require('../models');
const crypto = require('crypto');

module.exports = {
  async exec(req, res) {
    try {
      const { longUrl } = req.body;
      const id = crypto.randomBytes(3).toString('hex');
      const shortUrl = `https://jshort-backend.herokuapp.com/${id}`;
      const url = await Redirects.create({
        id,
        longUrl,
        shortUrl,
        clicks: 0,
      });
      res.json([url]);
    } catch (error) {
      res.status(400).json({ Message: error.message });
    }
  },
};
