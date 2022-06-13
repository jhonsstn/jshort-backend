const { Redirects } = require('../models');
const shortid = require('shortid');
const MissingUrlError = require('../errors/MissingUrlError');

module.exports = {
  async create(req, res) {
    try {
      const { longUrl } = req.body;
      const id = shortid();
      const shortUrl = `https://j-short.herokuapp.com/${id}`;
      const url = await Redirects.create({
        id,
        longUrl,
        shortUrl,
        clicks: 0,
      });
      res.json({ url });
    } catch (error) {
      res.status(400).json({ Message: error.message });
    }
  },

  async get(req, res) {
    try {
      const { id } = req.params;
      const redirect = await Redirects.findAll({
        where: { id },
        attributes: ['longUrl', 'clicks'],
        raw: true,
      });
      if (redirect.length === 0) throw new MissingUrlError();
      await Redirects.update(
        { clicks: redirect[0].clicks + 1 },
        { where: { id } }
      );
      res.redirect(301, redirect[0].longUrl);
    } catch (error) {
      res.status(404).json({ Message: error.message });
    }
  },

  async clicks(req, res) {
    try {
      const { id } = req.params;
      const redirect = await Redirects.findAll({
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

  async getAll(_req, res) {
    try {
      const redirects = await Redirects.findAll({});
      res.status(200).json(redirects);
    } catch (error) {}
  },
};
