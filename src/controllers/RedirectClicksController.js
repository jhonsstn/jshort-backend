const { Redirects } = require('../models');
const MissingUrlError = require('../errors/MissingUrlError');

module.exports = {
  async exec(req, res) {
    try {
      const { id } = req.params;
      const redirect = await Redirects.findOne({
        where: { id },
        attributes: ['clicks'],
        raw: true,
      });
      if (redirect.length === 0) throw new MissingUrlError();
      res.status(200).json({ id, clicks: redirect[0].clicks });
    } catch (error) {
      res.status(404).json({ Message: error.message });
    }
  },
};
