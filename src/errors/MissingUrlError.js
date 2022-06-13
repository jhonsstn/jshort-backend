class MissingUrlError extends Error {
  constructor() {
    super();
    this.name = 'MissingUrl';
    this.message = 'URL não encontrada!';
  }
}

module.exports = MissingUrlError;
