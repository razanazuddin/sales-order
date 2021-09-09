const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The app server is running on port: ${port}`);
});

const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/list_sales_order', (req, res) => {
  fs.readFile(`${__dirname}/public/data.json`, 'utf8', (err, data) => {
    res.end(data);
  });
});

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE, function(err) {
    if(err){
      res.status(500).send(err);
    }
  });
});