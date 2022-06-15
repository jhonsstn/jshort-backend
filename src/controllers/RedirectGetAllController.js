const { Redirects } = require('../models');
const MissingUrlError = require('../errors/MissingUrlError');

module.exports = {
  async exec(_req, res) {
    try {
      const redirects = await Redirects.findAll({});
      res.status(200).json(redirects);
    } catch (error) {}
  },
};
