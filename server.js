const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const rank = {
  Data: [],
};

const TempRank = rank;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/getData', (req, res) => {
  res.json(TempRank);
});

app.post('/api/sendData', (req) => {
  TempRank.Data.push(JSON.parse(JSON.stringify(req.body)));
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
