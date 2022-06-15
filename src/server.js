const express = require('express');
const cors = require('cors');
const RedirectCreateController = require('./controllers/RedirectCreateController');
const urlVerification = require('./middleware/urlVerificationMiddleware');
const RedirectGetAllController = require('./controllers/RedirectGetAllController');
const RedirectGetController = require('./controllers/RedirectGetController');
const RedirectClicksController = require('./controllers/RedirectClicksController');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.post('/create', urlVerification, RedirectCreateController.exec);

app.get('/all', RedirectGetAllController.exec);

app.get('/:id', RedirectGetController.exec);

app.get('/:id/clicks', RedirectClicksController.exec);

app.get('/', (_req, res) => {
  res.send('Em construção...');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
