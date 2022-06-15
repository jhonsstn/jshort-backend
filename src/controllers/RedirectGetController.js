const { Redirects } = require('../models');

module.exports = {
  async exec(req, res) {
    try {
      const { id } = req.params;
      const redirect = await Redirects.findOne({
        where: { id },
        raw: true,
      });
      if (redirect.length === 0) throw new MissingUrlError();
      await Redirects.update(
        { clicks: redirect.clicks + 1 },
        { where: { id } }
      );
      res.redirect(301, redirect.longUrl);
    } catch (error) {
      res.status(404).json({ Message: error.message });
    }
  },
};
