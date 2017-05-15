const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const rank = {
  Data: [
    {
      name: 'Karl',
      time: 34,
      mode: 1,
    },
    {
      name: 'Leo',
      time: 38,
      mode: 2,
    },
    {
      name: 'Roger',
      time: 100,
      mode: 3,
    },
    {
      name: 'Roger',
      time: 100,
      mode: 3,
    },
    {
      name: 'Roger',
      time: 103,
      mode: 1,
    },
    {
      name: 'Roger',
      time: 120,
      mode: 2,
    },
  ],
};

let TempRank = rank;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/getData', (req, res) => {
  res.json(TempRank);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
