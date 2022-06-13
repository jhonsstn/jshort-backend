const express = require('express');
const cors = require('cors');
const RedirectsController = require('./controllers/RedirectsController');
const urlVerification = require('./middleware/urlVerificationMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create', urlVerification, RedirectsController.create);

app.get('/all', RedirectsController.getAll);

app.get('/:id', RedirectsController.get);

app.get('/:id/clicks', RedirectsController.clicks);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
