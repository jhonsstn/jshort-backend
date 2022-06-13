function urlVerification(req, res, next) {
  try {
    const { longUrl } = req.body;
    if (!longUrl) throw new Error('Necessário informar URL!');
    const regex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    if (!regex.test(longUrl)) throw new Error('URL invalida!');
    next();
  } catch (error) {
    res.status(400).json({ Message: error.message });
  }
}

module.exports = urlVerification;
