const express = require('express');

const app = express();

app.get('/api/transactions', (req, res) => {
  res.send(mockdata);
});

app.listen(3000, () => console.log('Server is running on localhost:3000'));

const mockdata = [
  {
    "id": 1,
    "date": "01/10/2020",
    "comments": "Utility bill"
  },
  {
    "id": 2,
    "date": "05/10/2020",
    "comments": ""
  },
  {
    "id": 3,
    "date": "03/10/2020",
    "comments": ""
  },
  {
    "id": 4,
    "date": "03/20/2020",
    "comments": ""
  },
  {
    "id": 5,
    "date": "02/11/2020",
    "comments": ""
  },
  {
    "id": 6,
    "date": "06/23/2020",
    "comments": ""
  },
  {
    "id": 7,
    "date": "02/03/2020",
    "comments": ""
  }
]