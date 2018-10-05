const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('connected to db ' + config.database)
});

mongoose.connection.on('error', (error) => {
  console.log('error ' + error)
});

const app = express();
const port = 3000;
const ads = require('./routes/ads');
app.use(cors());


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());


app.use('/', ads);

app.listen(port, () => {
  console.log("running on port 3000");
})